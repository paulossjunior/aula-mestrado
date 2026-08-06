# Tasks: Site estático da disciplina em Astro

**Branch**: `001-site-estatico-astro` · **Spec**: [spec.md](./spec.md) · **Plan**: [plan.md](./plan.md)

Estado: todas as tarefas abaixo estão concluídas nesta branch. O build gera 22
páginas. Falta apenas o deploy, bloqueado pelo incidente de Actions do GitHub.

## Fase 1 — Fundação

- [X] T001 Inicializar o spec-kit e registrar a constituição em `.specify/memory/constitution.md`
- [X] T002 Criar `package.json`, `astro.config.mjs` (`site` + `base: /aula-mestrado`) e `tsconfig.json`
- [X] T003 Criar `.gitignore` (`node_modules`, `dist`, `.astro`)
- [X] T004 Copiar os assets do protótipo para `public/`: `_ds/`, `uploads/`, `fichamento.tex`, `.nojekyll`
- [X] T005 Mover `corpus.js` para `src/data/corpus.js`

## Fase 2 — Conteúdo (US2, P1)

- [X] T006 Escrever `scripts/extrair-conteudo.mjs`, que lê o bloco `data-dc-script` do protótipo e emite os arquivos de conteúdo
- [X] T007 Gerar `src/content/aulas/01.md` … `17.md`, cada um com `estado` e o rascunho preservado
- [X] T008 Gerar `src/content/codebook/{fases,fronteiras}.json` (11 fases, 7 fronteiras)
- [X] T009 Gerar as seis tabelas em `src/content/mapeamento/*.json`
- [X] T010 Gerar `src/content/bibliografia.json` e `src/content/unidades.json`
- [X] T011 Escrever à mão `src/content/avaliacao.json` (pesos, trilha, fichamento, labs, rubrica, regras)
- [X] T012 Definir o schema zod da collection `aulas` em `src/content.config.ts`

## Fase 3 — Apresentação (US1, P1)

- [X] T013 `src/lib/url.ts`: `rota()` e `link()` sobre `import.meta.env.BASE_URL`
- [X] T014 `src/lib/aulas.ts`: `resolver()` (estado → o que renderizar), ordenação e `estiloTag()`
- [X] T015 `src/layouts/Base.astro`: head, folha do design system, bloco `om-*` completo, header e footer
- [X] T016 `src/pages/index.astro`: hero, fatos, ementa, teaser do codebook, cronograma, bibliografia, resumo da avaliação e contato
- [X] T017 Ilha do filtro de unidade do cronograma, preservando o `display` original de cada linha
- [X] T018 `src/pages/aulas/[n].astro` com `getStaticPaths` e navegação anterior/próxima
- [X] T019 `src/pages/conteudo.astro`, agrupando os encontros por unidade
- [X] T020 `src/pages/avaliacao.astro`, com `fichamento.tex` importado via `?raw`

## Fase 4 — Codebook e mapeamento (US3, P2)

- [X] T021 `src/pages/codebook/index.astro`: resumo quantitativo, os onze códigos, fronteiras e procedimento
- [X] T022 `src/pages/codebook/mapeamento.astro`: aviso de versão, seis tabelas, duas figuras e lacunas
- [X] T023 Ilha do navegador de corpus: filtro por corpus e fase, página de 25, incremento de 50

## Fase 5 — Publicação (US4, P2)

- [X] T024 `.github/workflows/deploy.yml`: `npm ci` → `npm run build` → publica `dist/`
- [X] T025 Verificar o build: 22 páginas, links com `base`, assets em `dist/`
- [ ] T026 Deploy efetivo no GitHub Pages — **bloqueado**: incidente de Actions do GitHub (jobs não adquirem runner hospedado)

## Verificação

- [X] V001 `/aulas/02` renderiza "A definir" e não vaza o rascunho (`grep "Chen et al" → 0`)
- [X] V002 `/aulas/04` renderiza o rótulo "Apresentação e debate" e não vaza o rascunho (`grep "Peng, Kalliamvakou" → 0`)
- [X] V003 Todos os links internos da home saem com o prefixo `/aula-mestrado`
- [X] V004 `dist/` contém `.nojekyll`, `_ds/`, `uploads/` e `fichamento.tex`
- [X] V005 Cada uma das seis páginas tem `<title>` próprio
- [ ] V006 Conferência visual lado a lado com o protótipo em 375px e 1280px
