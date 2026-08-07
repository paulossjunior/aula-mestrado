// Gera a figura do mapeamento a partir dos dados de conteúdo, em SVG.
// Roda de novo sempre que as tabelas mudarem: node scripts/gerar-figuras.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ler = (rel) => JSON.parse(readFileSync(resolve(raiz, rel), "utf8"));

const porFase = ler("src/content/mapeamento/distribuicao-fase.json");
const porAgencia = ler("src/content/mapeamento/distribuicao-agencia.json");

// Tokens do design system Modernist.
const BG = "#f3f2f2";
const INK = "#201e1d";
const ACENTO = "#ec3013";
const DIVISOR = "#bab6b6";
const FONTE = "Archivo, system-ui, sans-serif";

const num = (v) => (v === "–" ? 0 : Number(v));

// A cor de cada linha vem da fração de revisões com agentes como objeto central.
const fracaoCentral = new Map(
  porAgencia.map((a) => {
    const total = num(a.central) + num(a.secao) + num(a.sem);
    return [a.fase, total ? num(a.central) / total : 0];
  })
);

const ANOS = [
  ["a23", "2023"],
  ["a24", "2024"],
  ["a25", "2025"],
  ["a26", "2026"],
];

const PAD = 28;
const MARGEM_E = PAD + 340;
const MARGEM_D = 104;
const TOPO = 96;
const LINHA = 54;
const COL = 132;
const L = MARGEM_E + ANOS.length * COL + MARGEM_D;
const A = TOPO + porFase.length * LINHA + 108;

const maxN = Math.max(...porFase.flatMap((f) => ANOS.map(([k]) => num(f[k]))));
// A área ainda cresce com o valor, mas o menor círculo precisa caber o número.
const RAIO_MIN = 12;
const RAIO_MAX = 25;
const raio = (n) => (n === 0 ? 0 : RAIO_MIN + Math.sqrt(n / maxN) * (RAIO_MAX - RAIO_MIN));
const preenchimento = (frac) => 0.12 + 0.88 * frac;

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const partes = [];
partes.push(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${L} ${A}" width="${L}" height="${A}" role="img" aria-label="Distribuição dos 171 estudos secundários por fase do processo e ano de submissão no arXiv">`,
  `<rect width="${L}" height="${A}" fill="${BG}"/>`
);

// Cabeçalho: anos
ANOS.forEach(([, rotulo], i) => {
  const x = MARGEM_E + i * COL + COL / 2;
  partes.push(
    `<text x="${x}" y="${TOPO - 38}" font-family="${FONTE}" font-size="15" font-weight="800" fill="${INK}" text-anchor="middle" letter-spacing="1.5">${rotulo}</text>`
  );
});
partes.push(
  `<text x="${L - MARGEM_D + 34}" y="${TOPO - 38}" font-family="${FONTE}" font-size="15" font-weight="800" fill="${INK}" text-anchor="middle" letter-spacing="1.5">TOTAL</text>`,
  `<line x1="0" y1="${TOPO - 22}" x2="${L}" y2="${TOPO - 22}" stroke="${INK}" stroke-width="2"/>`
);

// Linhas
porFase.forEach((f, r) => {
  const y = TOPO + r * LINHA + LINHA / 2;
  const frac = fracaoCentral.get(f.fase) ?? 0;

  partes.push(
    `<text x="${PAD}" y="${y + 5}" font-family="${FONTE}" font-size="15" font-weight="700" fill="${INK}">${esc(f.fase)}</text>`
  );

  ANOS.forEach(([chave], i) => {
    const n = num(f[chave]);
    const cx = MARGEM_E + i * COL + COL / 2;
    if (n === 0) {
      partes.push(
        `<text x="${cx}" y="${y + 5}" font-family="${FONTE}" font-size="14" fill="${DIVISOR}" text-anchor="middle">–</text>`
      );
      return;
    }
    const op = preenchimento(frac);
    partes.push(
      `<circle cx="${cx}" cy="${y}" r="${raio(n).toFixed(1)}" fill="${ACENTO}" fill-opacity="${op.toFixed(2)}" stroke="${INK}" stroke-width="2"/>`,
      `<text x="${cx}" y="${y + 5}" font-family="${FONTE}" font-size="13" font-weight="800" fill="${op > 0.55 ? "#fff" : INK}" text-anchor="middle">${n}</text>`
    );
  });

  partes.push(
    `<text x="${L - MARGEM_D + 34}" y="${y + 5}" font-family="${FONTE}" font-size="16" font-weight="900" fill="${INK}" text-anchor="middle">${f.total}</text>`,
    `<line x1="0" y1="${TOPO + (r + 1) * LINHA}" x2="${L}" y2="${TOPO + (r + 1) * LINHA}" stroke="${DIVISOR}" stroke-width="2"/>`
  );
});

// Rodapé: régua forte, total e legenda de cor
const yBase = TOPO + porFase.length * LINHA;
partes.push(`<line x1="0" y1="${yBase}" x2="${L}" y2="${yBase}" stroke="${INK}" stroke-width="2"/>`);
const total = porFase.reduce((s, f) => s + Number(f.total), 0);
partes.push(
  `<text x="${PAD}" y="${yBase + 34}" font-family="${FONTE}" font-size="13" font-weight="800" fill="${INK}" letter-spacing="1.2">N = ${total} ESTUDOS SECUNDÁRIOS · ${porFase.length} FASES</text>`
);

// Legenda de cor, na linha de baixo, sem encostar no texto acima.
const yLeg = yBase + 74;
partes.push(
  `<text x="${PAD}" y="${yLeg + 5}" font-family="${FONTE}" font-size="12" font-weight="700" fill="${INK}" letter-spacing="1">AGENTES COMO OBJETO CENTRAL DA REVISÃO</text>`
);
[0.0, 0.25, 0.5, 0.75, 1.0].forEach((f, i) => {
  const x = MARGEM_E + i * 46;
  partes.push(
    `<circle cx="${x}" cy="${yLeg}" r="11" fill="${ACENTO}" fill-opacity="${preenchimento(f).toFixed(2)}" stroke="${INK}" stroke-width="2"/>`
  );
});
partes.push(
  `<text x="${MARGEM_E - 14}" y="${yLeg + 5}" font-family="${FONTE}" font-size="12" font-weight="600" fill="${INK}" text-anchor="end">nenhuma</text>`,
  `<text x="${MARGEM_E + 4 * 46 + 18}" y="${yLeg + 5}" font-family="${FONTE}" font-size="12" font-weight="600" fill="${INK}">todas</text>`
);

partes.push("</svg>");

const alvo = resolve(raiz, "public/uploads/mapa_secundarios_fase_ano.svg");
writeFileSync(alvo, partes.join("\n") + "\n");
console.log("escrito public/uploads/mapa_secundarios_fase_ano.svg");
console.log(`  ${porFase.length} fases · maior célula = ${maxN} · total ${porFase.reduce((s, f) => s + Number(f.total), 0)}`);

// ---------------------------------------------------------------------------
// Segunda figura: mapa de calor das sedes de publicação por fase do processo.
// ---------------------------------------------------------------------------
const sedes = ler("src/content/mapeamento/sedes-fase.json");

const H_PAD = 28;
const H_ROTULO = 132;
const H_CEL = 94;
const H_LINHA = 52;
const H_TOPO = 118;
const H_L = H_PAD + H_ROTULO + sedes.fases.length * H_CEL + H_PAD;
const H_A = H_TOPO + sedes.sedes.length * H_LINHA + 78;

const maxCel = Math.max(...sedes.sedes.flatMap((s) => s.valores));
const intensidade = (v) => (v === 0 ? 0 : 0.1 + 0.9 * Math.sqrt(v / maxCel));

// Rótulos longos quebram em duas linhas, sem hifenizar.
const quebrar = (texto, limite = 12) => {
  const palavras = texto.split(" ");
  const linhas = [""];
  for (const p of palavras) {
    const atual = linhas[linhas.length - 1];
    if (atual && (atual + " " + p).length > limite) linhas.push(p);
    else linhas[linhas.length - 1] = atual ? atual + " " + p : p;
  }
  return linhas.slice(0, 2);
};

const h = [
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${H_L} ${H_A}" width="${H_L}" height="${H_A}" role="img" aria-label="Mapa de calor dos ${sedes.total} artigos com sede confirmada, por sede de publicação e fase do processo">`,
  `<rect width="${H_L}" height="${H_A}" fill="${BG}"/>`,
];

sedes.fases.forEach((nome, c) => {
  const x = H_PAD + H_ROTULO + c * H_CEL + H_CEL / 2;
  quebrar(nome).forEach((linha, k) => {
    h.push(
      `<text x="${x}" y="${H_TOPO - 44 + k * 17}" font-family="${FONTE}" font-size="12.5" font-weight="700" fill="${INK}" text-anchor="middle">${esc(linha)}</text>`
    );
  });
});
h.push(
  `<line x1="0" y1="${H_TOPO - 20}" x2="${H_L}" y2="${H_TOPO - 20}" stroke="${INK}" stroke-width="2"/>`
);

let ultimoTipo = null;
sedes.sedes.forEach((s, r) => {
  const y = H_TOPO + r * H_LINHA;
  // Régua forte onde as conferências terminam e os periódicos começam.
  if (ultimoTipo && ultimoTipo !== s.tipo) {
    h.push(`<line x1="0" y1="${y}" x2="${H_L}" y2="${y}" stroke="${INK}" stroke-width="2"/>`);
  }
  ultimoTipo = s.tipo;

  h.push(
    `<text x="${H_PAD}" y="${y + H_LINHA / 2 + 5}" font-family="${FONTE}" font-size="15" font-weight="800" fill="${INK}">${esc(s.sede)}</text>`,
    `<text x="${H_PAD + H_ROTULO - 16}" y="${y + H_LINHA / 2 + 5}" font-family="${FONTE}" font-size="13" font-weight="700" fill="${INK}" fill-opacity="0.55" text-anchor="end">${s.total}</text>`
  );

  s.valores.forEach((v, c) => {
    const x = H_PAD + H_ROTULO + c * H_CEL;
    const op = intensidade(v);
    h.push(
      `<rect x="${x + 2}" y="${y + 4}" width="${H_CEL - 4}" height="${H_LINHA - 8}" fill="${ACENTO}" fill-opacity="${op.toFixed(2)}"/>`
    );
    h.push(
      v === 0
        ? `<text x="${x + H_CEL / 2}" y="${y + H_LINHA / 2 + 5}" font-family="${FONTE}" font-size="14" fill="${DIVISOR}" text-anchor="middle">–</text>`
        : `<text x="${x + H_CEL / 2}" y="${y + H_LINHA / 2 + 5}" font-family="${FONTE}" font-size="15" font-weight="800" fill="${op > 0.55 ? "#fff" : INK}" text-anchor="middle">${v}</text>`
    );
  });
});

const hBase = H_TOPO + sedes.sedes.length * H_LINHA;
h.push(
  `<line x1="0" y1="${hBase}" x2="${H_L}" y2="${hBase}" stroke="${INK}" stroke-width="2"/>`,
  `<text x="${H_PAD}" y="${hBase + 34}" font-family="${FONTE}" font-size="13" font-weight="800" fill="${INK}" letter-spacing="1.2">N = ${sedes.total} ARTIGOS COM SEDE CONFIRMADA · CONFERÊNCIAS ACIMA, PERIÓDICOS ABAIXO</text>`,
  "</svg>"
);

const alvoH = resolve(raiz, "public/uploads/sedes_fase_heatmap.svg");
writeFileSync(alvoH, h.join("\n") + "\n");
console.log("escrito public/uploads/sedes_fase_heatmap.svg");
console.log(`  ${sedes.sedes.length} sedes × ${sedes.fases.length} fases · maior célula = ${maxCel} · total ${sedes.total}`);

// ---------------------------------------------------------------------------
// Terceira figura: o fluxo do Spec Kit. Sai do mesmo JSON que a página usa,
// então nome e ordem dos comandos nunca divergem do texto.
// ---------------------------------------------------------------------------
const sk = ler("src/content/spec-kit.json");

const espinha = sk.nucleo.filter((c) => c.comando !== "/speckit.constitution" && c.comando !== "/speckit.converge");
const constituicao = sk.nucleo.find((c) => c.comando === "/speckit.constitution");
const converge = sk.nucleo.find((c) => c.comando === "/speckit.converge");
const curto = (c) => c.comando.replace("/speckit.", "");

const F_PAD = 40;
const CX_L = 196;   // largura da caixa
const CX_A = 76;    // altura da caixa
const GAP = 30;
const F_L = F_PAD * 2 + espinha.length * CX_L + (espinha.length - 1) * GAP;

const Y_CONST = 56;
const Y_ESPINHA = 210;
const Y_QUAL = 372;
const Y_CONV = 520;
const F_A = Y_CONV + CX_A + 96;

const f = [
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${F_L} ${F_A}" width="${F_L}" height="${F_A}" role="img" aria-label="Fluxo dos comandos do Spec Kit: a constituição governa todas as etapas; specify, plan, tasks, taskstoissues e implement formam a linha principal; clarify, checklist e analyze entram como verificação; converge devolve ao backlog o que ficou faltando">`,
  `<rect width="${F_L}" height="${F_A}" fill="${BG}"/>`,
  `<defs><marker id="seta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="${INK}"/></marker></defs>`,
];

// caixa com código do comando e etapa
const caixa = (x, y, w, cmd, rotulo, destaque = false) => {
  f.push(
    `<rect x="${x}" y="${y}" width="${w}" height="${CX_A}" fill="${destaque ? ACENTO : BG}" stroke="${INK}" stroke-width="2"/>`,
    `<text x="${x + 14}" y="${y + 29}" font-family="ui-monospace, Menlo, monospace" font-size="15" font-weight="700" fill="${destaque ? "#fff" : ACENTO}">${esc(cmd)}</text>`
  );
  quebrar(rotulo, 26).forEach((linha, k) =>
    f.push(
      `<text x="${x + 14}" y="${y + 50 + k * 17}" font-family="${FONTE}" font-size="13.5" font-weight="700" fill="${destaque ? "#fff" : INK}">${esc(linha)}</text>`
    )
  );
};

const seta = (x1, y1, x2, y2, tracejada = false) =>
  f.push(
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${INK}" stroke-width="2" marker-end="url(#seta)"${tracejada ? ' stroke-dasharray="6 5"' : ""}/>`
  );

// 1. constituição: faixa que cobre tudo
f.push(
  `<rect x="${F_PAD}" y="${Y_CONST}" width="${F_L - 2 * F_PAD}" height="${CX_A}" fill="${ACENTO}"/>`,
  `<text x="${F_PAD + 18}" y="${Y_CONST + 30}" font-family="ui-monospace, Menlo, monospace" font-size="16" font-weight="700" fill="#fff">${esc(constituicao.comando)}</text>`,
  `<text x="${F_PAD + 18}" y="${Y_CONST + 54}" font-family="${FONTE}" font-size="14" font-weight="700" fill="#fff">${esc(constituicao.etapa)} — vale para todas as etapas abaixo</text>`
);

// 2. linha principal
const xDe = (i) => F_PAD + i * (CX_L + GAP);
espinha.forEach((c, i) => {
  caixa(xDe(i), Y_ESPINHA, CX_L, curto(c), c.etapa);
  if (i > 0) seta(xDe(i) - GAP + 4, Y_ESPINHA + CX_A / 2, xDe(i) - 6, Y_ESPINHA + CX_A / 2);
});
// da constituição para a linha principal
seta(F_L / 2, Y_CONST + CX_A + 4, F_L / 2, Y_ESPINHA - 8);

// 3. comandos de verificação, presos ao ponto em que entram
const ancora = { "/speckit.clarify": 0, "/speckit.checklist": 0, "/speckit.analyze": 2 };
const usados = {};
sk.opcionais.forEach((c) => {
  const i = ancora[c.comando] ?? 0;
  const n = (usados[i] = (usados[i] ?? 0) + 1);
  const x = xDe(i) + (n - 1) * (CX_L + GAP);
  caixa(x, Y_QUAL, CX_L, curto(c), c.etapa);
  seta(x + CX_L / 2, Y_QUAL - 6, x + CX_L / 2, Y_ESPINHA + CX_A + 6, true);
});
f.push(
  `<text x="${F_PAD}" y="${Y_QUAL - 26}" font-family="${FONTE}" font-size="12.5" font-weight="700" fill="${INK}" fill-opacity="0.6" letter-spacing="1">VERIFICAÇÃO — OPCIONAL NO FLUXO, NÃO NA PRÁTICA</text>`
);

// 4. converge: volta ao backlog o que ficou faltando
const xConv = xDe(espinha.length - 1);
caixa(xConv, Y_CONV, CX_L, curto(converge), converge.etapa, true);
seta(xConv + CX_L / 2, Y_ESPINHA + CX_A + 6, xConv + CX_L / 2, Y_CONV - 8);
// retorno até a caixa de tasks
const yVolta = Y_CONV + CX_A + 34;
const xTasks = xDe(2) + CX_L / 2;
f.push(
  `<path d="M ${xConv} ${Y_CONV + CX_A / 2} H ${xConv - 22} V ${yVolta} H ${xTasks} V ${Y_ESPINHA + CX_A + 8}" fill="none" stroke="${INK}" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#seta)"/>`,
  `<text x="${xTasks + 12}" y="${yVolta - 8}" font-family="${FONTE}" font-size="12.5" font-weight="700" fill="${INK}" fill-opacity="0.7">o que faltou volta como tarefa nova</text>`,
  "</svg>"
);

writeFileSync(resolve(raiz, "public/uploads/spec-kit-fluxo.svg"), f.join("\n") + "\n");
console.log("escrito public/uploads/spec-kit-fluxo.svg");
console.log(`  ${espinha.length} etapas na linha principal · ${sk.opcionais.length} de verificação · converge no retorno`);

// ---------------------------------------------------------------------------
// Quarta figura: onde no processo cada tópico de segurança se concentra.
// ---------------------------------------------------------------------------
const seg = ler("src/content/seguranca.json");

// Só as fases que recebem alguma obra de segurança, na ordem do ciclo de vida.
const ORDEM_FASES = seg.porFase.map((f) => f.fase);
const colunas = ORDEM_FASES.filter((f) => seg.topicos.some((t) => (t.porFase[f] ?? 0) > 0));

const S_PAD = 28;
const S_ROTULO = 330;
const S_CEL = 104;
const S_LINHA = 50;
const S_TOPO = 130;
const S_L = S_PAD + S_ROTULO + colunas.length * S_CEL + 78;
const S_A = S_TOPO + seg.topicos.length * S_LINHA + 92;

const maxSeg = Math.max(...seg.topicos.flatMap((t) => Object.values(t.porFase)));
const intSeg = (v) => (v === 0 ? 0 : 0.1 + 0.9 * Math.sqrt(v / maxSeg));

const s = [
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${S_L} ${S_A}" width="${S_L}" height="${S_A}" role="img" aria-label="Distribuição dos dez tópicos de segurança pelas fases do processo, nas ${seg.totais.comSeguranca} obras que tratam de segurança">`,
  `<rect width="${S_L}" height="${S_A}" fill="${BG}"/>`,
];

colunas.forEach((nome, c) => {
  const x = S_PAD + S_ROTULO + c * S_CEL + S_CEL / 2;
  quebrar(nome, 13).forEach((linha, k) =>
    s.push(
      `<text x="${x}" y="${S_TOPO - 52 + k * 17}" font-family="${FONTE}" font-size="12.5" font-weight="700" fill="${INK}" text-anchor="middle">${esc(linha)}</text>`
    )
  );
});
s.push(
  `<text x="${S_L - 40}" y="${S_TOPO - 52}" font-family="${FONTE}" font-size="12.5" font-weight="800" fill="${INK}" text-anchor="middle">TOTAL</text>`,
  `<line x1="0" y1="${S_TOPO - 24}" x2="${S_L}" y2="${S_TOPO - 24}" stroke="${INK}" stroke-width="2"/>`
);

seg.topicos.forEach((t, r) => {
  const y = S_TOPO + r * S_LINHA;
  s.push(
    `<text x="${S_PAD}" y="${y + S_LINHA / 2 + 5}" font-family="${FONTE}" font-size="14" font-weight="700" fill="${INK}">${esc(t.cod)} ${esc(t.nome)}</text>`
  );
  colunas.forEach((nome, c) => {
    const v = t.porFase[nome] ?? 0;
    const x = S_PAD + S_ROTULO + c * S_CEL;
    const op = intSeg(v);
    s.push(`<rect x="${x + 2}" y="${y + 4}" width="${S_CEL - 4}" height="${S_LINHA - 8}" fill="${ACENTO}" fill-opacity="${op.toFixed(2)}"/>`);
    s.push(
      v === 0
        ? `<text x="${x + S_CEL / 2}" y="${y + S_LINHA / 2 + 5}" font-family="${FONTE}" font-size="13" fill="${DIVISOR}" text-anchor="middle">–</text>`
        : `<text x="${x + S_CEL / 2}" y="${y + S_LINHA / 2 + 5}" font-family="${FONTE}" font-size="14" font-weight="800" fill="${op > 0.55 ? "#fff" : INK}" text-anchor="middle">${v}</text>`
    );
  });
  s.push(
    `<text x="${S_L - 40}" y="${y + S_LINHA / 2 + 5}" font-family="${FONTE}" font-size="15" font-weight="900" fill="${INK}" text-anchor="middle">${t.total}</text>`,
    `<line x1="0" y1="${y + S_LINHA}" x2="${S_L}" y2="${y + S_LINHA}" stroke="${DIVISOR}" stroke-width="2"/>`
  );
});

const sBase = S_TOPO + seg.topicos.length * S_LINHA;
s.push(
  `<line x1="0" y1="${sBase}" x2="${S_L}" y2="${sBase}" stroke="${INK}" stroke-width="2"/>`,
  `<text x="${S_PAD}" y="${sBase + 34}" font-family="${FONTE}" font-size="13" font-weight="800" fill="${INK}" letter-spacing="1.2">N = ${seg.totais.comSeguranca} OBRAS COM SEGURANÇA · ${seg.totais.central} COM SEGURANÇA COMO OBJETO CENTRAL</text>`,
  `<text x="${S_PAD}" y="${sBase + 58}" font-family="${FONTE}" font-size="12.5" font-weight="600" fill="${INK}" fill-opacity="0.7">De ${seg.totais.obras} obras nos dois corpora. Fases sem nenhuma obra de segurança ficaram de fora do eixo.</text>`,
  "</svg>"
);

writeFileSync(resolve(raiz, "public/uploads/seguranca-topico-fase.svg"), s.join("\n") + "\n");
console.log("escrito public/uploads/seguranca-topico-fase.svg");
console.log(`  ${seg.topicos.length} tópicos × ${colunas.length} fases · maior célula = ${maxSeg}`);
