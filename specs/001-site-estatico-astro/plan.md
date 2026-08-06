# Implementation Plan: Site estático da disciplina em Astro

**Branch**: `001-site-estatico-astro` · **Spec**: [spec.md](./spec.md)

## Summary

Converter o protótipo de arquivo único `Disciplina.dc.html` num site Astro estático
com rotas reais e conteúdo em arquivos editáveis, publicado no GitHub Pages sob
`/aula-mestrado`. O visual não muda: a mesma folha `styles.css` do design system
Modernist e o mesmo bloco de regras `om-*` são transportados sem reinterpretação.

## Technical Context

| Item | Decisão |
| --- | --- |
| Framework | Astro 5, `output: static` |
| Framework de UI | nenhum — ilhas em JavaScript nativo |
| Estilo | `public/_ds/modernist-…/styles.css` + bloco global `om-*` no layout |
| Conteúdo | content collection `aulas` (Markdown + zod) e JSON para o resto |
| Dados do corpus | `src/data/corpus.js` importado pela ilha do mapeamento |
| Hospedagem | GitHub Pages, project page, `base: "/aula-mestrado"` |
| CI | GitHub Actions: `npm ci` → `npm run build` → `upload-pages-artifact` (`dist`) |

## Constitution Check

| Princípio | Como o plano atende |
| --- | --- |
| I. Conteúdo separado de código | 17 arquivos em `src/content/aulas/`, um por encontro; codebook, mapeamento, bibliografia e avaliação em JSON. Nenhum texto de programa em `.astro`. |
| II. Fidelidade Modernist | A folha do design system é copiada intacta para `public/`; os estilos inline do protótipo são transportados literalmente. |
| III. Mobile first, 1 breakpoint | O bloco `om-*` do protótipo vai inteiro para o layout, incluindo o único `@media (min-width: 861px)`. |
| IV. Estático, sem runtime | `astro build` gera 22 páginas HTML. JS só no filtro do cronograma e no navegador de corpus. |
| V. Não inventar conteúdo | O extrator transporta os dados verbatim; encontros não fechados renderizam "A definir" e guardam o rascunho em `rascunho`, invisível ao site. |
| VI. Rotas reais | `/`, `/conteudo`, `/avaliacao`, `/codebook`, `/codebook/mapeamento`, `/aulas/[n]`; todo link passa por `rota()`, que usa `import.meta.env.BASE_URL`. |

Sem violações a registrar.

## Estrutura

```
astro.config.mjs           site + base do GitHub Pages
scripts/extrair-conteudo.mjs  migração one-shot do protótipo → src/content
src/
  content.config.ts        schema zod da collection `aulas`
  content/
    aulas/01.md … 17.md    um arquivo por encontro
    codebook/{fases,fronteiras}.json
    mapeamento/*.json      as seis tabelas
    bibliografia.json      ids do corpus + rótulo curatorial
    avaliacao.json         pesos, trilha, fichamento, labs, rubrica, regras
    unidades.json          as três unidades e suas descrições
  data/corpus.js           os dois corpora (dado, não conteúdo editorial)
  lib/{url,aulas}.ts       base do Pages e resolução de estado da aula
  layouts/Base.astro       head, tokens, bloco om-*, header e footer
  pages/…                  as seis rotas
public/                    _ds/, uploads/, fichamento.tex, .nojekyll
.github/workflows/deploy.yml
```

## Decisões de projeto

1. **Estado da aula em vez de listas no código.** O protótipo decidia o que mostrar
   por duas listas embutidas (`APRESENTACAO`, `DESENVOLVIDAS`). Agora cada arquivo
   declara seu próprio `estado`; publicar um encontro é trocar uma palavra.
2. **Rascunho preservado, não renderizado.** Os títulos e roteiros provisórios das
   aulas 02–17 continuam no repositório — os de apresentação sob a chave `rascunho`
   —, mas o site só mostra o que está fechado. Nada de conteúdo inventado no ar,
   nada de trabalho perdido.
3. **`fichamento.tex` como fonte única.** A página de avaliação importa o arquivo
   com `?raw`, então o bloco de código e o download nunca divergem.
4. **`.nojekyll` obrigatório.** Sem ele o Pages ignora `_ds/` e `_astro/`, que
   começam com underscore, e o site sobe sem CSS nem JS.
5. **Ilha sem framework.** O navegador de corpus monta os nós com `document.
   createElement`, o que dispensa React e evita interpolar texto do corpus em HTML.

## Riscos

- **`base` errado quebra tudo.** Se o repositório for renomeado, `astro.config.mjs`
  precisa acompanhar. Mitigação: um único ponto de verdade, consumido por `rota()`.
- **Dados defasados no mapeamento.** As tabelas ainda são do recorte de 8 fases; o
  aviso de versão de dados fica visível na página até os novos CSV existirem.
