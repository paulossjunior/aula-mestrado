# Codebook das fases do processo de software

Definição operacional dos onze códigos de fase usados para classificar os dois corpora deste projeto: os 171 estudos secundários e os 129 artigos com sede de publicação confirmada. Cada código traz escopo, critérios de inclusão e exclusão, um teste de decisão de uma pergunta para casos de fronteira, e exemplos reais retirados dos corpora.

O esquema começa antes do requisito, em F9, percorre a ordem canônica do ciclo de vida de F1 a F6, acrescenta duas fases de sustentação que atravessam o ciclo sem se dissolver nele — F10 para a coordenação do trabalho e F11 para o conhecimento do projeto — e fecha com F7 para o que é genuinamente transversal e F8 para formação. Um artigo recebe exatamente um código, o da fase predominante. Quando um artigo cobre várias fases de forma genuína, ele não vai para a fase de maior peso: vai para F7, e é justamente isso que F7 significa.

Três códigos foram acrescentados na revisão mais recente. F9 separa o entendimento do problema do seu registro formal, que antes ficavam ambos em F1. F10 extrai de F7 a coordenação operacional do trabalho, que não é infraestrutura de agência nem colaboração em sentido amplo. F11 extrai de F3 e de F7 o conhecimento do projeto tratado como artefato mantido, distinto tanto da geração de texto quanto da memória interna do agente.

## Resumo quantitativo

| Código | Fase | Estudos secundários | Artigos em sedes |
|---|---|---|---|
| F9 | Descoberta de produto e entendimento do problema | 4 | 5 |
| F1 | Requisitos e especificação | 7 | 7 |
| F2 | Projeto e arquitetura | 11 | 3 |
| F3 | Implementação e geração de código | 28 | 19 |
| F4 | Verificação e qualidade | 50 | 32 |
| F5 | Depuração e reparo | 8 | 11 |
| F6 | Manutenção, evolução e operação | 6 | 7 |
| F10 | Planejamento, gestão de projeto e releases | 3 | 6 |
| F11 | Gestão de conhecimento e documentação viva | 2 | 7 |
| F7 | Processo transversal e ciclo completo | 48 | 28 |
| F8 | Formação e educação em engenharia de software | 4 | 4 |
| | **Total** | **171** | **129** |

A tabela também é um resultado, não só uma legenda. Verificação e qualidade concentra 50 estudos secundários e 32 artigos primários, e processo transversal vem logo atrás com 48 e 28. As três fases acrescentadas nesta revisão somam 9 estudos secundários e 18 artigos primários entre 300 obras classificadas. Esses números são o resultado de duas rodadas de varredura dedicada, descritas na seção de procedimento; antes delas as três fases somavam 3 e 6 respectivamente, e a conclusão precipitada de que a lacuna era real precisou ser revista duas vezes.

## F9 — Descoberta de produto e entendimento do problema

A fase anterior ao requisito. Antes de escrever o que o sistema deve fazer, alguém precisa entender que problema existe, para quem, e o que o produto atual já faz. É a atividade que responde por que construir isto, e não como. Inclui tanto a descoberta voltada ao futuro — usuário, mercado, hipótese de produto — quanto a arqueologia voltada ao passado: compreender um sistema legado como fonte primária de conhecimento sobre o domínio, porque com frequência a única documentação viva da regra de negócio é o código que a implementa.

**Inclui.** Pesquisa de usuário e de mercado assistida por modelo de linguagem; ideação e validação de hipótese de produto; análise de feedback, avaliações de loja de aplicativos e tíquetes de suporte para descobrir necessidade; compreensão de código legado quando o objetivo é entender o que o sistema faz e por quê, incluindo engenharia reversa de intenção e recuperação de regra de negócio; onboarding de pessoa desenvolvedora em base de código desconhecida; formulação e enquadramento do problema.

**Não inclui.** Registrar formalmente o que foi descoberto, que é F1. Compreender código para alterá-lo, que pertence à fase da alteração pretendida — ler para corrigir é F5, ler para migrar é F6. Documentar o conhecimento recuperado como artefato mantido, que é F11.

**Teste de decisão.** O artigo trata de descobrir ou compreender o problema e o produto, antes de existir um requisito escrito para atender?

**Exemplos do corpus.**

- [Empowering Business Transformation: The Positive Impact and Ethical Considerations of Generative AI in Software Product Management -- A Systematic Literature Review](https://arxiv.org/abs/2306.04605) (2023) — estudo secundário; generative ai em engenharia de requisitos e desenvolvimento de software.
- [A Systematic Mapping Study and Practitioner Insights on the Use of Software Engineering Practices to Develop MVPs](https://arxiv.org/abs/2305.08299) (2023) — estudo secundário; práticas de engenharia de software em desenvolvimento de mvps.
- [Leveraging Encoder-only Large Language Models for Mobile App Review Feature Extraction](https://arxiv.org/abs/2408.01063) (2024) — estudo secundário; extração de features de reviews de apps móveis com llms encoder-only.
- [TARS: A Theory-of-Mind Agent for Personalized In-IDE Code Comprehension](https://arxiv.org/abs/2607.15948) (2026, ICSME, trilha principal) — agente de compreensão de código personalizado no ide via theory of mind.
- [A Multi-agent Onboarding Assistant based on Large Language Models, Retrieval Augmented Generation, and Chain-of-Thought](https://arxiv.org/abs/2503.23421) (2025, FSE, trilha principal) — assistente multiagente para onboarding com rag e chain-of-thought.
- [Augmenting Smart Contract Decompiler Output through Fine-grained Dependency Analysis and LLM-facilitated Semantic Recovery](https://arxiv.org/abs/2501.08670) (2025, TSE, trilha principal) — decompilação de smart contracts com análise estática e recuperação semântica por llm.

**Nota de lacuna, revisada.** As varreduras dedicadas — descoberta de produto, análise de avaliações de aplicativo, compreensão de programa, extração de regra de negócio de sistema legado, engenharia reversa, onboarding em base de código — elevaram a contagem para 5 artigos em sedes e 4 estudos secundários. O que aparece são assistentes de onboarding, compreensão personalizada de código na IDE, engenharia reversa e extração de requisitos a partir de avaliações de aplicativo. A descoberta de produto no sentido estrito de pesquisa de usuário e validação de hipótese permanece rara, provavelmente porque cai no vão entre a engenharia de software e a pesquisa em gestão de produto.

Uma vez entendido o problema (F9), esta é a fase que o registra formalmente. Tudo que ocorre antes de existir uma decisão de estrutura: descobrir, negociar, registrar e validar o que o software deve fazer. Inclui elicitação de requisitos, escrita e refinamento de histórias de usuário, rastreabilidade entre requisito e artefato, verificação de conformidade regulatória, e desenvolvimento dirigido por especificação, em que a especificação executável é o artefato que governa a execução do agente.

**Inclui.** Elicitação e classificação de requisitos assistidas por modelo de linguagem; geração e melhoria de histórias de usuário; extração de intenção a partir de issues ou tickets; rastreabilidade requisito-para-código; especificação formal ou semiformal como entrada de geração; verificação de conformidade legal ou normativa.

**Não inclui.** Geração de código a partir de um requisito já fixado, que é F3. Especificação de teste derivada de código existente, que é F4. Ensino de levantamento de requisitos, que é F8. Descoberta e compreensão do problema antes de haver requisito, que é F9.

**Teste de decisão.** A pergunta central do artigo é o que o sistema deve fazer, e não como fazê-lo?

**Exemplos do corpus.**

- [Large Language Models (LLMs) for Requirements Engineering (RE): A Systematic Literature Review](https://arxiv.org/abs/2509.11446) (2025) — estudo secundário; llms em engenharia de requisitos: elicitação, validação e artefatos.
- [From Obligation to Specification: A Survey on Validating EU AI Act Requirements in RE](https://arxiv.org/abs/2607.21608) (2026) — estudo secundário; validação de requisitos eu ai act com ferramentas llm-agenticas.
- [Prompt Engineering for Requirements Engineering: A Literature Review and Roadmap](https://arxiv.org/abs/2507.07682) (2025) — estudo secundário; prompt engineering para tarefas de engenharia de requisitos com llms.
- [CNnotator: LLM-Guided Memory Safety Annotation Synthesis](https://arxiv.org/abs/2606.21822) (2026, ICSE, workshop ou trilha satélite) — llm com laço feedback para síntese automática de anotações segurança memória.
- [TraceDev: A Traceability-Driven Multi-agent Framework for Requirement-to-Code Development](https://arxiv.org/abs/2607.18886) (2026, ISSTA, trilha principal) — framework multi-agente para desenvolvimento requirement-to-code com rastreabilidade.
- [From Bugs to Benefits: Improving User Stories by Leveraging Crowd Knowledge with CrUISE-AC](https://arxiv.org/abs/2501.15181) (2025, ICSE, trilha principal) — geração automática de critérios de aceitação via llm e nlp.
## F2 — Projeto e arquitetura

A decisão de estrutura: como o sistema se decompõe em partes, que responsabilidades cada parte carrega, e que restrições de qualidade a decomposição precisa honrar. Cobre decisão arquitetural, modelagem estrutural e comportamental, padrões de projeto, e reestruturação em nível de componente.

**Inclui.** Recomendação ou avaliação de decisão arquitetural; geração de diagramas UML e entidade-relacionamento; decomposição em microsserviços; escolha de padrão de projeto; avaliação de conhecimento arquitetural de modelos de linguagem; documentação de arquitetura.

**Não inclui.** Refatoração local que não altera a estrutura de componentes, que é F6. Geração de esqueleto de código a partir de arquitetura já definida, que é F3.

**Teste de decisão.** O artefato produzido ou avaliado é uma estrutura de componentes e suas relações, e não código executável nem um requisito?

**Exemplos do corpus.**

- [Software Architecture Meets LLMs: A Systematic Literature Review](https://arxiv.org/abs/2505.16697) (2025) — estudo secundário; aplicação de llms em tarefas de arquitetura de software.
- [Large Language Models for Software Engineering Diagrams: A Systematic Review of UML and ER modelling](https://arxiv.org/abs/2607.26100) (2026) — estudo secundário; llms para modelagem uml/er em engenharia de software.
- [Beyond the Autoregressive Horizon: A Comprehensive Survey of Diffusion Models, World Modelling, and State Space Models for Code](https://arxiv.org/abs/2606.23690) (2026) — estudo secundário; paradigmas alternativos a modelos autorregressivos para geração de código.
- [MicroAgent: Context-Augmented Multi-Agent Framework for Automatic Microservice Decomposition](https://arxiv.org/abs/2606.29742) (2026, ASE, trilha principal) — framework multi-agente para decomposição automática de microsserviços.
- [Assessing LLMs for Front-end Software Architecture Knowledge](https://arxiv.org/abs/2502.19518) (2025, ICSE, workshop ou trilha satélite) — avaliação de llms em compreensão de arquitetura de software.
- [From Requirements to Architecture: An AI-Based Journey to Semi-Automatically Generate Software Architectures](https://arxiv.org/abs/2401.14079) (2024, ICSE, workshop ou trilha satélite) — geração semi-automática de arquiteturas de software a partir de requisitos.
## F3 — Implementação e geração de código

A produção do código em si, e as transformações que preservam ou traduzem sua intenção. É a fase em que o artefato de saída é código-fonte executável ou uma representação direta dele.

**Inclui.** Geração de código a partir de linguagem natural; completação de código; geração em nível de repositório com recuperação de contexto; tradução entre linguagens; otimização de desempenho; sumarização e documentação de código; geração de mensagens de commit; recuperação aumentada quando serve à produção de código.

**Não inclui.** Geração de código de teste, que é F4. Geração de patch para corrigir um defeito conhecido, que é F5. Migração de sistema legado inteiro, que é F6. Documentação mantida como base de conhecimento consultável, que é F11.

**Teste de decisão.** A saída avaliada é código de produção novo ou transformado, e não um teste nem uma correção de defeito?

**Exemplos do corpus.**

- [A Survey on Large Language Models for Code Generation](https://arxiv.org/abs/2406.00515) (2024) — estudo secundário; geração de código com llms: dados, desempenho, aplicações.
- [A Survey on Code Generation with LLM-based Agents](https://arxiv.org/abs/2508.00083) (2025) — estudo secundário; agentes llm autônomos para geração código e ciclo vida software.
- [Code Reasoning for Software Engineering Tasks: A Survey and A Call to Action](https://arxiv.org/abs/2506.13932) (2025) — estudo secundário; raciocínio em tempo de inferência para tarefas de engenharia de software com agentes.
- [Code vs Serialized AST Inputs for LLM-Based Code Summarization: An Empirical Study](https://arxiv.org/abs/2602.06671) (2026, ICSE, workshop ou trilha satélite) — método de serialização ast para sumarização de código com llms.
- [Towards Reliable C-to-Rust Translation with Rule-Guided Reasoning and Reinforcement Learning](https://arxiv.org/abs/2607.19966) (2026, ASE, trilha principal) — tradução c-to-rust com raciocínio guiado por regras e aprendizado por reforço.
- [An Empirical Study of Speculative Decoding on Software Engineering Tasks](https://arxiv.org/abs/2604.26469) (2026, ISSTA, trilha principal) — avaliação empírica de técnicas de aceleração em tarefas de engenharia de software.
## F4 — Verificação e qualidade

Tudo que julga se o código está adequado, sem necessariamente consertá-lo. Reúne as atividades de detecção: teste, revisão, análise e medição de qualidade. A fase existe separada de F5 porque encontrar um problema e corrigi-lo são atividades com literaturas, métricas e gargalos distintos.

**Inclui.** Geração e manutenção de testes unitários e de integração; teste metamórfico e baseado em propriedades; revisão de código, humana ou agêntica; análise estática; detecção de vulnerabilidade e de mau cheiro de código; avaliação de qualidade de código gerado por modelo; teste de interface e de sistema.

**Não inclui.** Localização de falha seguida de correção, que é F5. Benchmark cujo objeto é a capacidade geral de um agente e não a qualidade de um artefato, que costuma ser F7.

**Teste de decisão.** O artigo produz um julgamento sobre o código, e não uma alteração nele?

**Exemplos do corpus.**

- [Large Language Models for Unit Test Generation: Achievements, Challenges, and Opportunities](https://arxiv.org/abs/2511.21382) (2025) — estudo secundário; geração automatizada de testes unitários com modelos de linguagem grandes.
- [AI-Driven Test Case Generation from Natural Language Requirements: A Survey of Techniques and Research Gaps](https://arxiv.org/abs/2606.06563) (2026) — estudo secundário; geração automática de casos de teste a partir requisitos em linguagem natural.
- [From Human-Centric to Agentic Code Review: The Impact of Different Generations of Generative AI Technology on Review Quality](https://arxiv.org/abs/2607.13196) (2026) — estudo secundário; impacto de agentes ia em qualidade e eficiência de code review.
- [RovoDev Code Reviewer: A Large-Scale Online Evaluation of LLM-based Code Review Automation at Atlassian](https://arxiv.org/abs/2601.01129) (2026, ICSE, workshop ou trilha satélite) — automação de revisão de código com llm integrado em plataforma enterprise.
- [AgenticSCR: An Autonomous Agentic Secure Code Review for Immature Vulnerabilities Detection](https://arxiv.org/abs/2601.19138) (2026, ASE, trilha principal) — revisão segura de código com agente autônomo e memória semântica.
- [More Code, Less Reuse: Investigating Code Quality and Reviewer Sentiment towards AI-generated Pull Requests](https://arxiv.org/abs/2601.21276) (2026, MSR, trilha principal) — avaliação qualidade código e sentimento reviewers em prs geradas por llm.
## F5 — Depuração e reparo

O ciclo que parte de um defeito observado e termina em uma correção. Inclui reproduzir o defeito, localizar sua causa e gerar o patch. É a fase onde vive a resolução autônoma de issues, o gênero mais ativo da engenharia de software agêntica.

**Inclui.** Localização de falha; reprodução automática de bug e de crash; reparo automatizado de programa; resolução agêntica de issue de repositório; depuração interativa assistida por agente; raciocínio causal sobre defeito.

**Não inclui.** Detecção de vulnerabilidade sem correção, que é F4. Correção de dívida técnica planejada em vez de reativa, que é F6.

**Teste de decisão.** Existe um defeito concreto como ponto de partida, e uma correção como ponto de chegada?

**Exemplos do corpus.**

- [A Survey of LLM-based Automated Program Repair: Taxonomies, Design Paradigms, and Applications](https://arxiv.org/abs/2506.23749) (2025) — estudo secundário; reparo automático de programas baseado em llms, taxonomias e paradigmas.
- [Advances and Frontiers of LLM-based Issue Resolution in Software Engineering: A Comprehensive Survey](https://arxiv.org/abs/2601.11655) (2026) — estudo secundário; agentes de código autônomos para resolução de issues em engenharia de software.
- [A Comprehensive Survey of AI-Driven Advancements and Techniques in Automated Program Repair and Code Generation](https://arxiv.org/abs/2411.07586) (2024) — estudo secundário; geração de código e reparo automático com llms.
- [Empowering Autonomous Debugging Agents with Efficient Dynamic Analysis](https://arxiv.org/abs/2604.24212) (2026, FSE, trilha principal) — interface de depuração centrada em agentes para reparo autônomo de programas.
- [DePro: Understanding the Role of LLMs in Debugging Competitive Programming Code](https://arxiv.org/abs/2603.19399) (2026, FSE, trilha principal) — depuração automática de código com llm e teste iterativo.
- [To Run or Not to Run: Analyzing the Cost-Effectiveness of Code Execution in LLM-Based Program Repair](https://arxiv.org/abs/2606.26978) (2026, ISSTA, trilha principal) — análise empírica de custo-efetividade de execução em agents llm.
## F6 — Manutenção, evolução e operação

O que acontece com o software depois que ele existe e funciona: adaptá-lo, movê-lo, mantê-lo saudável e operá-lo em produção. Distingue-se de F5 porque a motivação não é um defeito, e sim mudança de contexto, acúmulo de custo ou necessidade operacional.

**Inclui.** Migração de sistema legado e de biblioteca; atualização de dependência; refatoração planejada; gestão de dívida técnica; evolvabilidade e manutenibilidade; operação assistida por agente, incluindo análise de causa raiz de incidente; sistemas de build; conformidade de licença.

**Não inclui.** Reparo de defeito reportado, que é F5. Reestruturação que redefine a arquitetura de componentes, que é F2. Planejamento e orquestração de release, que é F10; a operação contínua da implantação permanece em F6.

**Teste de decisão.** O software já está em uso, e o artigo trata de mantê-lo viável ao longo do tempo?

**Exemplos do corpus.**

- [A Survey on Large Language Model Impact on Software Evolvability and Maintainability: the Good, the Bad, the Ugly, and the Remedy](https://arxiv.org/abs/2601.20879) (2026) — estudo secundário; impacto de llms na manutenção e evolução de software.
- [From AI Technical Debt to Agentic Technical Debt: A Systematic Mapping of Root Causes and Manifestations in Agentic AI Systems](https://arxiv.org/abs/2608.01001) (2026) — estudo secundário; manutenção e evolução de sistemas agenticos, dívida técnica em agentes autônomos.
- [Faster Code, Deeper Debt? A Multivocal Literature Review on Technical Debt and Its Early Signs in LLM-Assisted Software Development](https://arxiv.org/abs/2606.14796) (2026) — estudo secundário; dívida técnica em desenvolvimento assistido por llm.
- [Faster Code, Deeper Debt? A Multivocal Literature Review on Technical Debt and Its Early Signs in LLM-Assisted Software Development](https://arxiv.org/abs/2606.14796) (2026, TOSEM, trilha principal) — revisão sistemática de dívida técnica em desenvolvimento assistido por llm.
- [When AI Agents Touch CI/CD Configurations: Frequency and Success](https://arxiv.org/abs/2601.17413) (2026, MSR, trilha principal) — avaliação empírica de agentes ia em configurações ci/cd.
- [Self-Admitted Technical Debt in LLM Software: An Empirical Comparison with ML and Non-ML Software](https://arxiv.org/abs/2601.06266) (2026, SANER, trilha principal) — estudo empírico de dívida técnica em software baseado em llm.
## F10 — Planejamento, gestão de projeto e releases

A coordenação do trabalho, não a produção do artefato. Enquanto F1 a F6 tratam do que se constrói, esta fase trata de quem faz o quê, quando, em que ordem, e como o resultado chega às pessoas usuárias. A entrada de agentes no processo tornou esta fase mais relevante do que era: alocar tarefa a agente, estimar o custo de uma execução autônoma e decidir o que entra numa release montada com contribuição de agentes são problemas de gestão que a literatura começou a tratar em 2025 e 2026.

**Inclui.** Estimativa de esforço, custo e prazo; priorização e planejamento de sprint e de backlog; triagem, rotulagem e atribuição de issues; alocação de pessoas e de agentes a tarefas; acompanhamento de progresso e previsão de entrega; gestão de risco de projeto; planejamento e orquestração de release, versionamento, geração de changelog, feature flags, estratégia de implantação e de reversão; métricas de entrega como as do DORA.

**Não inclui.** Resolver a issue triada, que é F5. Executar a implantação como problema de operação contínua, que é F6. Estudar produtividade de equipe como fenômeno de colaboração humano-IA sem a dimensão de coordenação de trabalho, que é F7.

**Teste de decisão.** A contribuição incide sobre a organização e a sequência do trabalho, e não sobre o artefato de software produzido?

**Exemplos do corpus.**

- [Automatic techniques for issue report classification: A systematic mapping study](https://arxiv.org/abs/2505.01469) (2025) — estudo secundário; classificação automática de relatórios de issues com técnicas ml/llm.
- [RSMM: A Framework to Assess Maturity of Research Software Project](https://arxiv.org/abs/2406.01788) (2024) — estudo secundário; framework de maturidade para práticas de sustentabilidade de software de pesquisa.
- [A Framework of Critical Success Factors for Agile Software Development](https://arxiv.org/abs/2602.04467) (2026) — estudo secundário; fatores críticos de sucesso em projetos de desenvolvimento ágil de software.
- [Toward Agentic Software Project Management: A Vision and Roadmap](https://arxiv.org/abs/2601.16392) (2026, ICSE, workshop ou trilha satélite) — visão e roadmap para gestão ágil de projetos com sistemas multi-agentes.
- [Smells Depend on the Context: An Interview Study of Issue Tracking Problems and Smells in Practice](https://arxiv.org/abs/2601.04124) (2026, TOSEM, trilha principal) — problemas e smells em sistemas de rastreamento de issues.
- [Past, Present, and Future of Bug Tracking in the Generative AI Era](https://arxiv.org/abs/2510.08005) (2025, TOSEM, trilha principal) — visão de rastreamento de bugs com agentes ia e automação llm.

**Nota de lacuna, revisada.** Este código passou por duas rodadas de verificação com conclusões diferentes. Na primeira, uma triagem lexical sobre os registros já classificados encontrou 75 candidatos com vocabulário de planejamento, quase todos usando termos como implantação ou priorização de forma incidental; concluiu-se, prematuramente, que a lacuna era real. Essa triagem só podia detectar rótulo errado, não recuperação falha, porque olhava apenas o que já havia sido recuperado. Varreduras dedicadas com vocabulário próprio da fase — estimativa de esforço, ponto de história, planejamento de sprint, backlog, triagem e atribuição de issue, notas de release, changelog, métricas de entrega — elevaram a contagem para 6 artigos em sedes e 3 estudos secundários. O que permanece verdadeiro é a assimetria entre níveis, com o dobro de trabalho primário em relação à síntese.

O conhecimento do projeto tratado como artefato de primeira classe: produzido, versionado, mantido sincronizado e consultado. A distinção em relação a F3 é de finalidade e de ciclo de vida. Gerar um comentário de função e avaliar a qualidade do texto gerado é sumarização de código, e portanto implementação. Manter um registro de decisão arquitetural que continua verdadeiro depois de trinta commits é gestão de conhecimento. Esta fase ganhou peso próprio porque agentes consomem documentação como contexto de execução: um arquivo de convenções do projeto deixou de ser cortesia para quem chega e passou a ser entrada operacional.

**Inclui.** Geração e manutenção de documentação técnica, README, registros de decisão arquitetural, wiki e runbook; documentação viva mantida em sincronia com o código; base de conhecimento da equipe; memória organizacional e retenção de conhecimento diante de rotatividade; arquivos de contexto que codificam convenções do projeto para consumo por agentes; rastreamento de proveniência de decisões; sumarização de discussões de issue e de pull request para consulta futura.

**Não inclui.** Sumarização de código avaliada pela qualidade do texto produzido, que é F3. Memória de agente como mecanismo técnico de arquitetura, que é F7 — a distinção é entre a memória da máquina e a memória da equipe. Recuperar conhecimento de código legado para entender o produto, que é F9; documentá-lo depois é F11.

**Teste de decisão.** O artefato central é conhecimento do projeto destinado a ser mantido e consultado ao longo do tempo, e não código nem um mecanismo interno de agente?

**Exemplos do corpus.**

- [Who Writes the Docs in SE 3.0? Agent vs. Human Documentation Pull Requests](https://arxiv.org/abs/2601.20171) (2026, MSR, trilha principal) — análise empírica de prs de documentação: agentes vs humanos.
- [The Illusion of Agentic Complexity in README.md Generation: Evaluating Single-Agent vs. Multi-Agent RAG Systems](https://arxiv.org/abs/2606.30524) (2026, ICSME, trilha principal) — geração de readme com rag: single-agent versus multi-agente.
- [What's Inside a GitHub Repository? An Empirical Study on the Contents of 10K Projects](https://arxiv.org/abs/2605.16701) (2026, ICSME, trilha principal) — conteúdo e evolução de artefatos em 10 mil repositórios github.

**Nota de lacuna, revisada duas vezes.** A trajetória deste código merece registro, porque a conclusão mudou a cada rodada de verificação. Na primeira, o código tinha duas obras primárias e nenhum estudo secundário, e uma busca no pool de 1.172 registros retornou onze candidatos, nenhum dos quais tomava documentação viva como objeto; concluiu-se que não existia survey de documentação na era agêntica. Uma varredura dedicada com vocabulário próprio da fase mostrou que essa conclusão estava errada: existe uma revisão de literatura de 2026 sobre modelos de linguagem em documentação e modelagem de software, e uma pesquisa de indústria de 2023 sobre representação e comunicação de conhecimento arquitetural. A contagem passou a 2 estudos secundários e 7 artigos primários. O que a busca original não alcançou foi o vocabulário: as consultas iniciais procuravam agentes e modelos de linguagem, e a literatura de documentação usa termos como artefato, modelagem e conhecimento arquitetural. A lição vale para o esquema todo: uma lacuna medida com o vocabulário errado é uma lacuna de busca, não de campo.

Esta é a categoria que exige mais cuidado, porque não é um resíduo. Um artigo entra em F7 quando sua unidade de análise não é uma atividade do ciclo de vida, e sim o arranjo entre atividades, entre agentes ou entre agentes e pessoas. Três situações a caracterizam. A primeira é a cobertura de ciclo completo: o artigo atravessa deliberadamente várias fases, como um framework multi-agente que vai de requisito a teste, e o objeto de estudo é a passagem de uma fase à seguinte. A segunda é a infraestrutura de agência: memória, contexto, orquestração, protocolos de ferramenta, avaliação de trajetória — mecanismos que não pertencem a nenhuma fase porque servem a todas. A terceira é a organização do trabalho no sentido de colaboração e governança: relação humano-IA, papéis, confiança, produtividade de equipe, governança e visões de futuro da disciplina. Note que a coordenação operacional do trabalho — estimar, priorizar, atribuir, planejar release — saiu de F7 e passou a ter código próprio em F10, e que o conhecimento do projeto como artefato mantido saiu para F11; F7 ficou com o que é genuinamente infraestrutura de agência e organização em sentido amplo.

**Inclui.** Frameworks multi-agente que cobrem múltiplas fases; arquiteturas de memória e engenharia de contexto para agentes; orquestração e protocolos de ferramenta; avaliação de agentes e de suas trajetórias; benchmarks agênticos de propósito geral; estudos de produtividade, confiança e adoção em equipes; gestão ágil de projeto com agentes; artigos de visão e roadmap da disciplina; governança e responsabilidade.

**Não inclui.** Um framework multi-agente cuja avaliação é inteiramente em uma fase, por exemplo apenas geração de teste, pertence àquela fase e não a F7 — a cobertura tem de ser real, não declarada. Ensino da disciplina, que é F8. Survey de uma única fase, que pertence à fase revisada. Coordenação operacional do trabalho, que é F10. Documentação e base de conhecimento do projeto, que é F11 — a memória de agente como mecanismo permanece em F7.

**Teste de decisão.** Se eu retirasse deste artigo toda referência a uma fase específica do ciclo de vida, sobraria uma contribuição? Se sim, é F7.

**Exemplos do corpus.**

- [From LLMs to LLM-based Agents for Software Engineering: A Survey of Current, Challenges and Future](https://arxiv.org/abs/2408.02479) (2024) — estudo secundário; llms e agentes llm para engenharia software: prática atual e desafios.
- [A Comprehensive Survey on Benchmarks and Solutions in Software Engineering of LLM-Empowered Agentic System](https://arxiv.org/abs/2510.09721) (2025) — estudo secundário; benchmarks e soluções em engenharia de software com sistemas agenticos llm.
- [Agentic Software Issue Resolution with Large Language Models: A Survey](https://arxiv.org/abs/2512.22256) (2025) — estudo secundário; agentes llm para resolução automática de issues em repositórios software.
- [Fairness in Multi-Agent Systems for Software Engineering: An SDLC-Oriented Rapid Review](https://arxiv.org/abs/2604.13103) (2026, FSE, workshop ou trilha satélite) — fairness em sistemas multi-agente llm para desenvolvimento software.
- [PAIChecker: Uncovering and Checking PR-Issue Misalignment in SWE-Bench-Like Benchmarks](https://arxiv.org/abs/2607.28587) (2026, ASE, trilha principal) — sistema multi-agente para validar qualidade de benchmarks swe-bench.
- [Future of Software Engineering Research: The SIGSOFT Perspective](https://arxiv.org/abs/2601.19731) (2026, ICSE, workshop ou trilha satélite) — visão sobre inclusividade e acessibilidade em conferências de engenharia de software.
## F8 — Formação e educação em engenharia de software

A transmissão da prática, não a prática. Entra aqui o artigo cujo sujeito é quem aprende — estudante, desenvolvedor novato, currículo, avaliação pedagógica — em vez do software produzido.

**Inclui.** Uso de modelos de linguagem em disciplinas de programação e engenharia de software; feedback automatizado a estudantes; tutores agênticos; currículo para engenharia de software agêntica; percepções e adoção por desenvolvedores novatos e estudantes.

**Não inclui.** Estudo com desenvolvedores profissionais experientes sobre produtividade, que é F7. Geração de código para exercícios, avaliada pela qualidade do código e não pelo aprendizado, que é F3.

**Teste de decisão.** O desfecho medido é aprendizado ou formação de pessoas, e não propriedade de um artefato de software?

**Exemplos do corpus.**

- [Novice Developers' Perspectives on Adopting LLMs for Software Development: A Systematic Literature Review](https://arxiv.org/abs/2503.07556) (2025) — estudo secundário; adoção de llms por desenvolvedores novatos em engenharia de software.
- [Exploring the Role of Automated Feedback in Programming Education: A Systematic Literature Review](https://arxiv.org/abs/2602.00089) (2026) — estudo secundário; sistemas de feedback automatizado para educação em programação.
- [Integrating LLMs in Software Engineering Education: Motivators, Demotivators, and a Roadmap Towards a Framework for Finnish Higher Education Institutes](https://arxiv.org/abs/2503.22238) (2025) — estudo secundário; integração de llms na educação em engenharia de software.
- [Large Language Models for Software Testing Education: an Experience Report](https://arxiv.org/abs/2603.26329) (2026, FSE, trilha principal) — educação em testes com llm: comportamentos e dificuldades de estudantes.
- [Harnessing Hype to Teach Empirical Thinking: An Experience With AI Coding Assistants](https://arxiv.org/abs/2604.01110) (2026, FSE, trilha principal) — estudo empírico sobre pedagogia de pensamento científico com assistentes ia.
- [ASE-26: a curriculum for agentic software engineering as a discipline](https://arxiv.org/abs/2606.01152) (2026, ASE, workshop ou trilha satélite) — currículo para engenharia de software agentica como disciplina acadêmica.

## Notas de aplicação

O código F7 é o que mais gera erro de classificação, em duas direções opostas. Superatribuição acontece quando um framework multi-agente declara cobrir o ciclo completo mas avalia apenas uma fase; o critério é a avaliação, não a declaração. Subatribuição acontece com artigos de infraestrutura — memória, contexto, orquestração — que parecem pertencer à fase da tarefa em que foram demonstrados; o teste de decisão resolve, porque a contribuição sobrevive à remoção daquela fase. Com a criação de F10 e F11, um terceiro erro passou a ser possível: mandar para F7 um artigo de coordenação de trabalho ou de gestão de conhecimento por falta de código melhor. Verifique F10 e F11 antes de recorrer a F7.

A fronteira entre F9 e F1 depende de existir requisito. Compreender um sistema legado para descobrir que regra de negócio ele implementa é F9. Escrever a especificação dessa regra para reimplementá-la é F1.

A fronteira entre F4 e F5 depende de haver um defeito concreto como ponto de partida. Detecção de vulnerabilidade é F4; correção de vulnerabilidade reportada é F5. Um artigo que detecta e corrige na mesma abordagem vai para F5, porque a correção é o desfecho medido.

A fronteira entre F5 e F6 depende da motivação. Um patch motivado por um relato de defeito é F5. Uma alteração motivada por mudança de plataforma, atualização de dependência ou acúmulo de dívida é F6, mesmo quando o mecanismo técnico é idêntico.

A fronteira entre F5 e F10 separa resolver de organizar. Triar, classificar e atribuir uma issue é F10; resolvê-la é F5. Um artigo que faz as duas coisas vai para aquela em que a avaliação se concentra.

A fronteira entre F3 e F11 é de ciclo de vida do artefato. Documentação gerada e avaliada como texto produzido é F3. Documentação mantida, versionada e consultada ao longo do projeto é F11. Um benchmark que usa documentação como entrada para gerar código é F3, porque o desfecho medido é o código.

A fronteira entre F7 e F11 separa a memória da máquina da memória da equipe. Arquitetura de memória de agente, janela de contexto e compactação são F7. Arquivos de convenção do projeto, registros de decisão e base de conhecimento consultável são F11, mesmo quando o consumidor é um agente.

## Procedimento de classificação

Os dois corpora foram classificados por triagem automática sobre título e resumo, seguida de segunda passada obrigatória sobre todas as obras atribuídas a F9, F10 e F11 e sobre as de baixa confiança, com justificativa escrita e confirmação ou correção do código. Cada linha dos arquivos CSV carrega `fase`, `confianca_fase` e `justificativa_fase`, o que permite refazer a auditoria sem repetir a classificação.

A verificação das fases com contagem baixa passou por três etapas, e vale registrar a sequência porque a conclusão mudou duas vezes. A primeira etapa foi uma triagem lexical reversa sobre o material já recuperado; ela detecta rótulo errado mas não falha de recuperação, e levou à conclusão precipitada de que as lacunas eram reais. A segunda foi uma varredura dedicada ao arXiv com 27 consultas construídas com o vocabulário próprio de F9, F10 e F11, que recuperou 355 registros novos, dos quais 23 tinham sede de publicação confirmada; 13 foram classificados nas três fases, 12 após a revisão manual que remeteu um artigo de percepção visual de repositório para F7. A terceira estendeu a varredura ao nível secundário, com 14 consultas por revisões e mapeamentos nessas mesmas fases, recuperando 18 candidatos dos quais 14 entraram no corpus e 4 foram descartados por tratarem de metodologia de revisão sistemática e não do processo de desenvolvimento.

O saldo das três etapas: o corpus de sedes passou de 106 para 129 artigos e o de estudos secundários de 157 para 171. As três fases acrescentadas passaram de 6 para 18 artigos primários e de 3 para 9 estudos secundários. A afirmação anterior de que não existia revisão de literatura sobre documentação viva estava errada, e foi corrigida na nota de F11.

A lição metodológica é que uma lacuna medida com o vocabulário errado é lacuna de busca, não de campo. As varreduras originais procuravam agentes, modelos de linguagem e as fases centrais do ciclo; a literatura de planejamento, documentação e descoberta de produto usa outro vocabulário e ficou fora do alcance. Contagens baixas em qualquer código deste esquema devem ser tratadas como hipótese a testar com consultas dedicadas, nunca como resultado.

Casos de fronteira remanescentes devem ser verificados antes de citar as contagens em publicação.
