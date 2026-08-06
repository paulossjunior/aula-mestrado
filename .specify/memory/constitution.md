# Constituição — Site da disciplina "Desenvolvimento de Software Suportado por IA"

**Versão**: 1.0.0 · **Ratificada em**: 2026-08-06 · **Última emenda**: 2026-08-06

## Core Principles

### I. Conteúdo separado de código (NÃO NEGOCIÁVEL)

Todo texto que o professor precisa editar — aulas, codebook, bibliografia, tabelas do
mapeamento — vive em arquivos de conteúdo (Markdown com frontmatter ou JSON) sob
`src/content/`, validados por schema. Nenhuma alteração de programa de ensino pode
exigir edição de `.astro`, `.ts` ou `.js`. Um arquivo por aula, nomeado pelo número
do encontro.

**Racional**: o protótipo original enterrava 17 aulas dentro de um `<script>`. O
professor tem de publicar o roteiro de um encontro sem abrir código.

### II. Fidelidade visual ao design system Modernist

`_ds/modernist-.../styles.css` é a única folha de estilo. Cor, fonte, espaçamento e
raio saem exclusivamente de `var(--color-*)`, `var(--font-*)`, `var(--space-*)`,
`var(--radius-*)`. Proibido: canto arredondado, régua abaixo de 2px, rótulo
centralizado, imagem colorizada. O vermelho é acento — só na ação primária, na
ênfase pequena e nas duas faixas-pôster (avaliação e lacunas).

### III. Mobile first com um único ponto de quebra

Regras base são as de tela pequena. Um só `@media (min-width: 861px)`. Tabela larga
rola dentro do próprio contêiner (`overflow-x: auto`); a página nunca rola na
horizontal.

### IV. Estático e sem dependência de runtime

Saída 100% estática (`astro build`), servível por GitHub Pages sem servidor.
JavaScript só onde há interação real: o navegador de corpus e o filtro de unidade
do cronograma. Todo o resto renderiza em HTML no build. Sem framework de UI.

### V. Não inventar conteúdo

O que o protótipo marca como *a definir* permanece *a definir*. Números, datas,
citações e contagens são transportados verbatim. Rascunhos de aula não publicados
ficam preservados no arquivo, sob chave própria, sem serem renderizados.

### VI. Rotas reais, sem hash

`/`, `/conteudo`, `/avaliacao`, `/codebook`, `/codebook/mapeamento`, `/aulas/<n>`.
Todo link interno é construído a partir de `import.meta.env.BASE_URL` para
sobreviver ao subcaminho do GitHub Pages.

## Additional Constraints

- Astro em modo `static`. Ilhas em JavaScript nativo, sem React/Vue/Svelte.
- Deploy por GitHub Actions (`actions/deploy-pages`), disparado em push na `main`.
- `base` do site igual ao nome do repositório; `site` igual à URL do Pages.

## Development Workflow

Fluxo spec-kit: constitution → specify → plan → tasks → implement. `plan.md` declara
conformidade com esta constituição antes da implementação.

## Governance

Esta constituição governa o repositório. Mudança de princípio exige emenda com
incremento de versão (MAJOR para remoção/redefinição, MINOR para novo princípio,
PATCH para redação).
