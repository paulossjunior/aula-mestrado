# Research: Guia de preenchimento do template DSR

**Feature**: 002-guia-dsr · **Date**: 2026-08-13

Três incógnitas saíram do Technical Context. Todas resolvidas aqui, contra o
repositório e contra as fontes em `fontes/dsr/`.

---

## R1 — Formato do arquivo de conteúdo: JSON ou Markdown?

**Decisão**: JSON em `src/content/dsr.json`.

**Racional**: o repositório já separa conteúdo em dois formatos, e o critério é
estável. Markdown com frontmatter é usado onde o texto é corrido e o schema precisa
ser validado por coleção — só as aulas (`src/content/aulas/*.md`). JSON é usado onde o
conteúdo é estruturado e a página o percorre em laço: `spec-kit.json`, `seguranca.json`,
`leituras-base.json`, `curso.json`, `avaliacao.json`, `unidades.json`.

O guia é estruturado, não corrido: nove partes com título, expectativa, erros a evitar
e exemplos; onze elos; quatro referências. A página vai iterar sobre isso. JSON é o
formato que o repositório já usa para essa forma, e não exige criar uma coleção nova
com schema só para uma página.

**Alternativas consideradas**:

- *Markdown numa coleção `dsr`* — obrigaria a definir schema em `content.config.ts` e a
  renderizar HTML de dentro do Markdown, perdendo o controle de estilo por elemento que
  o design system exige. Rejeitado.
- *Texto embutido no `.astro`* — viola o princípio I da constituição. Rejeitado sem
  discussão.

---

## R2 — Como tratar as passagens em que a fonte fala com o professor?

**Decisão**: converter para instrução ao aluno, preservando o conteúdo e descartando
só o enquadramento conversacional.

**Racional**: `fontes/dsr/guideline.md` é uma conversa dirigida ao professor. Tem
frases como "eu recomendaria pedir aos alunos que não retirem essa seção", "acho que
vale a pena colocar este guideline dentro do próprio projeto LaTeX" e "essa estrutura
aparece de maneira muito forte na sua tese". Publicadas assim, o aluno leria um
bilhete que não é para ele.

O conteúdo dessas frases é instrução real e precisa sobreviver. "Eu recomendaria pedir
aos alunos que não retirem essa seção" vira "não retire esta seção". O que se perde é
só a moldura — quem recomenda a quem.

Duas passagens não são instrução e ficam de fora: o link `sandbox:/mnt/data/...` do
PDF compilado, que não existe fora daquela sessão, e o parágrafo final sobre empacotar
o guia no ZIP do template, que é decisão de distribuição do professor, não orientação
de escrita ao aluno. Ambas registradas aqui para que a omissão seja deliberada e
rastreável, não esquecimento.

**Alternativas consideradas**:

- *Publicar verbatim* — respeitaria o princípio V ao pé da letra, mas o princípio fala
  em não inventar conteúdo, não em preservar o interlocutor errado. Rejeitado: o
  resultado confundiria o leitor.
- *Reescrever livremente* — arriscaria inventar orientação. Rejeitado. A regra que
  adotei: toda frase da página tem de ter origem localizável na fonte.

---

## R3 — Onde a página entra na navegação?

**Decisão**: no menu principal, entre "Leituras" e "Avaliação"; e no material de apoio
das aulas 02, 03, 05 e 06.

**Racional**: o menu hoje é Ementa · Fases · Cronograma · Conteúdo · Leituras ·
Avaliação · Contato. O guia é material de método, vizinho de Leituras e diretamente
ligado à Avaliação, onde a entrega do enquadramento aparece. Entre os dois é onde o
aluno procura.

As quatro aulas já têm bloco `materiais`, que aceita `texto` e `href` — nenhuma
mudança de schema é necessária, só uma entrada nova em cada arquivo.

**Alternativas consideradas**:

- *Só a partir das aulas* — o aluno que volta ao guia semanas depois não lembraria em
  qual aula ele estava. Rejeitado.
- *Dentro de `/avaliacao`* — misturaria regra de nota com orientação de escrita.
  Rejeitado.

---

## Verificação das referências

Os quatro links de `source_guideline.md` foram testados. Os parâmetros
`?utm_source=chatgpt.com` foram removidos — são rastreamento da ferramenta que gerou
o arquivo, não parte do endereço.

| Referência | Endereço adotado | Resposta |
| --- | --- | --- |
| Hevner et al. (2004) | `misq.umn.edu/misq/article/28/1/75/261/…` | ver `contracts/referencias.md` |
| Hevner (2007) | `uni-kassel.de/fb07/…` (PDF) | idem |
| Peffers et al. (2007) | `tandfonline.com/doi/abs/10.2753/MIS0742-1222240302` | idem |
| Barcellos et al. (2022) | `sol.sbc.org.br/index.php/sbqs/article/view/23302` | idem |

O contrato registra o que cada link respondeu no momento da verificação. Onde um link
principal não responde de fora da rede da instituição, o PDF alternativo indicado pela
própria fonte é usado como endereço primário.
