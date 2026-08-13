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
| `n` | number | Posição, 1 a 12 |
| `elo` | string | Nome do elo, como a fonte o escreve |

Ordem fixa: problema · objetivos da solução · requisitos · conhecimento existente ·
decisões de design · artefato · Learning Iterations · evidências · aprendizados ·
evolução do artefato · avaliação final · contribuição.

> A fonte lista doze termos e é assim que a página os mostra. Eu havia fundido os dois
> últimos em um só elo, por lê-los como um par; a leitura pode ser defensável, mas
> agrupar o que a fonte separa é decisão minha, e ela saiu.

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
| `enderecos` | {rotulo, href}[] | Os endereços que `source_guideline.md` lista para aquela obra, com o rótulo que ela usa: «Artigo», «PDF», «Artigo/DOI», «Artigo na SBC», «ACM Digital Library» |

**Regra de validação**: `autores`, `ano` e `titulo` nunca vazios, e `autores` como a
fonte cita — «Peffers et al.», não os quatro nomes por extenso, que não constam dela.

**Sede, volume, páginas e DOI não entram.** Não estão em nenhuma das duas fontes; eu
os havia acrescentado de fora e foram removidos a pedido do professor.

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
| `texto` | string | O mecanismo, como o guideline o descreve: texto metodológico em preto, `[PREENCHA: …]` em vermelho |

**A lista do interior do ZIP não entra.** Ela viria do README dentro do arquivo, que
não é uma das duas fontes autorizadas. O link para download fica; a análise do
conteúdo, não.

---

## O que não entra no modelo

- O `exemplo_dsr.pdf`: tese de terceiros, sem licença de redistribuição declarada.
- O link `sandbox:/mnt/data/Modelo_DSR_compilado.pdf` da fonte, que não existe fora da
  sessão em que o arquivo foi gerado.
- O parágrafo da fonte sobre empacotar o guia dentro do ZIP do template: é decisão de
  distribuição do professor, não orientação de escrita ao aluno.
