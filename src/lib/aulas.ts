import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export const NOMES_U: Record<string, string> = {
  I: "Fundamentos",
  II: "Agentes",
  III: "Avaliação",
};

export type DadosAula = CollectionEntry<"aulas">["data"];

export type AulaResolvida = DadosAula & {
  detalhada: boolean;
  aDefinir: boolean;
  rotulo: string;
};

// O que o protótipo mostrava para um encontro ainda não fechado.
const EM_PREPARACAO = {
  titulo: "A definir",
  leitura: "Encontro em preparação",
  resumo:
    "Este encontro ainda está em preparação. Tema, roteiro, leitura obrigatória e entrega serão publicados aqui antes da aula.",
};

export function resolver(a: DadosAula): AulaResolvida {
  if (a.estado === "definir") {
    // O rascunho guardado no arquivo não vaza para o site.
    return { ...a, ...EM_PREPARACAO, detalhada: false, aDefinir: true, rotulo: "" };
  }
  if (a.estado === "apresentacao") {
    return { ...a, detalhada: true, aDefinir: false, rotulo: "Apresentação e debate" };
  }
  return { ...a, detalhada: true, aDefinir: false, rotulo: "" };
}

export async function todasAulas(): Promise<AulaResolvida[]> {
  const entradas = await getCollection("aulas");
  return entradas
    .map((e) => e.data)
    .sort((a, b) => a.n.localeCompare(b.n))
    .map(resolver);
}

// Tag de leitura: acento sólido para o que é obrigatório, contorno para o resto.
export function estiloTag(tag: string): string {
  const base =
    "font-family: var(--font-heading); font-weight: 700; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 8px; display: inline-block; ";
  return (
    base +
    (tag === "Obrigatória" || tag === "Núcleo"
      ? "background: var(--color-accent); color: #fff"
      : "background: transparent; color: var(--color-text); box-shadow: inset 0 0 0 2px var(--color-divider)")
  );
}
