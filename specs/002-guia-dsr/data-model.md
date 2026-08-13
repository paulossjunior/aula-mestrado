# Data Model: Guia de preenchimento do template DSR

**Feature**: 002-guia-dsr · **Date**: 2026-08-13

Um arquivo: `src/content/dsr.json`. A página o percorre; nada de conteúdo vive no
`.astro`. As chaves seguem o padrão dos JSON já existentes — `spec-kit.json` e
`seguranca.json` — para que quem editou um saiba editar este.

```
dsr.json
├── abertura      { titulo, resumo, procedencia, chamada[] }
├── partes[]      as nove partes do template
├── cadeia[]      os onze elos de problema a contribuição
├── referencias[] as quatro obras que sustentam o método
└── fechamento    { titulo, texto }
```

---

## `abertura`

O que o aluno lê antes de qualquer instrução: para que serve o guia e de onde ele vem.

| Campo | Tipo | Regra |
| --- | --- | --- |
| `titulo` | string | O título da página |
| `resumo` | string | O que o guia é, em duas ou três frases |
| `procedencia` | string | FR-010: que o guia acompanha o template do programa e deriva da tese do professor |
| `chamada` | string[] | A tese central, em frases curtas: a dissertação precisa revelar a lógica da pesquisa, não descrever etapas |

---

## `partes[]` — o coração do guia

Nove entradas, na ordem em que aparecem no template. Cobrem FR-001 e FR-002.

| Campo | Tipo | Regra |
| --- | --- | --- |
| `n` | string | Ordinal de dois dígitos, `"01"`…`"09"` |
| `titulo` | string | Nome da parte, como o aluno a encontra no template |
| `pergunta` | string | A pergunta que aquela parte responde — é o que o aluno precisa conseguir nomear (SC-001) |
| `espera` | string[] | O que o texto precisa conter. Um item por exigência |
| `evitar` | string[] | Os erros que o guia adverte. Vazio quando a fonte não adverte nada |
| `exemplo` | string \| null | Formulação de exemplo, quando a fonte oferece uma. `null` quando não |
| `referencia` | string \| null | `id` de uma entrada de `referencias[]`, quando a fonte ancora aquela parte numa obra |

**Regras de validação**

- Exatamente nove entradas, com `n` de `"01"` a `"09"` sem buraco (SC-002).
- `espera` nunca vazio: uma parte sem expectativa declarada não orienta ninguém.
- `referencia`, quando presente, tem de casar com um `id` existente — senão a página
  produziria uma âncora morta.
- Toda frase de `espera` e `evitar` tem origem localizável em `fontes/dsr/guideline.md`
  (FR-011).

**As nove partes**

| `n` | `titulo` | `pergunta` |
| --- | --- | --- |
| 01 | Método de pesquisa | Por que DSR é adequada a este problema? |
| 02 | Ciclo de relevância | De onde veio o problema, e o que uma solução precisa possibilitar? |
| 03 | Ciclo de design | Como o artefato foi construído, e por que dessas decisões? |
| 04 | Learning Iterations | O que cada estudo empírico precisava descobrir? |
| 05 | O que aprendemos | O que os resultados ensinaram à pesquisa? |
| 06 | Ciclo de rigor | Em qual conhecimento você se apoiou para decidir? |
| 07 | Demonstração | O artefato consegue ser aplicado ao problema? |
| 08 | Avaliação | As evidências respondem aos critérios definidos antes? |
| 09 | O que mostrar ao terminar | A narrativa fecha, do problema à contribuição? |

---

## `cadeia[]` — o instrumento de autoverificação

Onze elos, cobrindo FR-003. É a cadeia que o guia manda o aluno reconstruir
mentalmente; um elo que não se explica indica lacuna na escrita ou no desenho da
pesquisa.

| Campo | Tipo | Regra |
| --- | --- | --- |
| `n` | number | Posição, 1 a 11 |
| `elo` | string | Nome do elo |
| `pergunta` | string | O que o aluno tem de conseguir responder naquele ponto |

Ordem fixa: problema · objetivos da solução · requisitos · conhecimento existente ·
decisões de design · artefato · Learning Iterations · evidências · aprendizados ·
evolução do artefato · avaliação final · contribuição.

> A fonte lista doze termos nessa sentença. «Avaliação final» e «contribuição» são o
> mesmo elo de fechamento em dois momentos — a avaliação produz a contribuição —, e a
> própria fonte trata o par como um passo. O modelo registra onze elos, com o último
> nomeando os dois. A decisão está aqui para não parecer erro de contagem.

---

## `referencias[]`

Quatro entradas. Cobre FR-004; os endereços vêm de `contracts/referencias.md`.

| Campo | Tipo | Regra |
| --- | --- | --- |
| `id` | string | `"hevner2004"`, `"hevner2007"`, `"peffers2007"`, `"barcellos2022"` |
| `autores` | string | Como se cita no texto |
| `ano` | string | Ano de publicação |
| `titulo` | string | Título por extenso |
| `papel` | string | O que sustenta no template |
| `href` | string | Endereço primário, verificado |
| `registro` | string | Sede e DOI, como texto — sobrevive ao link quebrar |

**Regra de validação**: `autores`, `ano` e `titulo` nunca vazios. É o que mantém a
referência identificável se o endereço sair do ar.

---

## `fechamento`

O parágrafo final: se algum elo não puder ser explicado, existe lacuna. Dois campos,
`titulo` e `texto`.

---

## `template`

O arquivo que o aluno vai preencher, oferecido para download. Cobre FR-012.

| Campo | Tipo | Regra |
| --- | --- | --- |
| `arquivo` | string | `"modelo_DSR.zip"` |
| `href` | string | `"/dsr/modelo_DSR.zip"` |
| `peso` | string | Tamanho real do arquivo, conferido no disco |
| `texto` | string | O que é e como usar — compilar `main.tex`, substituir os `\preencher{...}` |
| `conteudo` | string[] | O que há dentro: `main.tex`, os três capítulos, `referencias.bib` e o PDF compilado |

O template é escrito em texto corrido de propósito: requisitos e critérios aparecem
dentro da narrativa, não como listas. É estrutura de escrita, não formulário — e a
página precisa dizer isso, senão o aluno o trata como checklist.

---

## O que não entra no modelo

- O `exemplo_dsr.pdf`: tese de terceiros, sem licença de redistribuição declarada.
- O link `sandbox:/mnt/data/Modelo_DSR_compilado.pdf` da fonte, que não existe fora da
  sessão em que o arquivo foi gerado.
- O parágrafo da fonte sobre empacotar o guia dentro do ZIP do template: é decisão de
  distribuição do professor, não orientação de escrita ao aluno.
