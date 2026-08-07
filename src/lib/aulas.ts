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

// A janela do encontro sai do próprio roteiro: primeiro começo, último fim. Para
// encontro ainda não publicado devolve a janela padrão — ler o roteiro do rascunho
// vazaria informação que o site não deve mostrar.
export function janela(a: AulaResolvida): string {
  if (!a.detalhada || a.roteiro.length === 0) return "19h20–22h";
  const [inicio] = a.roteiro[0].hora.split("–");
  const fim = a.roteiro[a.roteiro.length - 1].hora.split("–")[1];
  return `${inicio}–${fim}`;
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
