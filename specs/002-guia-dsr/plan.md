# Implementation Plan: Guia de preenchimento do template DSR

**Branch**: `002-guia-dsr` | **Date**: 2026-08-13 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-guia-dsr/spec.md`

## Summary

Publicar em `/dsr` o guia que hoje existe solto em `fontes/dsr/`: o que o aluno precisa
escrever em cada parte do template de dissertação em Design Science Research. Nove
partes, a cadeia de autoverificação, as quatro referências que sustentam o método e o
template LaTeX para download.

Uma página estática a mais no site que já existe. Todo o texto num JSON de conteúdo; o
`.astro` só percorre e estiliza. Sem JavaScript.

## Technical Context

**Language/Version**: TypeScript 5 / Astro 5.18.2, saída estática

**Primary Dependencies**: nenhuma nova. O projeto não tem framework de UI e não vai
ganhar um por causa de uma página de texto.

**Storage**: arquivos. `src/content/dsr.json` para o texto, `public/dsr/modelo_DSR.zip`
para o template.

**Testing**: `npm run check` (tipos e schema), `npm run build`, o contador de páginas
do workflow, e verificação no navegador com Playwright — o mesmo instrumento usado nas
entregas anteriores.

**Target Platform**: GitHub Pages sob o subcaminho `/aula-mestrado`, navegador moderno,
com e sem JavaScript.

**Project Type**: site estático de conteúdo.

**Performance Goals**: sem meta nova. A página é HTML e texto; não carrega imagem nem
script.

**Constraints**: sem rolagem horizontal em 320px; contraste do design system; o
professor tem de conseguir revisar qualquer frase sem abrir arquivo de programação.

**Scale/Scope**: uma rota nova, um JSON de conteúdo, um item de menu, um item de
material na Aula 02, um arquivo binário publicado. O site passa de 25 para 26 páginas.

## Constitution Check

Avaliado contra a constituição v1.0.0, antes e depois do desenho da Fase 1. Nenhuma
violação; nada a registrar em Complexity Tracking.

| Princípio | Como esta entrega cumpre |
| --- | --- |
| **I — Conteúdo separado de código** | Todo o guia em `src/content/dsr.json`. O `.astro` não contém uma frase do texto: percorre `partes[]`, `cadeia[]` e `referencias[]`. Revisar o guia é editar JSON. |
| **II — Fidelidade ao design system** | Só tokens `var(--color-*)` e `var(--font-*)`. Sem canto arredondado, régua mínima de 2px, vermelho restrito a acento — na numeração das partes e no botão de download do template. As advertências usam contorno, não fundo colorido. |
| **III — Mobile first, um ponto de quebra** | Regras base para tela pequena; um `@media (min-width: 861px)`. A cadeia de onze elos é uma lista vertical no celular; se virar tabela larga no desktop, rola dentro do próprio contêiner. |
| **IV — Estático, sem runtime** | Zero JavaScript. Tudo renderiza no build. Nenhuma dependência nova. |
| **V — Não inventar conteúdo** | Toda frase da página tem origem localizável em `fontes/dsr/`. O que a fonte não diz, a página não diz. As três omissões deliberadas estão registradas em `research.md` (R2) e no data model. |
| **VI — Rotas reais, sem hash** | Rota `/dsr`; todo link interno por `rota()`, que deriva de `import.meta.env.BASE_URL`. O download do template também. |

**Ponto de atenção que o princípio V levanta**: a fonte é uma conversa com o professor
("eu recomendaria pedir aos alunos que…"). Publicar verbatim entregaria ao aluno um
bilhete que não é para ele. A regra adotada — converter o interlocutor, preservar a
instrução — está justificada em `research.md` R2. Não é invenção de conteúdo: é
tradução de destinatário, e cada frase resultante é rastreável à origem.

## Project Structure

### Documentation (this feature)

```
specs/002-guia-dsr/
├── spec.md              a especificação
├── plan.md              este arquivo
├── research.md          R1 formato, R2 destinatário, R3 navegação
├── data-model.md        a forma de dsr.json
├── quickstart.md        como validar a entrega
├── contracts/
│   └── referencias.md   as quatro obras, com endereço verificado
└── checklists/
    └── requirements.md  16/16
```

### Source Code (repository root)

```
src/
├── content/
│   └── dsr.json               NOVO · todo o texto do guia
├── pages/
│   └── dsr.astro              NOVO · percorre e estiliza
├── layouts/
│   └── Base.astro             EDITADO · item de menu
└── content/aulas/
    └── 02.md                  EDITADO · material de apoio

public/
└── dsr/
    └── modelo_DSR.zip         NOVO · o template para download

.github/workflows/
├── ci.yml                     EDITADO · 25 → 26 páginas
└── deploy.yml                 EDITADO · idem, e o ZIP entre os assets obrigatórios
```

**Structure Decision**: a estrutura do repositório não muda. Uma página nova segue o
mesmo caminho de `/spec-kit` e `/seguranca`: um JSON em `src/content/`, um `.astro` em
`src/pages/`, entrada no menu. É o padrão que a constituição já fixou e não há motivo
para inventar outro.

## Phase 0 — Research

Concluída. Três decisões em [research.md](./research.md):

- **R1** — JSON, não Markdown. O repositório usa Markdown onde o texto é corrido e
  precisa de schema de coleção (só as aulas); JSON onde é estruturado e a página itera.
  Este é estruturado.
- **R2** — converter o destinatário das passagens que falam com o professor,
  preservando a instrução. Três omissões deliberadas registradas.
- **R3** — menu principal entre "Leituras" e "Avaliação", mais o material de apoio da
  Aula 02.

## Phase 1 — Design & Contracts

Concluída.

- [data-model.md](./data-model.md) — a forma de `dsr.json`: `abertura`, nove `partes`,
  onze elos de `cadeia`, quatro `referencias`, `template` e `fechamento`. Inclui as
  regras de validação e a justificativa de por que a cadeia tem onze elos e não doze.
- [contracts/referencias.md](./contracts/referencias.md) — as quatro obras com endereço
  primário verificado. MISQ, Taylor & Francis e ACM devolvem 403 a robô e ficam atrás
  de paywall; o aluno é mandado para o PDF aberto, com a sede e o DOI como texto.
- [quickstart.md](./quickstart.md) — como validar a entrega inteira.

**Re-avaliação constitucional pós-desenho**: sem mudança. O desenho não introduziu
JavaScript, dependência, framework nem texto dentro de código.

## Escopo negociado durante o planejamento

Duas mudanças pedidas depois da especificação inicial, ambas incorporadas:

1. **Alcance dos links** — a especificação previa link nas aulas 02, 03, 05 e 06. O
   professor pediu menu e Aula 02. FR-006 continua exigindo as quatro; a implementação
   entrega menu e Aula 02 agora, e as outras três ficam como trabalho declarado, não
   como requisito silenciosamente abandonado.
2. **Template LaTeX** — a especificação o excluía por falta de licença declarada. O
   professor é o autor e pediu a publicação: entra como FR-012 e SC-008. O
   `exemplo_dsr.pdf` continua fora — é tese de terceiros.
