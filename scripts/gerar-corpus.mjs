#!/usr/bin/env node
// Gera src/data/corpus.js e as obras de segurança a partir dos CSV em fontes/.
//
// Os CSV são a fonte; nada aqui é digitado à mão. Quando o corpus for atualizado,
// troque os arquivos em fontes/ e rode `node scripts/gerar-corpus.mjs`.
//
// Saídas:
//   src/data/corpus.js               os dois corpora, para a ilha da base de leituras
//   src/content/seguranca.json       o campo `obras` de cada tópico (o resto do arquivo é preservado)

import { readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const de = (p) => resolve(raiz, p);

// Parser de CSV com aspas e quebras de linha dentro de campo. O corpus tem
// justificativas com vírgula e aspas, então split(",") não serve.
function lerCsv(caminho) {
  const texto = readFileSync(caminho, "utf8").replace(/^﻿/, "");
  const linhas = [];
  let campo = "";
  let linha = [];
  let aspas = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (aspas) {
      if (c === '"') {
        if (texto[i + 1] === '"') {
          campo += '"';
          i++;
        } else aspas = false;
      } else campo += c;
      continue;
    }
    if (c === '"') aspas = true;
    else if (c === ",") {
      linha.push(campo);
      campo = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && texto[i + 1] === "\n") i++;
      linha.push(campo);
      if (linha.some((v) => v !== "")) linhas.push(linha);
      campo = "";
      linha = [];
    } else campo += c;
  }
  linha.push(campo);
  if (linha.some((v) => v !== "")) linhas.push(linha);

  const [cabecalho, ...corpo] = linhas;
  return corpo.map((valores) =>
    Object.fromEntries(cabecalho.map((chave, i) => [chave.trim(), (valores[i] ?? "").trim()]))
  );
}

// Os nomes de fase variam entre os CSV ("Verificação & qualidade" e
// "Verificação e qualidade" são a mesma fase). O site tem um nome só por código,
// e é ele que vale — senão o filtro por fase mostraria a mesma fase duas vezes.
const nomesFase = JSON.parse(readFileSync(de("src/content/nomes-fase.json"), "utf8"));
const nomeDaFase = (cod) => nomesFase[cod] ?? cod;

// Citações vêm como "101.0" ou vazio. Vazio significa sem registro no OpenAlex,
// que é diferente de zero citação — a distinção é preservada.
const inteiro = (v) => (v === "" || v == null ? "" : String(Math.round(Number(v))));

const secundarios = lerCsv(de("fontes/corpus_secundarios_es_ia.csv"))
  .map((r) => ({
    id: r.arxiv_id,
    t: r.titulo,
    a: r.primeiro_autor,
    ano: r.ano,
    f: r.fase,
    fn: nomeDaFase(r.fase),
    tp: r.tipo,
    tpn: r.tipo_nome,
    ag: r.agentico,
    seg: r.seguranca,
    st: r.topico_seguranca,
    foco: r.foco,
    cit: inteiro(r.citacoes),
    url: r.url,
    na: r.n_buscas_recuperado,
  }))
  .sort((x, y) => (Number(y.cit) || 0) - (Number(x.cit) || 0));

const sedes = lerCsv(de("fontes/corpus_sedes_es.csv"))
  .map((r) => ({
    id: r.arxiv_id,
    t: r.titulo,
    a: r.primeiro_autor,
    ano: r.ano,
    f: r.fase,
    fn: nomeDaFase(r.fase),
    sede: r.sede,
    trilha: r.tipo_trilha,
    c: r.contrib,
    cn: r.contrib_nome,
    ag: r.agentico,
    seg: r.seguranca,
    st: r.topico_seguranca,
    foco: r.foco,
    cit: inteiro(r.citacoes),
    url: r.url,
  }))
  .sort((x, y) => (Number(y.cit) || 0) - (Number(x.cit) || 0));

writeFileSync(
  de("src/data/corpus.js"),
  `// GERADO por scripts/gerar-corpus.mjs a partir de fontes/*.csv. Não edite à mão.\n` +
    `export const SECUNDARIOS = ${JSON.stringify(secundarios)};\n` +
    `export const SEDES = ${JSON.stringify(sedes)};\n`
);

// --- A dimensão de segurança -------------------------------------------------
// Uma obra pode aparecer nos dois corpora (a mesma revisão publicada em sede).
// Conta uma vez, mas registra as duas origens, para o leitor não achar que são
// trabalhos diferentes.
const seg = lerCsv(de("fontes/corpus_seguranca_topicos.csv"));
const porTopico = new Map();
for (const r of seg) {
  if (!porTopico.has(r.topico_seguranca)) porTopico.set(r.topico_seguranca, new Map());
  const obras = porTopico.get(r.topico_seguranca);
  const origem = r.corpus === "primario" ? r.sede : "estudo secundário";
  const existente = obras.get(r.arxiv_id);
  if (existente) {
    if (!existente.origem.includes(origem)) existente.origem.push(origem);
    continue;
  }
  obras.set(r.arxiv_id, {
    arxiv: r.arxiv_id,
    titulo: r.titulo,
    origem: [origem],
    fase: nomeDaFase(r.fase),
    grau: r.seguranca,
    citacoes: inteiro(r.citacoes),
    foco: r.foco,
  });
}

const dados = JSON.parse(readFileSync(de("src/content/seguranca.json"), "utf8"));
for (const t of dados.topicos) {
  const obras = [...(porTopico.get(t.cod)?.values() ?? [])].sort(
    (x, y) => (Number(y.citacoes) || 0) - (Number(x.citacoes) || 0)
  );
  t.obras = obras.map((o) => ({ ...o, origem: o.origem.join(" · ") }));

  // Contagens da tabela recalculadas sobre obras únicas, para a tabela e a lista
  // não se contradizerem: três obras aparecem nos dois corpora, e o corpus as
  // conta duas vezes (uma em cada), mas uma lista de leitura não repete título.
  t.total = obras.length;
  t.central = obras.filter((o) => o.grau === "central").length;
  t.porFase = obras.reduce((acc, o) => ((acc[o.fase] = (acc[o.fase] ?? 0) + 1), acc), {});
  const sedesDoTopico = obras
    .flatMap((o) => o.origem.filter((s) => s !== "estudo secundário"))
    .reduce((acc, s) => ((acc[s] = (acc[s] ?? 0) + 1), acc), {});
  t.sedes =
    Object.entries(sedesDoTopico)
      .sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0]))
      .slice(0, 3)
      .map(([s, n]) => `${s} ${n}`)
      .join(" · ") || "—";
}
// A ponte entre os dois números: 140 registros de classificação, 137 obras.
dados.totais.obrasUnicas = dados.topicos.reduce((s, t) => s + t.total, 0);
writeFileSync(de("src/content/seguranca.json"), JSON.stringify(dados, null, 2) + "\n");

// Os CSV publicados para download são cópias exatas dos de fontes/.
for (const nome of [
  "corpus_secundarios_es_ia.csv",
  "corpus_sedes_es.csv",
  "corpus_seguranca_topicos.csv",
]) {
  copyFileSync(de(`fontes/${nome}`), de(`public/dados/${nome}`));
}

const total = dados.topicos.reduce((s, t) => s + t.obras.length, 0);
console.log(`  ${secundarios.length} estudos secundários`);
console.log(`  ${sedes.length} artigos em sedes`);
console.log(`  ${total} obras de segurança em ${dados.topicos.length} tópicos`);

// --- As tabelas do mapeamento ------------------------------------------------
// Todas derivam dos mesmos CSV. Antes eram transcritas à mão, e por isso ficaram
// no corte de 171/321 enquanto o corpus já era outro.
const nomeLongoFase = Object.fromEntries(
  JSON.parse(readFileSync(de("src/content/codebook/fases.json"), "utf8")).map((f) => [f.cod, f.nome])
);
const ordemFase = JSON.parse(readFileSync(de("src/content/codebook/fases.json"), "utf8")).map(
  (f) => f.cod
);
const trav = (n) => (n === 0 ? "–" : String(n));
const conta = (linhas, teste) => linhas.filter(teste).length;

const distribuicaoFase = ordemFase.map((cod) => {
  const doFase = secundarios.filter((r) => r.f === cod);
  return {
    fase: nomeLongoFase[cod],
    a23: trav(conta(doFase, (r) => r.ano === "2023")),
    a24: trav(conta(doFase, (r) => r.ano === "2024")),
    a25: trav(conta(doFase, (r) => r.ano === "2025")),
    a26: trav(conta(doFase, (r) => r.ano === "2026")),
    total: String(doFase.length),
  };
});

const distribuicaoAgencia = ordemFase.map((cod) => {
  const doFase = secundarios.filter((r) => r.f === cod);
  return {
    fase: nomeLongoFase[cod],
    central: trav(conta(doFase, (r) => r.ag === "alto")),
    secao: trav(conta(doFase, (r) => r.ag === "medio")),
    sem: trav(conta(doFase, (r) => r.ag === "baixo")),
  };
});

const nomesTipo = new Map(
  lerCsv(de("fontes/corpus_secundarios_es_ia.csv")).map((r) => [r.tipo, r.tipo_nome])
);
const tiposEstudo = [...nomesTipo.keys()]
  .sort()
  .map((tp) => {
    const doTipo = secundarios.filter((r) => r.tp === tp);
    return {
      tipo: `${tp} ${nomesTipo.get(tp)}`,
      a23: trav(conta(doTipo, (r) => r.ano === "2023")),
      a24: trav(conta(doTipo, (r) => r.ano === "2024")),
      a25: trav(conta(doTipo, (r) => r.ano === "2025")),
      a26: trav(conta(doTipo, (r) => r.ano === "2026")),
      total: String(doTipo.length),
    };
  });

const periodicos = new Set(["TSE", "TOSEM"]);
const sedesFase = {
  total: sedes.length,
  legenda: `${sedes.length} artigos com sede confirmada no campo de comentário do arXiv (2023–2026). Total por sede entre parênteses; conferências acima, periódicos TSE e TOSEM abaixo.`,
  fases: ordemFase.map((cod) => nomeDaFase(cod)),
  sedes: [...new Set(sedes.map((r) => r.sede))]
    .map((sede) => {
      const daSede = sedes.filter((r) => r.sede === sede);
      return {
        sede,
        tipo: periodicos.has(sede) ? "periódico" : "conferência",
        total: daSede.length,
        valores: ordemFase.map((cod) => conta(daSede, (r) => r.f === cod)),
      };
    })
    .sort((x, y) => (periodicos.has(x.sede) ? 1 : 0) - (periodicos.has(y.sede) ? 1 : 0) || y.total - x.total),
};

const maisCitados = secundarios.slice(0, 15).map((r) => ({
  id: r.id,
  url: r.url,
  ano: r.ano,
  fase: r.fn,
  tipo: r.tp,
  cit: r.cit,
  fwci: "",
  titulo: r.t,
}));
// O FWCI vem do CSV, não do corpus.js, que não o carrega.
const fwciPorId = new Map(
  lerCsv(de("fontes/corpus_secundarios_es_ia.csv")).map((r) => [
    r.arxiv_id,
    r.fwci === "" ? "" : Number(r.fwci).toFixed(1),
  ])
);
for (const r of maisCitados) r.fwci = fwciPorId.get(r.id) ?? "";

// A fronteira agêntica: as revisões que tomam agentes como objeto central,
// da mais recente para a mais antiga.
const fronteira = secundarios
  .filter((r) => r.ag === "alto")
  .sort((x, y) => Number(y.ano) - Number(x.ano) || (Number(y.cit) || 0) - (Number(x.cit) || 0))
  .slice(0, 18)
  .map((r) => ({ id: r.id, url: r.url, ano: r.ano, fase: r.fn, tipo: r.tp, titulo: r.t, foco: r.foco }));

const escrever = (nome, valor) =>
  writeFileSync(de(`src/content/mapeamento/${nome}.json`), JSON.stringify(valor, null, 2) + "\n");
escrever("distribuicao-fase", distribuicaoFase);
escrever("distribuicao-agencia", distribuicaoAgencia);
escrever("tipos-estudo", tiposEstudo);
escrever("sedes-fase", sedesFase);
escrever("mais-citados", maisCitados);
escrever("fronteira-agentica", fronteira);

console.log(
  `  mapeamento: ${distribuicaoFase.length} fases · ${tiposEstudo.length} tipos · ` +
    `${sedesFase.sedes.length} sedes · agêntico alto ${secundarios.filter((r) => r.ag === "alto").length}`
);
