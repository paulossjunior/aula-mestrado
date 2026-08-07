import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const leitura = z.object({
  titulo: z.string(),
  // Opcional: apresentação de sistema em operação pode não ter autoria a declarar.
  autor: z.string().optional(),
  fonte: z.string(),
  tag: z.string(),
  href: z.string().optional(),
});

const material = z.object({
  texto: z.string(),
  href: z.string().optional(),
});

const blocoRoteiro = z.object({
  hora: z.string(),
  texto: z.string(),
});

// Os campos que descrevem um encontro. Reaproveitados em `rascunho`, que guarda
// o plano ainda não publicado sem que ele seja renderizado.
const conteudo = {
  titulo: z.string(),
  leitura: z.string(),
  resumo: z.string(),
  objetivos: z.array(z.string()),
  roteiro: z.array(blocoRoteiro),
  atividade: z.string(),
  entrega: z.string(),
  prazo: z.string(),
  leituras: z.array(leitura),
  materiais: z.array(material),
};

const aulas = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/aulas" }),
  schema: z.object({
    n: z.string().regex(/^\d{2}$/, "use dois dígitos: 01, 02, …"),
    data: z.string(),
    dataLonga: z.string(),
    unidade: z.enum(["I", "II", "III"]),
    // fechada     → publica o conteúdo abaixo
    // apresentacao→ último encontro do mês, apresentação de trabalho e debate
    // definir     → o site mostra "A definir"; o conteúdo abaixo fica invisível
    estado: z.enum(["fechada", "apresentacao", "definir"]),
    ...conteudo,
    rascunho: z.object(conteudo).partial().optional(),
  }),
});

export const collections = { aulas };
