# Feature Specification: Guia de preenchimento do template DSR

**Feature Branch**: `002-guia-dsr`

**Created**: 2026-08-13

**Status**: Draft

**Input**: User description: "Criar uma página /dsr no site da disciplina: um guia de preenchimento do template de dissertação em Design Science Research, para o aluno saber o que escrever em cada parte. O conteúdo vem de fontes/dsr/guideline.md e de fontes/dsr/source_guideline.md. A página serve as aulas 02, 03, 05 e 06, que já pedem enquadramento DSR e sua revisão como entrega. Deve seguir o design system modernista do site, ser estática, funcionar sem JavaScript, e o conteúdo deve morar em arquivo de conteúdo fora do código, como as outras páginas."

## User Scenarios & Testing *(mandatory)*

O aluno do mestrado precisa entregar, na Aula 03, um enquadramento da própria pesquisa
em Design Science Research, e revisá-lo até a Aula 06. Hoje o site pede a entrega mas
não diz o que se espera dentro dela: o aluno tem o template LaTeX e o exemplo da tese
do professor, e nada que explique a lógica que o texto precisa revelar. O guia existe
como arquivo solto em `fontes/dsr/`, fora do ar.

### User Story 1 - Saber o que escrever em cada parte (Priority: P1)

O aluno abre o guia antes de escrever o enquadramento e encontra, seção por seção, o
que cada parte da dissertação precisa revelar: de onde veio o problema, como ele
originou objetivos e requisitos, que conhecimento sustentou as decisões, como o
artefato foi construído e avaliado, e o que se aprendeu.

**Why this priority**: é a razão de a página existir. Sem isso o aluno entrega uma
descrição de etapas em vez da lógica da pesquisa, que é exatamente o erro que o guia
existe para evitar.

**Independent Test**: um aluno que nunca viu DSR lê a página e consegue dizer, para
cada seção do template, qual pergunta aquela seção responde — sem abrir o LaTeX.

**Acceptance Scenarios**:

1. **Dado** que o aluno está na página, **Quando** procura o que escrever sobre o
   problema, **Então** encontra a orientação do ciclo de relevância, incluindo a
   advertência de não começar pelo artefato.
2. **Dado** que o aluno realizou um estudo empírico, **Quando** procura como
   registrá-lo, **Então** encontra a estrutura de uma Learning Iteration: por que o
   estudo foi necessário naquele ponto, a questão, o desenho, os resultados e o
   "o que aprendemos".
3. **Dado** que o aluno terminou o rascunho, **Quando** quer conferir se está
   completo, **Então** encontra a cadeia problema → objetivos → requisitos →
   conhecimento → decisões → artefato → iterações → evidências → aprendizados →
   avaliação → contribuição, e a instrução de que um elo inexplicável indica lacuna.

### User Story 2 - Chegar ao guia a partir da aula (Priority: P2)

O aluno que está lendo a Aula 03 — ou a 02, 05 e 06, que também tratam do
enquadramento — encontra o link para o guia junto da entrega que ele precisa fazer.

**Why this priority**: o guia só serve se for encontrado no momento da entrega. Uma
página que ninguém acha é trabalho perdido, mas ela funciona mesmo sem os links, por
isso não é P1.

**Independent Test**: partindo de cada uma das quatro aulas, é possível chegar ao guia
com um clique.

**Acceptance Scenarios**:

1. **Dado** que o aluno está na página da Aula 03, **Quando** olha o material de
   apoio, **Então** vê o guia listado e o link funciona.
2. **Dado** que o aluno está no menu do site, **Quando** procura o guia, **Então**
   consegue chegar a ele sem saber a URL de cor.

### User Story 3 - Alcançar as fontes originais (Priority: P3)

O aluno que quer ir além do guia encontra as quatro referências centrais — Hevner et
al. (2004), Hevner (2007), Peffers et al. (2007) e Barcellos et al. (2022) — com o que
cada uma sustenta no template e um link para o texto.

**Why this priority**: aprofundamento. O guia se sustenta sem as referências, mas a
disciplina cobra rastreabilidade da literatura, e seria incoerente que o guia do
método não citasse de onde o método vem.

**Independent Test**: cada uma das quatro referências aparece com autor, ano, o papel
que cumpre no template e um link que responde.

**Acceptance Scenarios**:

1. **Dado** que o aluno leu sobre os três ciclos, **Quando** procura a origem,
   **Então** encontra Hevner (2007) com link para o texto.
2. **Dado** que o aluno leu sobre Learning Iterations, **Quando** procura a origem,
   **Então** encontra Barcellos et al. (2022) com link.

### Edge Cases

- Aluno com JavaScript desligado: a página inteira precisa continuar legível, como o
  resto do site.
- Tela de 320px: as tabelas e a cadeia de elos não podem forçar rolagem horizontal na
  página; se algo for largo, rola dentro do próprio contêiner.
- Link externo que sai do ar: a referência precisa continuar identificável por autor,
  ano e título mesmo se o link quebrar.
- Professor que revisa o texto do guia: precisa conseguir editar sem abrir arquivo de
  programação.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A página MUST apresentar o guia organizado nas partes do template:
  método de pesquisa, ciclo de relevância, ciclo de design, Learning Iterations,
  ciclo de rigor, demonstração, avaliação, a seção "o que aprendemos" e o fechamento
  sobre o que o aluno deve conseguir mostrar.
- **FR-002**: A página MUST explicitar, para cada parte, o que se espera do texto e
  qual erro comum evitar — as advertências do guia (não começar pelo artefato, não
  virar diário de programação, não avaliar com "os usuários gostaram") são conteúdo,
  não decoração.
- **FR-003**: A página MUST apresentar a cadeia de onze elos, de problema a
  contribuição, como instrumento de autoverificação.
- **FR-004**: A página MUST listar as quatro referências centrais com autor, ano,
  título, o papel que cada uma cumpre no template e link para o texto.
- **FR-005**: Todo o texto do guia MUST viver em arquivo de conteúdo sob
  `src/content/`, fora dos arquivos de programação, para o professor revisar sem
  tocar em código.
- **FR-006**: A página MUST ser alcançável a partir das aulas 02, 03, 05 e 06 e a
  partir da navegação do site.
- **FR-007**: A página MUST renderizar por completo sem JavaScript.
- **FR-008**: A página MUST usar exclusivamente os tokens do design system, sem canto
  arredondado, sem régua abaixo de 2px e com o vermelho restrito a acento.
- **FR-009**: A página MUST caber em 320px sem rolagem horizontal da página.
- **FR-010**: A página MUST declarar sua procedência: que o guia acompanha o template
  de dissertação usado no programa e deriva da tese do professor.
- **FR-011**: O conteúdo MUST ser fiel às fontes em `fontes/dsr/`, sem inventar
  orientação que não esteja lá.
- **FR-012**: A página MUST oferecer o template LaTeX (`modelo_DSR.zip`) para download,
  linkado no texto onde o aluno precisa dele, com o peso do arquivo e o que há dentro
  declarados antes do clique.

### Key Entities

- **Parte do guia**: um trecho do template a preencher. Tem título, o que se espera do
  texto, os erros a evitar e, quando existe, um exemplo de formulação.
- **Elo da cadeia**: um ponto da sequência problema → contribuição, com nome e a
  pergunta que ele responde.
- **Referência**: obra que fundamenta o método. Tem autores, ano, título, o papel que
  cumpre no template e endereço.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Um aluno que nunca escreveu DSR consegue, depois de ler a página,
  nomear o que cada seção do template precisa responder.
- **SC-002**: As nove partes do guia e os onze elos da cadeia estão todos presentes na
  página publicada.
- **SC-003**: As quatro referências aparecem com link que responde.
- **SC-008**: O template LaTeX é baixável a partir da página e o arquivo servido é
  idêntico ao de `fontes/dsr/`.
- **SC-004**: Partindo de qualquer uma das quatro aulas que pedem o enquadramento, o
  guia está a um clique.
- **SC-005**: A página não rola na horizontal em 320, 375, 861 e 1280 pixels.
- **SC-006**: Com o JavaScript desligado, todo o conteúdo continua visível.
- **SC-007**: Revisar qualquer frase do guia não exige editar arquivo `.astro`,
  `.ts` ou `.js`.

## Assumptions

- O guia se destina ao aluno do mestrado que está escrevendo a dissertação; não é uma
  introdução geral a Design Science Research, e sim instrução de preenchimento.
- A rota é `/dsr`, seguindo o padrão de rota real e curta das demais páginas.
- O template LaTeX é publicado junto do guia, por decisão do professor, que é seu
  autor: `modelo_DSR.zip` fica disponível para download na página e o texto o linka no
  ponto em que o aluno precisa dele. O `exemplo_dsr.pdf` não entra nesta entrega — é
  uma tese de terceiros e a fonte não declara licença de redistribuição.
- Os links das referências são os que constam de `fontes/dsr/source_guideline.md`,
  com os parâmetros de rastreamento removidos.
- A página entra no menu principal do site, junto das demais páginas de apoio.
- A citação em português "o que aprendemos" é usada como título da seção, mantendo
  "What did we learn?" como o nome original que aparece no template.
