import dados from "../content/multica.json";

// As quatro páginas do Multica seguem o Diátaxis: cada uma é um modo só, e o
// conteúdo de outro modo vira link. Os estilos repetidos moram aqui.
export const estilo = {
  etiqueta:
    "font-family: var(--font-heading); font-weight: 800; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 8px; display: inline-block; white-space: nowrap; background: transparent; color: var(--color-text); box-shadow: inset 0 0 0 2px var(--color-divider)",
  codigo: "font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 14px; font-weight: 700;",
  h1: "font-family: var(--font-heading); font-weight: 900; font-size: clamp(36px, 7vw, 72px); line-height: 0.96; letter-spacing: -0.035em; margin: 14px 0 0; max-width: 20ch; text-wrap: balance",
  h2: "font-family: var(--font-heading); font-weight: 900; font-size: clamp(26px, 4vw, 40px); letter-spacing: -0.025em; margin: 0 0 10px",
  h3: "font-family: var(--font-heading); font-weight: 900; font-size: clamp(21px, 3vw, 27px); letter-spacing: -0.02em; margin: 0 0 14px",
  intro: "font-size: 16px; line-height: 1.6; max-width: 64ch; margin: 0 0 28px; text-wrap: pretty",
  rotulo:
    "font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--color-accent-700)",
  sobretitulo:
    "font-size: 13px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--color-accent-700); margin-top: 28px",
  secao: "max-width: 1200px; margin: 0 auto; padding: 48px 32px",
};

// Âncora de um conceito na referência: o tutorial aponta para ela.
export function ancora(termo: string): string {
  return (
    "c-" +
    termo
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  );
}

export const termos = new Set(dados.referencia.grupos.flatMap((g) => g.conceitos.map((c) => c.termo)));
