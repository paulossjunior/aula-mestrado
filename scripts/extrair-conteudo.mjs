// Extrai os dados do protótipo Disciplina.dc.html para src/content/.
// Roda uma vez na migração; mantido no repositório como registro da origem.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const html = readFileSync(resolve(raiz, "Disciplina.dc.html"), "utf8");

const inicio = html.indexOf('<script type="text/x-dc" data-dc-script data-props="{}">');
const abre = html.indexOf(">", inicio) + 1;
const fim = html.indexOf("class Component extends DCLogic", abre);
const fonte = html.slice(abre, fim);

const mod = resolve(raiz, "scripts/.dados.mjs");
writeFileSync(
  mod,
  fonte +
    "\nexport { NOMES_U, AULAS, ARTIGOS, APRESENTACAO, DESENVOLVIDAS, FASES, FRONTEIRAS, NOME_FASE, DIST_FASE, DIST_AGENCIA, TIPOS_ESTUDO, MAIS_CITADOS, FRONTEIRA_AGENTICA, LACUNAS, conteudoApresentacao };\n"
);

const d = await import(mod + "?v=" + fonte.length);

const escrever = (rel, conteudo) => {
  const alvo = resolve(raiz, rel);
  mkdirSync(dirname(alvo), { recursive: true });
  writeFileSync(alvo, conteudo);
  console.log("escrito", rel);
};
const json = (rel, valor) => escrever(rel, JSON.stringify(valor, null, 2) + "\n");

// --- YAML mínimo, suficiente para o frontmatter que geramos ---------------
const escalar = (v) => {
  if (v === null || v === undefined) return '""';
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  const s = String(v);
  return '"' + s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"';
};
const yaml = (valor, nivel) => {
  const pad = "  ".repeat(nivel);
  if (Array.isArray(valor)) {
    if (valor.length === 0) return " []";
    return (
      "\n" +
      valor
        .map((item) => {
          if (item && typeof item === "object") {
            const linhas = Object.entries(item).map(([k, v]) =>
              v && typeof v === "object" ? pad + "  " + k + ":" + yaml(v, nivel + 2) : pad + "  " + k + ":" + " " + escalar(v)
            );
            return pad + "- " + linhas.join("\n").slice(pad.length + 2);
          }
          return pad + "- " + escalar(item);
        })
        .join("\n")
    );
  }
  if (valor && typeof valor === "object") {
    return (
      "\n" +
      Object.entries(valor)
        .map(([k, v]) =>
          v && typeof v === "object" ? pad + k + ":" + yaml(v, nivel + 1) : pad + k + ": " + escalar(v)
        )
        .join("\n")
    );
  }
  return " " + escalar(valor);
};
const frontmatter = (obj) =>
  "---\n" +
  Object.entries(obj)
    .map(([k, v]) => (v && typeof v === "object" ? k + ":" + yaml(v, 1) : k + ": " + escalar(v)))
    .join("\n") +
  "\n---\n";

// --- Aulas ----------------------------------------------------------------
// Âncoras do protótipo viram rotas reais.
const ROTAS = { "#fases": "/codebook", "#mapeamento": "/codebook/mapeamento", "#avaliacao": "/avaliacao" };
const materiais = (lista) =>
  lista.map((t) => {
    const [texto, href] = t.split("|");
    return href ? { texto, href: ROTAS[href] || href } : { texto };
  });
const leituras = (lista) =>
  lista.map(([titulo, autor, fonte, tag, href]) =>
    href ? { titulo, autor, fonte, tag, href } : { titulo, autor, fonte, tag }
  );
const roteiro = (lista) => lista.map(([hora, texto]) => ({ hora, texto }));

for (const a of d.AULAS) {
  const ehApres = d.APRESENTACAO.includes(a.n);
  const fechada = d.DESENVOLVIDAS.includes(a.n);
  const estado = ehApres ? "apresentacao" : fechada ? "fechada" : "definir";
  const base = ehApres ? { ...a, ...d.conteudoApresentacao(a) } : a;

  const fm = {
    n: a.n,
    data: a.data,
    dataLonga: a.dataLonga,
    unidade: a.u,
    estado,
    titulo: base.titulo,
    leitura: base.leitura,
    resumo: base.resumo,
    objetivos: base.objetivos,
    roteiro: roteiro(base.roteiro),
    atividade: base.atividade,
    entrega: base.entrega || "Sem entrega",
    prazo: base.prazo || "",
    leituras: leituras(base.leituras),
    materiais: materiais(base.materiais),
  };
  // Encontro de apresentação: o plano original fica guardado, não renderizado.
  if (ehApres) {
    fm.rascunho = {
      titulo: a.titulo,
      leitura: a.leitura,
      resumo: a.resumo,
      objetivos: a.objetivos,
      roteiro: roteiro(a.roteiro),
      atividade: a.atividade,
      entrega: a.entrega,
      prazo: a.prazo,
      leituras: leituras(a.leituras),
      materiais: materiais(a.materiais),
    };
  }
  const nota =
    estado === "definir"
      ? "<!-- Encontro em preparação: os campos acima são rascunho e NÃO aparecem no site.\n     Para publicar, revise o conteúdo e troque `estado: definir` por `estado: fechada`. -->\n"
      : estado === "apresentacao"
        ? "<!-- Último encontro do mês: apresentação de trabalho e debate.\n     O plano original está preservado em `rascunho` e não é renderizado. -->\n"
        : "<!-- Encontro fechado: o conteúdo abaixo está publicado no site. -->\n";
  escrever(`src/content/aulas/${a.n}.md`, frontmatter(fm) + "\n" + nota);
}

// --- Codebook -------------------------------------------------------------
json("src/content/codebook/fases.json", d.FASES);
json("src/content/codebook/fronteiras.json", d.FRONTEIRAS);

// --- Mapeamento -----------------------------------------------------------
json("src/content/mapeamento/distribuicao-fase.json", d.DIST_FASE);
json("src/content/mapeamento/distribuicao-agencia.json", d.DIST_AGENCIA);
json("src/content/mapeamento/tipos-estudo.json", d.TIPOS_ESTUDO);
json("src/content/mapeamento/mais-citados.json", d.MAIS_CITADOS);
json("src/content/mapeamento/fronteira-agentica.json", d.FRONTEIRA_AGENTICA);
json("src/content/mapeamento/lacunas.json", d.LACUNAS);

// --- Bibliografia ---------------------------------------------------------
json(
  "src/content/bibliografia.json",
  d.ARTIGOS.map(([id, tag]) => ({ id, tag }))
);

// --- Unidades -------------------------------------------------------------
json("src/content/unidades.json", [
  {
    romano: "I",
    nome: d.NOMES_U.I,
    descricao:
      "Como um modelo de linguagem se comporta diante de código: o que ele garante, o que ele apenas parece garantir e como medir a diferença.",
  },
  {
    romano: "II",
    nome: d.NOMES_U.II,
    descricao:
      "Da especificação ao agente que age sobre um repositório — arquiteturas, ferramentas, critérios de parada e colaboração entre agentes.",
  },
  {
    romano: "III",
    nome: d.NOMES_U.III,
    descricao:
      "Método: como avaliar assistentes e agentes com desenho experimental defensável, e as obrigações éticas e legais do código gerado.",
  },
]);

json("src/content/nomes-fase.json", d.NOME_FASE);
console.log("ok");
