# Desenvolvimento de Software Suportado por IA

Site da disciplina **Tópico Especial em Inteligência Artificial: Desenvolvimento de
Software Suportado por IA** — Mestrado em Computação Aplicada (PPCOMP), IFES Câmpus
Serra, 2026.2. Prof. Paulo Sérgio dos Santos Júnior.

**No ar:** <https://paulossjunior.github.io/aula-mestrado/>

Site estático em [Astro](https://astro.build), publicado no GitHub Pages a cada
push na `main`. O conteúdo — aulas, codebook, bibliografia, avaliação — vive em
arquivos de texto, fora do código: publicar o roteiro de uma aula não exige abrir
nenhum arquivo de programação.

---

## O que o site tem

| Rota | Conteúdo |
| --- | --- |
| `/` | Ementa, objetivos, cronograma dos 17 encontros, bibliografia, resumo da avaliação e contato |
| `/conteudo` | O programa completo, agrupado nas três unidades |
| `/avaliacao` | Composição da nota, os quatro laboratórios, rubrica do artigo final e o modelo de fichamento |
| `/codebook` | As doze fases do processo de software: escopo, inclusão, exclusão, teste de decisão e exemplos |
| `/codebook/mapeamento` | O mapeamento do campo: seis tabelas e duas figuras |
| `/leituras` | Base de leituras: o tronco do campo, o que ler por fase e o corpus inteiro navegável |
| `/spec-kit` | O fluxo do Spec Kit: cada comando como a etapa de desenvolvimento que ele ocupa |
| `/seguranca` | A dimensão de segurança: dez tópicos cruzados com as doze fases do processo |
| `/aulas/01` … `/aulas/17` | Uma página por encontro: roteiro, objetivos, atividade, entrega, leitura e material |

São 25 páginas HTML estáticas. Só duas coisas usam JavaScript — o filtro de unidade
no cronograma e o navegador de corpus. Todo o resto funciona com o JS desligado.

---

## Para o professor: publicar o roteiro de um encontro

Cada encontro é um arquivo em [`src/content/aulas/`](src/content/aulas/). O `02.md` é
o encontro 02. Edite o texto e troque uma linha:

```yaml
estado: definir     # o site mostra "A definir"
estado: fechada     # o site publica o roteiro
```

Commit na `main` → o site se republica sozinho em ~1 minuto.

Os três estados:

| `estado` | O que aparece no site |
| --- | --- |
| `fechada` | O roteiro completo do encontro |
| `apresentacao` | Último encontro do mês: apresentação de trabalho e debate |
| `definir` | "A definir" — o conteúdo do arquivo fica invisível até você fechá-lo |

**Nada se perde.** Os encontros 02 a 17 já têm um rascunho de título, roteiro,
leitura e entrega dentro do próprio arquivo. Ele não vai para o ar enquanto o estado
for `definir` — serve de ponto de partida para você revisar. Nos encontros de
apresentação, o plano original está guardado na chave `rascunho`.

### Anatomia de um arquivo de aula

```yaml
---
n: "02"                      # número do encontro, dois dígitos
data: "13 ago"               # como aparece no cronograma
dataLonga: "Quinta, 13 de agosto de 2026"
unidade: "I"                 # I, II ou III
estado: "definir"            # fechada | apresentacao | definir
titulo: "..."
leitura: "..."               # a linha curta que aparece no cronograma
resumo: "..."                # o parágrafo de abertura da página
objetivos: [...]             # lista
roteiro:                     # os blocos das três horas
  - hora: "19h20–20h10"
    texto: "..."
atividade: "..."
entrega: "..."
prazo: "..."
leituras:                    # bibliografia do encontro
  - titulo: "..."
    autor: "..."
    fonte: "..."
    tag: "Obrigatória"       # "Obrigatória" e "Núcleo" saem em vermelho
    href: "https://..."      # opcional
materiais:
  - texto: "..."
    href: "/codebook"        # opcional; interno ou externo
---
```

Campo obrigatório faltando ou com o tipo errado **quebra o build** e a mensagem
aponta o arquivo e o campo. O contrato está em
[`src/content.config.ts`](src/content.config.ts) — é a garantia de que uma aula
malformada nunca chega ao ar.

---

## Onde fica cada coisa

```
src/content/aulas/NN.md         um arquivo por encontro (17)
src/content/codebook/           as doze fases e as sete fronteiras de classificação
src/content/mapeamento/         as seis tabelas do mapeamento do campo
src/content/bibliografia.json   ids do arXiv + rótulo (Núcleo / Fronteira)
src/content/avaliacao.json      pesos, laboratórios, rubrica e modelo de fichamento
src/content/leituras-base.json  a base de leituras: tronco e leituras por fase
src/content/spec-kit.json       os comandos do Spec Kit e a etapa real de cada um
src/content/seguranca.json      a dimensão de segurança: tópicos, cruzamento e achados
src/content/curso.json          a ementa e os objetivos de aprendizagem da home
src/content/unidades.json       as três unidades e suas descrições
src/data/corpus.js              os dois corpora (157 secundários + 106 em sedes)

src/layouts/Base.astro          head, header, footer e os estilos globais
src/pages/                      as rotas (veja a tabela acima)
src/lib/url.ts                  resolve links sob o subcaminho do GitHub Pages
src/lib/aulas.ts                traduz `estado` no que a página renderiza

public/_ds/modernist-…/         o design system: styles.css, guia e tokens
public/uploads/                 as quatro figuras do site, geradas em SVG por script
public/fichamento.tex           o modelo em LaTeX (é o mesmo texto exibido no site)
public/.nojekyll                obrigatório — veja "Deploy"

fontes/                         material de origem: codebook, mapeamento e os CSV
Disciplina.dc.html, support.js  o protótipo original, guardado como registro
scripts/extrair-conteudo.mjs    o script que migrou os dados do protótipo
scripts/gerar-figuras.mjs       regera as quatro figuras a partir das tabelas
scripts/nomear-fases.mjs        trocou os códigos F pelos nomes das fases
specs/                          a especificação que guiou a construção
```

---

## Rodar localmente

```sh
npm install
npm run dev      # http://localhost:4321/aula-mestrado
npm run build    # gera dist/
npm run preview  # serve dist/
```

Node 20 ou superior.

---

## CI/CD

Duas esteiras, ambas em GitHub Actions:

| Workflow | Quando roda | O que faz |
| --- | --- | --- |
| [`ci.yml`](.github/workflows/ci.yml) | pull request e push em qualquer branch que não seja a `main` | verifica e constrói, **sem publicar** |
| [`deploy.yml`](.github/workflows/deploy.yml) | push na `main` | verifica, constrói e **publica** no GitHub Pages |

As duas rodam a mesma bateria de verificação antes de deixar qualquer coisa passar:

1. `npm run check` — tipos e o schema do frontmatter das aulas. Um campo faltando
   ou com o tipo errado reprova aqui.
2. `npm run build` — o site tem de construir.
3. **25 páginas** — conta os `index.html` e confere um a um: as oito páginas fixas
   e as 17 aulas. Se uma sumir, reprova em vez de publicar um 404.
4. **Assets obrigatórios** — `.nojekyll`, `fichamento.tex`, as duas figuras e a
   folha do design system.
5. **Caminho base** — a home tem de sair com links `/aula-mestrado/`.

Na prática: você edita uma aula, faz commit na `main`, e em ~1 minuto o site está
atualizado. Se o arquivo estiver malformado, o workflow falha e **o site no ar
continua intacto** — nunca sobe uma versão quebrada.

Para republicar sem commit novo:

```sh
gh workflow run "Deploy no GitHub Pages" -R paulossjunior/aula-mestrado
```

Dois detalhes que não são óbvios:

- **`public/.nojekyll` é obrigatório.** Sem ele o GitHub Pages roda o Jekyll, que
  ignora diretórios começados por underscore — e o site subiria sem `_ds/` (o CSS)
  e sem `_astro/` (o JavaScript).
- **`base` tem de bater com o nome do repositório.** Está em
  [`astro.config.mjs`](astro.config.mjs) como `/aula-mestrado`. Renomear o
  repositório sem atualizar isso quebra todos os links. Nenhum link é escrito à mão:
  todos passam por `rota()`, que lê esse valor.

---

## Estado do conteúdo

- **Real:** codebook das 11 fases, os dois corpora (arXiv + OpenAlex), bibliografia,
  figuras, calendário (quintas 19h20–22h, 06 ago a 03 dez, sem aula em 10 set por causa
  do SBES 2026) e o modelo de fichamento.
- **Fechado:** só a **Aula 01**. As demais aparecem como *a definir*.
- **Fixo:** o **último encontro de cada mês** (27 ago, 24 set, 29 out, 26 nov e
  03 dez) é apresentação de trabalho e debate.
- **Provisório, a substituir pelo plano de ensino real:** pesos da avaliação
  (20/30/50), enunciados dos quatro laboratórios e os títulos das aulas 02–17.
- **Três recortes convivendo, todos rotulados na própria página:**
  - **233 estudos secundários + 321 em sedes** — o corpus corrente. É o que a
    [base de leituras](src/content/leituras-base.json) usa e o que as páginas
    declaram como tamanho dos corpora.
  - **171 + 321** — o último recorte com distribuição por fase e ano publicada.
    É o que sustenta as tabelas do codebook e do mapeamento, e as duas figuras.
    A repartição dos 62 estudos novos entre as fases ainda não saiu.
  - **157 + 106, sob 8 fases** — o corpus navegável no fim do mapeamento, preso
    aos CSV em `fontes/`.

  Nenhum número aparece sem o recorte a que pertence. Quando a distribuição de 233
  for publicada, atualizar `src/content/mapeamento/*.json` e o campo `sec` de
  `src/content/codebook/fases.json` — as somas têm de fechar em 233. Ainda
  vem do recorte anterior (157/106, 8 fases) apenas o **corpus navegável**, porque
  depende dos CSV em `fontes/`, que continuam na versão antiga. A própria página marca
  isso. Para atualizar: substitua `fontes/corpus_secundarios_es_ia.csv` e
  `fontes/corpus_sedes_es.csv` e regere `src/data/corpus.js` a partir deles.

  As **figuras** não dependem mais de arquivo externo: `node scripts/gerar-figuras.mjs`
  as regera em SVG a partir das tabelas em `src/content/mapeamento/`.

---

## Como este repositório foi construído

O site nasceu de um protótipo de arquivo único (`Disciplina.dc.html`, 1.890 linhas)
com navegação por hash e as 17 aulas embutidas num `<script>`. A reconstrução seguiu
o [spec-kit](https://github.com/github/spec-kit) — especificação antes do código:

```
.specify/memory/constitution.md            os princípios que o projeto não viola
specs/001-site-estatico-astro/spec.md      o que o site tem de fazer, e como testar
specs/001-site-estatico-astro/plan.md      as decisões de projeto e o porquê
specs/001-site-estatico-astro/tasks.md     as tarefas e a verificação
```

Os seis princípios, em resumo: conteúdo separado de código; fidelidade ao design
system Modernist; mobile first com um único ponto de quebra; saída estática sem
runtime; **não inventar conteúdo**; rotas reais em vez de hash.

O protótipo continua no repositório e ainda abre no navegador.
[`scripts/extrair-conteudo.mjs`](scripts/extrair-conteudo.mjs) foi o que transportou
os dados dele para `src/content/` — roda de novo se a fonte mudar.

### Decisões que valem registro

1. **Sem framework de UI.** As duas interações são ilhas em JavaScript nativo. React
   ou Vue custariam mais que a interação que entregariam.
2. **Estado por arquivo, não por lista no código.** O protótipo decidia o que
   mostrar com duas listas embutidas no script. Agora cada aula declara o próprio
   `estado`.
3. **`fichamento.tex` é fonte única.** A página de avaliação importa o arquivo com
   `?raw`, então o bloco de código exibido e o arquivo baixado nunca divergem.
4. **A conferência visual encontrou um defeito herdado.** A home do protótipo rolava
   na horizontal em telas estreitas — o título a 44px media 409px numa tela de 375px.
   A porta reproduzia o defeito fielmente; foi corrigido na versão Astro. Registro em
   [`tasks.md`](specs/001-site-estatico-astro/tasks.md).

---

## Licença e crédito

Material didático do PPCOMP/IFES Serra. O design system Modernist está em
`public/_ds/` com seu próprio guia. O corpus vem do arXiv e do OpenAlex, ambos de
acesso aberto.
