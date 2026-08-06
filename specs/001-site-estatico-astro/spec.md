# Feature Specification: Site estático da disciplina em Astro, publicado no GitHub Pages

**Feature Branch**: `001-site-estatico-astro`

**Created**: 2026-08-06

**Status**: Implementado

**Input**: User description: "site estatico astro da disciplina publicado no github pages"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Aluno consulta o programa e a página de uma aula (Priority: P1)

Um aluno do mestrado abre a URL pública no celular, vê a ementa, percorre o
cronograma dos 17 encontros e abre a página do encontro do dia para ver roteiro,
leitura obrigatória, atividade e entrega.

**Why this priority**: é o uso dominante do site. Sem isso o site não existe.

**Independent Test**: abrir `/` e `/aulas/01` num viewport de 375px e verificar que
todo o conteúdo do encontro 01 aparece sem rolagem horizontal.

**Acceptance Scenarios**:

1. **Given** o site publicado, **When** o aluno abre `/`, **Then** vê ementa,
   objetivos de aprendizagem, cronograma dos 17 encontros com o recesso de 10 set,
   bibliografia e resumo da avaliação.
2. **Given** a home, **When** clica numa linha do cronograma, **Then** chega em
   `/aulas/<n>` com URL própria, compartilhável e recarregável.
3. **Given** `/aulas/01`, **When** rola a página, **Then** vê roteiro em três
   blocos de horário, objetivos, atividade prática, entrega com prazo, leitura e
   material de apoio, além de navegação anterior/próxima.
4. **Given** um encontro ainda não fechado, **When** o aluno o abre, **Then** vê
   "A definir" e o aviso de que o roteiro é publicado antes da aula — nunca um
   programa inventado.

---

### User Story 2 - Professor publica o roteiro de um encontro sem tocar em código (Priority: P1)

O professor edita um arquivo Markdown do encontro, muda `estado` de `definir` para
`fechada`, faz commit na `main` e o site se republica.

**Why this priority**: é a razão declarada da migração; sem isso o site volta a ser
um protótipo congelado.

**Independent Test**: editar `src/content/aulas/02.md`, rodar o build e verificar
que `/aulas/02` passa a exibir o roteiro.

**Acceptance Scenarios**:

1. **Given** `src/content/aulas/NN.md`, **When** o professor altera título, roteiro
   ou leitura, **Then** a mudança aparece no site após o build, sem edição de código.
2. **Given** um arquivo com campo obrigatório ausente ou tipo errado, **When** roda
   o build, **Then** o build falha com mensagem apontando arquivo e campo.
3. **Given** um encontro marcado `estado: definir`, **When** o site é gerado,
   **Then** o rascunho guardado no arquivo não é renderizado em lugar nenhum.

---

### User Story 3 - Aluno usa o codebook e navega o corpus (Priority: P2)

Material da Aula 01: as onze fases do processo, as fronteiras de classificação, o
mapeamento do campo e o corpus navegável com filtro por corpus e por fase.

**Independent Test**: abrir `/codebook/mapeamento`, filtrar por `F4` no corpus de
sedes e conferir que a contagem "Mostrando X de Y" bate com o filtro.

**Acceptance Scenarios**:

1. **Given** `/codebook`, **When** o aluno lê, **Then** vê as onze fases com
   escopo, inclui, não inclui, teste de decisão, exemplos e notas de lacuna, mais
   as sete fronteiras e o procedimento de classificação.
2. **Given** `/codebook/mapeamento`, **When** troca o corpus e a fase, **Then** a
   lista é filtrada no navegador sem recarregar a página.
3. **Given** mais registros que o limite, **When** clica em "Mostrar mais 50",
   **Then** mais 50 registros aparecem.
4. **Given** JavaScript desabilitado, **When** abre `/codebook/mapeamento`,
   **Then** as tabelas, figuras e o texto do mapeamento continuam legíveis.

---

### User Story 4 - Publicação automática no GitHub Pages (Priority: P2)

Push na `main` dispara build e deploy; a URL pública reflete o commit em minutos.

**Independent Test**: fazer um commit trivial e observar o workflow concluir com o
deploy apontando para a URL do Pages.

**Acceptance Scenarios**:

1. **Given** um push na `main`, **When** o workflow roda, **Then** publica o
   diretório `dist/` no GitHub Pages.
2. **Given** o site servido sob subcaminho `/aula-mestrado/`, **When** o aluno
   navega entre páginas e carrega imagens e CSS, **Then** nenhum link quebra.

---

### Edge Cases

- Encontro fora do intervalo 01–17 em `/aulas/<n>` → 404 estático.
- Primeiro e último encontro: navegação anterior/próxima volta ao cronograma.
- Recesso de 10 set (SBES 2026) aparece como linha inerte no cronograma, sem link.
- Corpus filtrado sem resultado → contagem zero, sem lista vazia quebrada.
- Registro do corpus sem citação indexada → texto "Sem citações indexadas".
- Fase sem nota de lacuna → o bloco de nota não é renderizado.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O site MUST expor as rotas `/`, `/conteudo`, `/avaliacao`,
  `/codebook`, `/codebook/mapeamento` e `/aulas/01`…`/aulas/17` como páginas HTML
  estáticas distintas.
- **FR-002**: O conteúdo de cada encontro MUST residir em um arquivo Markdown por
  encontro, com frontmatter validado por schema.
- **FR-003**: Codebook (fases e fronteiras), bibliografia e tabelas do mapeamento
  MUST residir em arquivos de conteúdo editáveis, fora do código de apresentação.
- **FR-004**: Encontros com `estado: definir` MUST renderizar o texto de "a definir"
  do protótipo e MUST NOT renderizar o rascunho guardado no arquivo.
- **FR-005**: Encontros com `estado: apresentacao` MUST renderizar o rótulo
  "Apresentação e debate" e o conteúdo de apresentação.
- **FR-006**: O navegador de corpus MUST filtrar por corpus (secundários ou sedes) e
  por fase (Todas, F1–F8), paginar em 25 e incrementar de 50 em 50, exibindo
  "Mostrando X de Y".
- **FR-007**: O cronograma da home MUST filtrar por unidade (Tudo, I, II, III) no
  navegador.
- **FR-008**: Todo link interno e todo asset MUST ser resolvido a partir do
  `BASE_URL` configurado, funcionando sob subcaminho.
- **FR-009**: O visual MUST reproduzir o protótipo: mesma folha `styles.css`, mesmas
  variáveis, réguas de 2px, zero raio, alinhamento à esquerda.
- **FR-010**: O layout MUST ser mobile first com um único breakpoint em 861px, e
  tabelas largas MUST rolar dentro do próprio contêiner.
- **FR-011**: `fichamento.tex` MUST continuar disponível para download, e as duas
  figuras PNG do mapeamento MUST continuar servidas.
- **FR-012**: Um push na `main` MUST disparar build e publicação no GitHub Pages.
- **FR-013**: Cada página MUST ter `<title>` e meta description próprios.

### Key Entities

- **Aula**: um encontro. Número, data curta e longa, unidade (I/II/III), estado
  (`fechada`, `apresentacao`, `definir`), título, resumo, objetivos, roteiro
  (hora + texto), atividade, entrega, prazo, leituras (título, autor, fonte, tag,
  link), materiais (texto + link opcional) e rascunho não publicado.
- **Fase**: código (F1…F11), nome, contagem em cada corpus, escopo, inclui, não
  inclui, teste de decisão, exemplos e nota de lacuna opcional.
- **Fronteira**: par de códigos e o critério que os separa.
- **Registro de corpus**: id arXiv, título, autor, ano, fase, tipo de estudo, grau
  de foco agêntico, citações, sede e trilha.
- **Item de bibliografia**: id arXiv do corpus + rótulo curatorial (Núcleo/Fronteira).
- **Tabela do mapeamento**: distribuição por fase/ano, por grau de agência, por tipo
  de estudo, mais citados, fronteira agêntica e lacunas.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Publicar o roteiro de um encontro exige editar exatamente 1 arquivo e
  0 linhas de código.
- **SC-002**: As 22 páginas (home, conteúdo, avaliação, codebook, mapeamento, 17
  aulas) são geradas e nenhuma retorna 404 em navegação a partir da home.
- **SC-003**: Em viewport de 375px, nenhuma página rola horizontalmente.
- **SC-004**: O conteúdo textual do protótipo é reproduzido sem perda: 17 encontros,
  11 fases, 7 fronteiras, 12 itens de bibliografia, 6 tabelas do mapeamento e 5
  lacunas.
- **SC-005**: Do push ao site atualizado, menos de 5 minutos, sem intervenção manual.
- **SC-006**: Todas as páginas exceto o navegador de corpus funcionam sem JavaScript.

## Assumptions

- O site é servido como *project page* em `https://paulossjunior.github.io/aula-mestrado/`;
  logo, `base` é `/aula-mestrado`.
- O corpus permanece o recorte anterior (157 secundários e 106 em sedes, esquema de
  8 fases) enquanto os novos CSV não existirem — com o aviso de versão de dados que
  o protótipo já exibe.
- Os pesos de avaliação (20/30/50), os enunciados dos quatro laboratórios e os
  títulos das aulas 02–17 são material provisório do protótipo; são transportados
  como estão, sem serem revisados nesta feature.
- O professor edita pelo GitHub, com commit direto na `main`.
