// Troca os códigos F1…F11 pelos nomes das fases nos arquivos de conteúdo.
// Os códigos continuam nos dados (corpus.js e o campo `cod`) como chave interna;
// o que sai deste script é só o texto que o site exibe.
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const p = (rel) => resolve(raiz, rel);
const lerJson = (rel) => JSON.parse(readFileSync(p(rel), "utf8"));
const gravarJson = (rel, v) => {
  writeFileSync(p(rel), JSON.stringify(v, null, 2) + "\n");
  console.log("reescrito", rel);
};

const CURTO = lerJson("src/content/nomes-fase.json");

// Em prosa o nome entra em caixa baixa; no começo de frase, capitalizado.
const minusculo = (s) => s.charAt(0).toLowerCase() + s.slice(1);
const capitalizar = (s) => s.charAt(0).toUpperCase() + s.slice(1);

function nomear(texto) {
  if (typeof texto !== "string") return texto;
  return texto.replace(/(^|[.:;!?]\s+|\(|—\s+)?\bF(1[01]|[1-9])\b/g, (todo, antes, n) => {
    const nome = CURTO["F" + n];
    if (!nome) return todo;
    const prefixo = antes ?? "";
    const inicioDeFrase = prefixo !== "" && prefixo !== "(" && !prefixo.startsWith("—");
    return prefixo + (inicioDeFrase ? capitalizar(nome) : minusculo(nome));
  });
}

// --- fases: ganha `curto` e perde os códigos da prosa ----------------------
const fases = lerJson("src/content/codebook/fases.json").map((f) => ({
  cod: f.cod, // chave interna, não exibida
  curto: CURTO[f.cod],
  nome: f.nome,
  sec: f.sec,
  sedes: f.sedes,
  escopo: nomear(f.escopo),
  inclui: nomear(f.inclui),
  naoInclui: nomear(f.naoInclui),
  teste: nomear(f.teste),
  ...(f.nota ? { nota: nomear(f.nota) } : {}),
  exemplos: f.exemplos,
}));
gravarJson("src/content/codebook/fases.json", fases);

// --- fronteiras: o par vira nomes próprios, o texto vira prosa -------------
const fronteiras = lerJson("src/content/codebook/fronteiras.json").map((fr) => ({
  par: fr.par
    .split(" · ")
    .map((c) => CURTO[c] ?? c)
    .join(" · "),
  texto: nomear(fr.texto),
}));
gravarJson("src/content/codebook/fronteiras.json", fronteiras);

// --- tabelas do mapeamento: o rótulo perde o prefixo "F1 " ----------------
for (const arquivo of [
  "src/content/mapeamento/distribuicao-fase.json",
  "src/content/mapeamento/distribuicao-agencia.json",
]) {
  gravarJson(
    arquivo,
    lerJson(arquivo).map((l) => ({ ...l, fase: l.fase.replace(/^F(1[01]|[1-9])\s+/, "") }))
  );
}

console.log("ok");
