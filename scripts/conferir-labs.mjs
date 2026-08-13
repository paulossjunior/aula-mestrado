#!/usr/bin/env node
// Confere que cada laboratório prometido na avaliação tem, no cronograma, um
// encontro que o atribui e um que o recebe. A disciplina promete 30% da nota em
// laboratórios; um lab sem data no cronograma é nota que o aluno não sabe cumprir.

import { readFileSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const labs = JSON.parse(readFileSync(resolve(raiz, "src/content/avaliacao.json"), "utf8")).labs;

const aulas = readdirSync(resolve(raiz, "src/content/aulas"))
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const bruto = readFileSync(resolve(raiz, "src/content/aulas", f), "utf8");
    // O rascunho guarda o plano antigo e não vale como promessa ao aluno.
    const texto = bruto.split("\nrascunho:")[0];
    const campo = (k) => (texto.match(new RegExp(`^${k}: *"?(.*?)"?$`, "m")) ?? [, ""])[1];
    return {
      n: f.replace(".md", ""),
      estado: campo("estado"),
      entrega: campo("entrega"),
      prazo: campo("prazo"),
    };
  })
  .sort((a, b) => a.n.localeCompare(b.n));

const falhas = [];
for (const lab of labs) {
  const encontro = (lab.prazo.match(/(\d+)/) ?? [])[1]?.padStart(2, "0");
  if (!encontro) {
    falhas.push(`Lab ${lab.n}: prazo "${lab.prazo}" não nomeia um encontro`);
    continue;
  }
  const recebe = aulas.find((a) => a.n === encontro);
  if (!recebe) {
    falhas.push(`Lab ${lab.n}: prazo aponta o encontro ${encontro}, que não existe`);
    continue;
  }
  const marca = new RegExp(`Lab ${Number(lab.n)}\\b`);
  const citado = `${recebe.entrega} ${recebe.prazo}`;
  if (!marca.test(citado)) {
    falhas.push(
      `Lab ${lab.n} vence no encontro ${encontro}, mas essa aula não o menciona ` +
        `(entrega: "${recebe.entrega}")`
    );
  }
  const atribui = aulas.filter((a) => marca.test(`${a.entrega} ${a.prazo}`)).map((a) => a.n);
  if (atribui.length < 2) {
    falhas.push(`Lab ${lab.n}: só o encontro ${atribui.join(", ")} o menciona — falta a atribuição`);
  }
  // Aula em "definir" não publica o próprio roteiro: a promessa existe na
  // avaliação, mas o encontro que a recebe ainda não é visível ao aluno.
  const invisiveis = atribui.filter((n) => aulas.find((a) => a.n === n)?.estado === "definir");
  const nota = invisiveis.length ? `  ⚠ encontro ${invisiveis.join(", ")} ainda em "definir"` : "";
  console.log(`  Lab ${lab.n}  vence no ${encontro}  · citado nos encontros ${atribui.join(", ")}${nota}`);
}

if (falhas.length) {
  console.error("\n  laboratórios sem lugar no cronograma:");
  for (const f of falhas) console.error(`   ${f}`);
  process.exit(1);
}
console.log(`  ${labs.length} laboratórios, todos com atribuição e entrega no cronograma`);
