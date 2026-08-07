# Estudos secundários sobre o processo de desenvolvimento de software apoiado por IA, LLM e agentes

Mapeamento sistemático de surveys, revisões sistemáticas da literatura e estudos de mapeamento publicados no arXiv entre janeiro de 2023 e agosto de 2026. O objeto não são as técnicas primárias, e sim a literatura de segunda ordem que já tentou organizar o campo: quem revisou o quê, com que protocolo, e onde a síntese ainda não chegou.

As onze fases usadas aqui estão definidas com critérios de inclusão, exclusão e teste de decisão em `codebook_fases_processo.md`. A distinção entre estudo primário, secundário e terciário, que organiza este mapeamento, está em `niveis_de_evidencia.md`.

## Protocolo

A varredura original combinou 74 consultas ao arXiv organizadas em quatro blocos: consultas dedicadas a estudos secundários (survey, systematic literature review, systematic mapping, taxonomy, tertiary study), consultas por fase do ciclo de vida (requisitos, arquitetura, implementação, teste, reparo, manutenção), consultas por mecanismo agêntico (agentes autônomos, multi-agente, auto-evolução) e consultas sobre o lado humano e empírico do processo. Cada consulta retornou até 40 registros ordenados por relevância, consolidados por identificador arXiv. Isso produziu 1.172 registros únicos.

O filtro de segunda ordem operou sobre título e resumo, procurando marcadores explícitos de estudo secundário no título e declarações de método de revisão no resumo. Dos 300 candidatos, 188 tinham escopo de engenharia ou desenvolvimento de software; a triagem por modelo de linguagem descartou mais 31 cujo objeto central era outro domínio, o que deixou 157 estudos secundários ao fim dessa primeira rodada. Uma varredura complementar, com 14 consultas construídas com o vocabulário das fases periféricas — documentação, conhecimento arquitetural, estimativa de esforço, triagem de issues, compreensão de programa, descoberta de produto — recuperou 18 candidatos, dos quais 14 entraram no corpus e 4 foram descartados por tratarem de metodologia de revisão sistemática e não do processo de desenvolvimento. O corpus final tem **171 estudos secundários**. Cada um recebeu um rótulo de fase do processo, um rótulo de tipo de estudo e uma classificação do grau em que agentes autônomos são o objeto da revisão.

As métricas de citação vieram do OpenAlex, casadas por similaridade de título de pelo menos 0,85 para evitar o problema conhecido de resolução por DOI arXiv. Apenas 104 dos 171 estudos têm registro casado, e apenas 53 têm FWCI. Isso não é falha da busca: preprints recentes de engenharia de software raramente têm lista de referências indexada, e o desdobramento entre versão preprint e versão publicada subconta os trabalhos fundadores. As citações abaixo servem para separar clássicos consolidados de trabalhos ainda sem rastro bibliométrico, não para ranquear qualidade.

## Onde o campo já se revisou

![Distribuição dos estudos secundários por fase do processo e ano]({{artifact:art_66ba516e-0a35-4ae6-9001-dbb0af17beab}})

| Fase do processo | 2023 | 2024 | 2025 | 2026 | Total |
|---|---|---|---|---|---|
| F9 Descoberta de produto e entendimento do problema | 2 | 2 | – | – | 4 |
| F1 Requisitos & especificação | 3 | 1 | 2 | 1 | 7 |
| F2 Projeto & arquitetura | 3 | 1 | 4 | 3 | 11 |
| F3 Implementação & geração de código | 2 | 10 | 11 | 5 | 28 |
| F4 Verificação & qualidade | 5 | 10 | 24 | 11 | 50 |
| F5 Depuração & reparo | 2 | 2 | 2 | 2 | 8 |
| F6 Manutenção, evolução & operação | – | 1 | 2 | 3 | 6 |
| F10 Planejamento, gestão de projeto e releases | – | 1 | 1 | 1 | 3 |
| F11 Gestão de conhecimento e documentação viva | 1 | – | – | 1 | 2 |
| F7 Processo transversal & ciclo completo | 4 | 11 | 22 | 11 | 48 |
| F8 Formação e educação em engenharia de software | – | 1 | 2 | 1 | 4 |

A distribuição é fortemente desequilibrada. Implementação e verificação juntas concentram 78 dos 171 estudos, mais da metade do corpus. Requisitos tem 7, projeto e arquitetura tem 11, manutenção e operação tem 6 e formação tem 4. Isso reproduz, na literatura de segunda ordem, o mesmo viés que os estudos primários já apresentavam: a atividade que o modelo de linguagem executa bem e cujo resultado é fácil de medir com um benchmark é também a atividade que mais atrai revisões.

A fase de processo transversal, com 48 estudos, é a que mais cresceu em termos relativos e a que concentra o olhar agêntico. Nela estão as revisões que tratam o agente como uma unidade organizacional dentro de um fluxo de trabalho, e não como um gerador de trechos de código: sistemas multi-agente para engenharia de software, avaliação de agentes, arquiteturas de memória e de contexto, e frameworks de raciocínio.

| Fase do processo | Agentes como objeto central | Agentes como seção | Sem foco em agência |
|---|---|---|---|
| F9 Descoberta de produto e entendimento do problema | – | – | 4 |
| F1 Requisitos & especificação | – | 4 | 3 |
| F2 Projeto & arquitetura | 1 | 5 | 5 |
| F3 Implementação & geração de código | 7 | 11 | 10 |
| F4 Verificação & qualidade | 8 | 25 | 17 |
| F5 Depuração & reparo | 1 | 5 | 2 |
| F6 Manutenção, evolução & operação | 2 | 3 | 1 |
| F10 Planejamento, gestão de projeto e releases | – | 1 | 2 |
| F11 Gestão de conhecimento e documentação viva | – | – | 2 |
| F7 Processo transversal & ciclo completo | 24 | 18 | 6 |
| F8 Formação e educação em engenharia de software | – | 3 | 1 |

24 dos 48 estudos de processo transversal têm agentes autônomos como objeto central, contra 7 em implementação e 8 em verificação. A leitura é direta: quando a revisão sobe da tarefa para o processo, ela necessariamente encontra agência, porque é no nível do processo que a autonomia se manifesta como escolha de próxima ação e não como qualidade de um trecho gerado.

## Que tipo de síntese está sendo produzida

| Tipo de estudo secundário | 2023 | 2024 | 2025 | 2026 | Total |
|---|---|---|---|---|---|
| T1 Revisão sistemática (SLR) | 4 | 10 | 18 | 13 | 45 |
| T2 Mapeamento sistemático | 5 | 4 | 8 | 2 | 19 |
| T3 Survey narrativo | 9 | 20 | 36 | 16 | 81 |
| T4 Taxonomia/framework | 1 | 2 | 2 | 1 | 6 |
| T5 Estudo terciário/meta-análise | – | – | – | 1 | 1 |
| T6 Survey com praticantes + revisão | 3 | 4 | 6 | 6 | 19 |

Quase metade do corpus são surveys narrativos, 81 ao todo. Revisões com protocolo explícito, somando revisões sistemáticas e estudos de mapeamento, chegam a 64, e a proporção melhorou de forma visível: em 2023 eram 9 de 22; em 2026 são 15 de 39. O aparecimento de 19 estudos que combinam revisão da literatura com dados primários de questionário aplicado a praticantes é o sinal metodológico mais interessante do período, porque é a única linha que confronta a literatura com o que equipes de fato fazem.

O corpus contém exatamente um estudo terciário e 6 trabalhos cuja contribuição central é uma taxonomia. Para um campo com 171 revisões em quatro anos, isso é pouco. Com um único terciário, restrito a geração de código, não há hoje síntese consolidada dizendo o que as revisões concordam entre si no nível do processo, e a repetição de escopo entre surveys de geração de código é evidência de que o trabalho está sendo refeito.

## O que já acumulou impacto

![Citações acumuladas dos estudos secundários por ano de submissão]({{artifact:4c3449e8-790d-4c28-b69d-1ad4b5b6cd04}})

| arXiv | Ano | Fase | Tipo | Citações | FWCI | Título |
|---|---|---|---|---|---|---|
| [2308.10620](https://arxiv.org/abs/2308.10620) | 2023 | F7 | T1 | 795 | 115.8 | Large Language Models for Software Engineering: A Systematic Literature Review |
| [2307.07221](https://arxiv.org/abs/2307.07221) | 2023 | F4 | T3 | 430 | 196.7 | Software Testing with Large Language Models: Survey, Landscape, and Vision |
| [2310.03533](https://arxiv.org/abs/2310.03533) | 2023 | F7 | T3 | 386 | 206.5 | Large Language Models for Software Engineering: Survey and Open Problems |
| [2406.00515](https://arxiv.org/abs/2406.00515) | 2024 | F3 | T3 | 107 | 33.7 | A Survey on Large Language Models for Code Generation |
| [2401.10034](https://arxiv.org/abs/2401.10034) | 2024 | F3 | T3 | 101 | 24.1 | Evolutionary Computation in the Era of Large Language Model: Survey and Roadmap |
| [2410.03981](https://arxiv.org/abs/2410.03981) | 2024 | F3 | T3 | 41 | 46.9 | A Survey on LLM-based Code Generation for Low-Resource and Domain-Specific Programming Languages |
| [2311.10372](https://arxiv.org/abs/2311.10372) | 2023 | F3 | T3 | 23 | – | A Survey of Large Language Models for Code: Evolution, Benchmarking, and Future Trends |
| [2409.09030](https://arxiv.org/abs/2409.09030) | 2024 | F7 | T3 | 22 | 26.8 | Agents in Software Engineering: Survey, Landscape, and Vision |
| [2312.15223](https://arxiv.org/abs/2312.15223) | 2023 | F7 | T3 | 21 | – | A Survey on Large Language Models for Software Engineering |
| [2408.02479](https://arxiv.org/abs/2408.02479) | 2024 | F7 | T3 | 20 | – | From LLMs to LLM-based Agents for Software Engineering: A Survey of Current, Challenges and Future |
| [2303.18184](https://arxiv.org/abs/2303.18184) | 2023 | F5 | T3 | 20 | – | A Survey on Automated Program Repair Techniques |
| [2311.07989](https://arxiv.org/abs/2311.07989) | 2023 | F7 | T3 | 18 | – | Unifying the Perspectives of NLP and Software Engineering: A Survey on Language Models for Code |
| [2405.01466](https://arxiv.org/abs/2405.01466) | 2024 | F5 | T1 | 16 | – | A Systematic Literature Review on Large Language Models for Automated Program Repair |
| [2409.02977](https://arxiv.org/abs/2409.02977) | 2024 | F7 | T3 | 15 | – | Large Language Model-Based Agents for Software Engineering: A Survey |
| [2401.00812](https://arxiv.org/abs/2401.00812) | 2024 | F3 | T3 | 14 | – | If LLM Is the Wizard, Then Code Is the Wand: A Survey on How Code Empowers Large Language Models to Serve as Intelligent Agents |

Os três trabalhos no topo são de 2023 e definiram o vocabulário que os demais usam. A revisão sistemática de Hou e colegas organiza a literatura por tarefa de engenharia de software e é a referência que a maioria das revisões posteriores cita como ponto de partida. O survey de teste com modelos de linguagem fez o mesmo recorte para verificação. O survey de Fan e colegas percorre o espectro completo de atividades de engenharia de software, de requisitos a documentação e analytics, e é o que mais se aproxima de uma visão de processo entre os fundadores; sua tese central é que técnicas híbridas, combinando engenharia de software tradicional com modelos de linguagem, são indispensáveis para filtrar soluções incorretas.

Da safra de 2024 em diante, nenhuma revisão passou de 110 citações, e as revisões agênticas de 2025 e 2026 estão praticamente todas abaixo de dez. Parte disso é atraso de indexação. Parte é real: o campo agêntico ainda não teve tempo de eleger sua revisão canônica, e as candidatas convivem sem que uma se destaque.

## A fronteira agêntica: 43 revisões com agentes como objeto central, 32 delas de 2025 em diante

| arXiv | Ano | Fase | Tipo | Foco declarado | Título |
|---|---|---|---|---|---|
| [2601.11655](https://arxiv.org/abs/2601.11655) | 2026 | F5 | T3 | Agentes de código autônomos para resolução de issues em engenharia de software | Advances and Frontiers of LLM-based Issue Resolution in Software Engineering: A Comprehensive Survey |
| [2607.13196](https://arxiv.org/abs/2607.13196) | 2026 | F4 | T3 | Impacto de agentes IA em qualidade e eficiência de code review | From Human-Centric to Agentic Code Review: The Impact of Different Generations of Generative AI Technology on Review Quality |
| [2605.18747](https://arxiv.org/abs/2605.18747) | 2026 | F7 | T3 | Código como infraestrutura para agentes LLM autônomos em engenharia de software | Code as Agent Harness |
| [2606.04967](https://arxiv.org/abs/2606.04967) | 2026 | F7 | T3 | Taxonomia de processos para frameworks de desenvolvimento de software com agentes IA | From Prompt to Process: a Process Taxonomy and Comparative Assessment of Frameworks Supporting AI Software Development Agents |
| [2602.06052](https://arxiv.org/abs/2602.06052) | 2026 | F7 | T3 | Memória de agentes LLM para desenvolvimento de software e tarefas longas | A Survey of Agent Memory in the Second Half: Towards Self-Evolving and Long-Horizon Agents |
| [2605.13898](https://arxiv.org/abs/2605.13898) | 2026 | F4 | T1 | Teste e verificação de LLMs usando metamorphic testing e agentes autônomos | Bidirectional Empowerment of Metamorphic Testing and Large Language Models: A Systematic Survey |
| [2606.13175](https://arxiv.org/abs/2606.13175) | 2026 | F4 | T3 | Agentes de IA substituindo revisão humana de código em qualidade | The End of Code Review: Coding Agents Supersede Human Inspection |
| [2605.26169](https://arxiv.org/abs/2605.26169) | 2026 | F4 | T3 | Evolução ESBMC: verificação formal, integração LLM e agentes autônomos | ESBMC: A Survey of Its Evolution, Integration, and Future Directions in Formal Software Verification |
| [2608.01001](https://arxiv.org/abs/2608.01001) | 2026 | F6 | T2 | Manutenção e evolução de sistemas agênticos, dívida técnica em agentes autônomos | From AI Technical Debt to Agentic Technical Debt: A Systematic Mapping of Root Causes and Manifestations in Agentic AI Systems |
| [2605.15245](https://arxiv.org/abs/2605.15245) | 2026 | F7 | T1 | Agentes autônomos em todo o ciclo de vida de desenvolvimento de software | Assistance to Autonomy: A Systematic Literature Review of Agentic AI across the Software Development Life Cycle |
| [2606.05339](https://arxiv.org/abs/2606.05339) | 2026 | F4 | T4 | Taxonomia de falhas em tempo de execução de servidores MCP | A Taxonomy of Runtime Faults in Model Context Protocol Servers |
| [2608.03392](https://arxiv.org/abs/2608.03392) | 2026 | F7 | T3 | Agentes de codificação autônomos que evoluem mediante feedback | Self-Evolving Coding Agents |
| [2603.17150](https://arxiv.org/abs/2603.17150) | 2026 | F4 | T3 | Formalização de intenção e verificação de código gerado por agentes IA | Intent Formalization: A Grand Challenge for Reliable Coding in the Age of AI Agents |
| [2510.09721](https://arxiv.org/abs/2510.09721) | 2025 | F7 | T3 | Benchmarks e soluções em engenharia de software com sistemas agênticos LLM | A Comprehensive Survey on Benchmarks and Solutions in Software Engineering of LLM-Empowered Agentic System |
| [2508.00083](https://arxiv.org/abs/2508.00083) | 2025 | F7 | T3 | Agentes LLM autônomos para geração de código e ciclo de vida do software | A Survey on Code Generation with LLM-based Agents |
| [2512.22256](https://arxiv.org/abs/2512.22256) | 2025 | F5 | T3 | Agentes LLM para resolução automática de issues em repositórios de software | Agentic Software Issue Resolution with Large Language Models: A Survey |
| [2506.13932](https://arxiv.org/abs/2506.13932) | 2025 | F3 | T3 | Raciocínio em tempo de inferência para tarefas de engenharia de software com agentes | Code Reasoning for Software Engineering Tasks: A Survey and A Call to Action |
| [2508.17692](https://arxiv.org/abs/2508.17692) | 2025 | F7 | T3 | Frameworks de raciocínio agêntico baseados em LLM para engenharia de software | LLM-based Agentic Reasoning Frameworks: A Survey from Methods to Scenarios |

A tabela lista as 18 mais recuperadas pelas consultas. Essas revisões formam a camada que interessa a quem estuda o processo apoiado por agentes. Três padrões aparecem nelas. O primeiro é o deslocamento do benchmark de tarefa isolada para o benchmark de trajetória, com avaliação do caminho percorrido pelo agente e não só do artefato final. O segundo é o tratamento da memória e do contexto como componentes de primeira classe do processo, com revisões dedicadas a compactação, persistência entre sessões e patologias de contexto longo. O terceiro é a emergência da verificação como o gargalo declarado: várias revisões de 2026 apontam que a produção de código por agentes ultrapassou a capacidade humana de revisá-lo, e que a próxima geração de processo precisa de camadas de verificação automatizadas.

## Lacunas de síntese

Uma advertência antes da lista, porque ela vale para tudo o que segue. As lacunas apontadas em versões anteriores deste documento foram medidas com o vocabulário das consultas originais, que privilegiavam agentes, modelos de linguagem e as fases centrais do ciclo. Varreduras dedicadas ao vocabulário das fases periféricas mostraram que parte do que parecia vazio era falha de recuperação. O corpus passou de 157 para 171 estudos secundários, e a afirmação de que não existia revisão de literatura sobre documentação viva estava simplesmente errada: existe uma revisão de 2026 sobre modelos de linguagem em documentação e modelagem, e uma pesquisa de indústria de 2023 sobre conhecimento arquitetural. As lacunas abaixo já incorporam essa correção, mas devem ser lidas como hipóteses a testar com consultas dedicadas, não como resultados fechados.

O mapeamento expõe cinco vazios que nenhuma das 171 revisões cobre de forma satisfatória.

Existe um único estudo terciário no corpus, e seu escopo é uma fase isolada: a revisão terciária de tarefas de geração de código com modelos de linguagem, de 2026. Nenhum terciário cobre o processo de desenvolvimento apoiado por agentes como um todo. Com 45 revisões sistemáticas e 19 estudos de mapeamento já publicados, há material suficiente para uma revisão de revisões que consolide as taxonomias concorrentes e identifique onde elas discordam. Esse é o trabalho de maior retorno imediato disponível.

O desenvolvimento dirigido por especificação aparece como termo em poucas revisões e nenhuma o toma como objeto. Não há revisão sistemática do que se sabe sobre especificação executável como interface entre intenção humana e execução agêntica, apesar de essa ser exatamente a costura entre a fase de requisitos e a fase de implementação nos fluxos agênticos atuais.

Projeto e arquitetura estão sub-revisados em relação ao seu peso no processo: onze revisões, das quais sete de 2025 em diante, e nenhuma que trate decisão arquitetural feita por agente como fenômeno de processo em vez de tarefa de geração de diagrama.

A gestão de conhecimento e a documentação viva, com 2 revisões, e o planejamento e gestão de projeto, com 3, são as fases com menos síntese em todo o esquema, apesar de o corpus de sedes ter 7 e 6 artigos primários em cada uma. A manutenção e a operação, com 6 revisões, seguem sendo a fase em que o custo real do software se concentra e uma das que menos síntese recebeu. Migração de sistemas legados, dívida técnica introduzida por código gerado e operação assistida por agentes aparecem em revisões isoladas sem articulação entre si.

Falta articulação entre a literatura de processo agêntico e a literatura empírica sobre equipes. Os 19 estudos que coletam dados de praticantes raramente dialogam com os 48 estudos de processo transversal, o que deixa as propostas de fluxo agêntico sem contraparte de evidência sobre adoção.
