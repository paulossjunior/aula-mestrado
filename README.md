# Site da disciplina — Desenvolvimento de Software Suportado por IA

Site de **Tópico Especial em Inteligência Artificial: Desenvolvimento de Software
Suportado por IA** — Mestrado em Computação Aplicada, IFES Serra, 2026.2.
Prof. Paulo Sérgio dos Santos Júnior.

No ar em <https://paulossjunior.github.io/aula-mestrado/>.

## Publicar o roteiro de uma aula

Sem tocar em código. Abra o arquivo do encontro em `src/content/aulas/` — `02.md`
é o encontro 02 —, edite o texto e troque a linha do estado:

```yaml
estado: definir     # antes: o site mostra "A definir"
estado: fechada     # depois: o site publica o roteiro
```

Commit na `main`. O GitHub Actions reconstrói e republica sozinho.

Os três estados possíveis:

| `estado` | O que o site mostra |
| --- | --- |
| `fechada` | O roteiro completo do encontro |
| `apresentacao` | Último encontro do mês: apresentação de trabalho e debate |
| `definir` | "A definir" — o conteúdo do arquivo fica invisível até você fechá-lo |

Os encontros 02 a 17 já têm um **rascunho** de título, roteiro e leitura no próprio
arquivo. Ele não aparece no site enquanto o estado for `definir`: serve de ponto de
partida para você revisar. Nos encontros de apresentação o plano original está sob a
chave `rascunho`.

## Onde fica cada conteúdo

```
src/content/aulas/NN.md          um arquivo por encontro (17)
src/content/codebook/            as onze fases e as sete fronteiras
src/content/mapeamento/          as seis tabelas do mapeamento
src/content/bibliografia.json    ids do arXiv + rótulo (Núcleo / Fronteira)
src/content/avaliacao.json       pesos, laboratórios, rubrica e fichamento
src/content/unidades.json        as três unidades
src/data/corpus.js               os dois corpora (157 secundários + 106 em sedes)
public/uploads/                  as figuras do mapeamento
public/fichamento.tex            o modelo em LaTeX (é o mesmo texto exibido no site)
public/_ds/modernist-…/          o design system: styles.css e guia
```

Um campo obrigatório ausente ou com tipo errado faz o build falhar apontando o
arquivo — o schema está em `src/content.config.ts`.

## Rodar localmente

```sh
npm install
npm run dev      # http://localhost:4321/aula-mestrado
npm run build    # gera dist/
npm run preview  # serve dist/
```

## Rotas

`/` · `/conteudo` · `/avaliacao` · `/codebook` · `/codebook/mapeamento` ·
`/aulas/01` … `/aulas/17`

## Estado do conteúdo

- **Real:** codebook das 11 fases, corpus (arXiv + OpenAlex), bibliografia, figuras,
  calendário (quintas 19h–22h, 06 ago a 03 dez, sem aula em 10 set por causa do
  SBES 2026), modelo de fichamento.
- **Definido:** só a **Aula 01**. As demais aparecem como *a definir*.
- **Fixo:** o **último encontro de cada mês** (27 ago, 24 set, 29 out, 26 nov,
  03 dez) é apresentação de trabalho e debate.
- **Provisório, a substituir pelo plano de ensino real:** pesos da avaliação
  (20/30/50), enunciados dos quatro laboratórios, títulos das aulas 02–17.
- **Defasado:** `/codebook/mapeamento` ainda usa o recorte de 157/106 sob o esquema
  de 8 fases. O codebook já está em 11 fases, 171/129. Há um aviso visível na própria
  página; atualizar quando os novos CSV existirem.

## Como este repositório foi construído

Especificação antes do código, com o [spec-kit](https://github.com/github/spec-kit):

```
.specify/memory/constitution.md              os princípios do projeto
specs/001-site-estatico-astro/spec.md        o que o site tem de fazer
specs/001-site-estatico-astro/plan.md        como foi construído
specs/001-site-estatico-astro/tasks.md       as tarefas, e o que falta
```

O protótipo de origem continua no repositório (`Disciplina.dc.html`, `support.js`)
como registro. `scripts/extrair-conteudo.mjs` foi o que transportou os dados dele
para `src/content/` — roda de novo se a fonte mudar.

## Deploy

GitHub Actions, em `.github/workflows/deploy.yml`: push na `main` → `npm ci` →
`npm run build` → publica `dist/` no GitHub Pages.

`public/.nojekyll` é obrigatório: sem ele o Pages ignora `_ds/` e `_astro/`, que
começam com underscore, e o site sobe sem CSS nem JavaScript.
