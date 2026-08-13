# Tasks: Guia de preenchimento do template DSR

**Feature**: 002-guia-dsr | **Date**: 2026-08-13
**Input**: [spec.md](./spec.md) · [plan.md](./plan.md) · [data-model.md](./data-model.md) · [contracts/referencias.md](./contracts/referencias.md) · [quickstart.md](./quickstart.md)

**Testes automatizados**: a especificação não pede TDD, e o projeto não tem suíte de
teste unitário — a verificação é `astro check`, o build, os contadores do workflow e a
conferência no navegador. Não há tarefas de teste unitário; há tarefas de verificação,
que é o instrumento que este repositório de fato usa.

## Format

`- [ ] [TaskID] [P?] [Story?] Descrição com caminho de arquivo`

`[P]` = pode rodar em paralelo (arquivo diferente, sem dependência pendente).

---

## Phase 1: Setup

- [X] T001 Publicar o template LaTeX copiando `fontes/dsr/modelo_DSR.zip` para `public/dsr/modelo_DSR.zip` e conferir com `cmp` que o arquivo servido é idêntico ao original
- [X] T002 [P] Registrar em `fontes/NOTA-recortes.md` que `public/dsr/modelo_DSR.zip` é cópia de `fontes/dsr/`, para a origem não se perder

---

## Phase 2: Foundational

**Bloqueia todas as histórias.** Sem o arquivo de conteúdo não há o que renderizar.

- [X] T003 Criar `src/content/dsr.json` com a estrutura de [data-model.md](./data-model.md): `abertura`, `partes[]`, `cadeia[]`, `referencias[]`, `template`, `fechamento`
- [X] T004 Preencher `abertura` em `src/content/dsr.json` — título, resumo, a procedência exigida por FR-010 e a chamada de que a dissertação precisa revelar a lógica da pesquisa, não descrever etapas
- [X] T005 Preencher `template` em `src/content/dsr.json` com nome, href, peso real conferido no disco, o texto de uso (compilar `main.tex`, substituir `\preencher{...}`) e o que há dentro do ZIP

---

## Phase 3: User Story 1 — Saber o que escrever em cada parte (P1) 🎯 MVP

**Meta**: o aluno abre o guia e encontra, parte por parte, o que o texto precisa
revelar e qual erro evitar.

**Teste independente**: alguém que nunca viu DSR lê a página e consegue dizer, para
cada seção do template, qual pergunta ela responde — sem abrir o LaTeX.

### Conteúdo — cada tarefa é um trecho de `fontes/dsr/guideline.md` traduzido para o JSON

Todas escrevem no mesmo arquivo, então **não** são paralelas entre si.

- [X] T006 [US1] Escrever a parte 01, método de pesquisa, em `src/content/dsr.json` — por que DSR é adequada, as seis atividades de Peffers e os três ciclos de Hevner, com `referencia` apontando `peffers2007`
- [X] T007 [US1] Escrever a parte 02, ciclo de relevância, em `src/content/dsr.json` — de onde veio o problema, quem é afetado, objetivos da solução antes de tecnologia, origem de cada requisito, critérios de avaliação nascendo aqui; `evitar` inclui começar pelo artefato
- [X] T008 [US1] Escrever a parte 03, ciclo de design, em `src/content/dsr.json` — decisões de design com alternativa, escolha e razão; `evitar` inclui virar diário de programação
- [X] T009 [US1] Escrever a parte 04, Learning Iterations, em `src/content/dsr.json` — por que o estudo foi necessário naquele ponto, a questão intermediária, o desenho do estudo; `exemplo` traz a formulação "a primeira versão dependia de X, mas não havia evidência…"; `referencia` aponta `barcellos2022`
- [X] T010 [US1] Escrever a parte 05, o que aprendemos, em `src/content/dsr.json` — separar resultado empírico de aprendizado, com o exemplo dos quatro de cinco participantes, e a narrativa "aprendemos X, mas revelou Y"
- [X] T011 [US1] Escrever a parte 06, ciclo de rigor, em `src/content/dsr.json` — literatura influenciando decisão concreta, e as duas perguntas: o que construí e em que conhecimento me apoiei; `referencia` aponta `hevner2007`
- [X] T012 [US1] Escrever a parte 07, demonstração, em `src/content/dsr.json` — prova de conceito, cenário, experimento ou uso em organização; o artefato não pode existir só conceitualmente
- [X] T013 [US1] Escrever a parte 08, avaliação, em `src/content/dsr.json` — voltar aos critérios definidos antes; `evitar` inclui "os usuários gostaram" como evidência; a avaliação final como nova Learning Iteration
- [X] T014 [US1] Escrever a parte 09, o que mostrar ao terminar, em `src/content/dsr.json` — a narrativa contínua que o leitor precisa conseguir reconstruir
- [X] T015 [US1] Escrever `cadeia[]` em `src/content/dsr.json` — os onze elos de problema a contribuição, cada um com a pergunta que responde
- [X] T016 [US1] Escrever `fechamento` em `src/content/dsr.json` — se algum elo não puder ser explicado, há lacuna na escrita ou no desenho da pesquisa

### Página

- [X] T017 [US1] Criar `src/pages/dsr.astro` percorrendo `abertura`, `partes[]`, `cadeia[]`, `template` e `fechamento`, sem uma frase de conteúdo dentro do arquivo
- [X] T018 [US1] Estilizar as partes em `src/pages/dsr.astro` com os tokens do design system — numeração em acento, expectativas e advertências visualmente distintas, advertência em contorno e não em fundo colorido
- [X] T019 [US1] Dar `id` a cada parte (`parte-01`…`parte-09`) e a cada elo (`elo-1`…`elo-11`) em `src/pages/dsr.astro`, para o quickstart poder contá-los e para o índice poder saltar
- [X] T020 [US1] Acrescentar em `src/pages/dsr.astro` o bloco de download do template, com peso e conteúdo declarados antes do clique (FR-012)

**Checkpoint**: `/dsr` existe, tem as nove partes e os onze elos, e o template baixa.

---

## Phase 4: User Story 2 — Chegar ao guia a partir da aula (P2)

**Meta**: quem está na aula que pede o enquadramento encontra o guia.

**Teste independente**: partindo do menu e da Aula 02, o guia está a um clique.

- [X] T021 [P] [US2] Acrescentar "Guia DSR" ao menu em `src/layouts/Base.astro`, entre "Leituras" e "Avaliação", com o link por `rota()`
- [X] T022 [P] [US2] Acrescentar o guia ao bloco `materiais` de `src/content/aulas/02.md`, apontando `/dsr`

**Checkpoint**: o guia é alcançável sem saber a URL.

---

## Phase 5: User Story 3 — Alcançar as fontes originais (P3)

**Meta**: quem quer ir além do guia chega às quatro obras.

**Teste independente**: cada referência aparece com autores, ano, título, papel e link
que responde.

- [X] T023 [US3] Escrever `referencias[]` em `src/content/dsr.json` com as quatro entradas de [contracts/referencias.md](./contracts/referencias.md), usando o endereço primário verificado e a sede com DOI como texto
- [X] T024 [US3] Renderizar as referências em `src/pages/dsr.astro`, mantendo autores, ano e título identificáveis mesmo se o link cair
- [X] T025 [US3] Ligar cada parte que tem `referencia` à obra correspondente em `src/pages/dsr.astro`, e falhar o build se o `id` não existir

**Checkpoint**: as quatro referências estão na página, com link que responde.

---

## Phase 6: Polish & verificação

- [X] T026 Elevar de 25 para 26 o contador de páginas em `.github/workflows/ci.yml` e `.github/workflows/deploy.yml`
- [X] T027 [P] Acrescentar `dist/dsr/modelo_DSR.zip` aos assets obrigatórios de `.github/workflows/deploy.yml`, para o template não sumir sem ninguém notar
- [X] T028 [P] Documentar a rota `/dsr` e o arquivo `src/content/dsr.json` no `README.md`
- [X] T029 Rodar `npm run check` e `npm run build` — esperado 0 erros e 26 páginas
- [X] T030 Verificar no navegador, servindo sob `/aula-mestrado`: 9 partes, 11 elos, os quatro links de referência respondendo 200, o ZIP baixando idêntico ao original, e nenhum erro de console
- [X] T031 Verificar ausência de rolagem horizontal em 320, 375, 861 e 1280 pixels em `/dsr`
- [X] T032 Confirmar que `dist/dsr/index.html` não tem `<script>` — a página inteira precisa funcionar sem JavaScript (SC-006)
- [X] T033 Confirmar que `src/pages/dsr.astro` não contém texto do guia, com `grep` das expressões do conteúdo (SC-007)
- [X] T034 Rodar o varredor de links e `scripts/conferir-labs.mjs` para garantir que nada no resto do site quebrou
- [X] T035 Reler `src/content/dsr.json` contra `fontes/dsr/guideline.md` confirmando que cada frase tem origem localizável, e que as três omissões deliberadas continuam sendo as registradas em [research.md](./research.md) R2 (FR-011)

---

## Dependências

```
Setup (T001–T002)
   └─> Foundational (T003–T005)   ← bloqueia tudo
          ├─> US1 (T006–T020)     ← MVP
          ├─> US2 (T021–T022)     ← independente de US1
          └─> US3 (T023–T025)     ← precisa de T017 para renderizar
                 └─> Polish (T026–T035)
```

- **US1** entrega valor sozinha: o guia existe e ensina, mesmo sem link no menu.
- **US2** não depende de US1 no código, mas apontar para uma página vazia não serve —
  na prática, entregar depois.
- **US3** depende de T017 (a página existir) para ter onde renderizar.

## Paralelismo

Poucas oportunidades reais: quase todo o conteúdo mora num arquivo só, e escrever o
mesmo JSON em paralelo cria conflito. O que é genuinamente paralelo:

```
T021 (menu) e T022 (aula 02)          arquivos diferentes
T027 (workflow) e T028 (README)       arquivos diferentes
```

As tarefas T006–T016 são sequenciais **por escreverem o mesmo arquivo**, não por
dependerem umas das outras.

## Estratégia de entrega

1. **MVP** — Setup + Foundational + US1 (T001–T020). O guia no ar, completo e correto.
2. **Alcance** — US2 (T021–T022). Duas linhas; o guia deixa de ser página órfã.
3. **Profundidade** — US3 (T023–T025).
4. **Fechamento** — Polish (T026–T035), com a verificação toda.

Tudo numa entrega só é viável: são 35 tarefas pequenas, quase todas de conteúdo.

## Fora desta entrega, declarado

FR-006 pede o link nas aulas 02, 03, 05 e 06. Esta entrega cobre menu e Aula 02, a
pedido do professor. As aulas 03, 05 e 06 ficam pendentes — registrado aqui para não
passar por requisito cumprido.


---

## Registro da execução

Todas as 35 tarefas concluídas em 2026-08-13.

**Dois desvios do plano, ambos deliberados:**

1. **T033 reprovou na primeira passada.** O `grep` achou texto do guia dentro de
   `src/pages/dsr.astro`: era a meta description, com «ciclos de relevância» e
   «Learning Iterations». Tecnicamente é metadado, não conteúdo — mas afrouxar o teste
   para acomodar seria trapaça. O título e a descrição da página migraram para
   `abertura.tituloPagina` e `abertura.descricao` no JSON, e o teste passou sem ser
   relaxado.

2. **Um defeito preexistente apareceu na verificação.** A âncora `#parte-04` parava
   atrás do cabeçalho entre 861 e 1180px. Investigando: o cabeçalho quebra em duas
   linhas nessa faixa e chega a 108px, enquanto a folga de rolagem que eu havia
   introduzido antes era de 72px. Medido no site no ar, sem o item novo de menu: o
   cabeçalho já tinha 95px em 861 e 108px em 1024 — o defeito era anterior a esta
   entrega, e o item «DSR» só o tornou visível. Corrigido para 120px, que cobre o pior
   caso. Um segundo ponto de quebra resolveria com mais precisão, mas violaria o
   princípio III da constituição.

O rótulo do menu ficou «DSR» e não «Guia DSR»: com o rótulo longo o cabeçalho quebrava
já em 1180px, o que empurrava o conteúdo de todas as páginas do site.
