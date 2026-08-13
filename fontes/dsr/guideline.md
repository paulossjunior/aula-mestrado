Aqui está a **versão compilada** do modelo, já com os trechos que o aluno precisa substituir destacados em vermelho:

[📄 Ver o Modelo DSR compilado](sandbox:/mnt/data/Modelo_DSR_compilado.pdf)

O resultado está assim, por exemplo: o texto metodológico permanece em preto e instruções como **“[PREENCHA: explique de onde surgiu o problema...]”** aparecem em vermelho. Quando o aluno terminar a dissertação, basta substituir esses trechos pelo conteúdo definitivo.

## Guideline para o aluno preencher o template

A proposta do template não é fazer com que o aluno simplesmente descreva as etapas da DSR. O objetivo é que a dissertação revele a lógica da pesquisa: **qual problema motivou o trabalho, o que precisava ser aprendido, como o artefato foi concebido, quais evidências orientaram sua evolução e o que foi aprendido ao final do processo**. Essa perspectiva está alinhada à Design Science Research, na qual a compreensão do problema e da solução ocorre por meio da construção e da avaliação de artefatos. ([MISQ][1])

### Método de Pesquisa

O aluno deve iniciar a seção apresentando a Design Science Research como a abordagem metodológica adotada e explicando por que ela é adequada ao problema tratado na dissertação. Não é suficiente dizer que DSR foi utilizada porque houve desenvolvimento de um software. É necessário mostrar que a pesquisa busca produzir uma intervenção — um artefato — destinada a resolver ou melhorar uma situação problemática e, ao mesmo tempo, produzir conhecimento a partir desse processo.

Na sequência, o aluno deve apresentar a organização geral da pesquisa. O modelo utilizado na tese segue as seis atividades propostas por Peffers et al.: identificação do problema e motivação, definição dos objetivos da solução, design e desenvolvimento, demonstração, avaliação e comunicação. Essas atividades não devem necessariamente ser compreendidas como uma sequência rígida; elas constituem um modelo para organizar e comunicar o processo de pesquisa. ([Taylor & Francis Online][2])

O aluno também deve explicar que essas atividades são relacionadas aos três ciclos apresentados por Hevner: **Relevance Cycle, Design Cycle e Rigor Cycle**. O ciclo de relevância conecta a pesquisa ao ambiente no qual o problema existe; o ciclo de rigor conecta a pesquisa à base de conhecimento científico existente; e o ciclo de design envolve as sucessivas atividades de construção e avaliação do artefato. Hevner argumenta que esses três ciclos precisam estar claramente identificáveis em um projeto de DSR. ([ResearchGate][3])

### Ciclo de Relevância

Nesta parte, o aluno precisa explicar de onde surgiu o problema. O texto deve apresentar o contexto real que motivou a pesquisa e mostrar evidências de que o problema existe. Essas evidências podem vir de experiências anteriores, estudos exploratórios, entrevistas, documentos, dados de organizações, trabalhos anteriores ou da literatura.

O aluno deve evitar começar pelo artefato. Uma frase como “esta pesquisa propõe desenvolver um sistema para...” ainda não explica o problema. Primeiro deve ficar claro **o que está errado ou pode ser melhorado no mundo real**. Depois disso, pode-se discutir a solução.

O texto precisa explicar quem é afetado pelo problema, quais consequências ele produz e por que as soluções existentes ainda não são suficientes. O ciclo de relevância é justamente o mecanismo pelo qual requisitos e problemas provenientes do ambiente entram na pesquisa e pelo qual o artefato retorna posteriormente ao ambiente para avaliação. ([ResearchGate][3])

Depois de caracterizar o problema, o aluno deve apresentar os **objetivos da solução**. Neste ponto, a recomendação é não entrar imediatamente em tecnologias. O texto deve explicar o que uma solução adequada precisa possibilitar. Se o problema é dificuldade de integrar informações, por exemplo, o objetivo da solução pode ser “possibilitar a integração de informações provenientes de fontes heterogêneas”. Somente posteriormente será explicado como isso foi realizado.

Os requisitos apresentados no template, como R1, R2 e R3, devem surgir desse raciocínio. Cada requisito precisa ter uma origem compreensível. Ao ler R2, por exemplo, o leitor deveria conseguir voltar ao problema ou a algum conhecimento da literatura e entender por que aquele requisito existe.

Os critérios de avaliação também devem começar a aparecer nesse momento. Isso cria uma ligação importante entre problema e avaliação. Se a pesquisa afirma que determinada solução deve melhorar a precisão de uma atividade, então posteriormente deve existir alguma evidência relacionada à precisão. O critério não deveria ser criado apenas depois de o artefato estar pronto.

### Ciclo de Design

Esta é a parte em que o aluno apresenta como o artefato foi efetivamente construído e evoluiu.

O artefato pode ser software, método, processo, modelo, arquitetura, framework, linguagem, instrumento ou outra construção destinada a resolver o problema investigado. Na tradição de Design Science, a construção e a avaliação do artefato são atividades centrais da pesquisa. ([MISQ][1])

Entretanto, o texto não deve se transformar em um diário de programação. O interesse científico não está em registrar que determinada API foi implementada na segunda-feira e uma interface na terça-feira. O aluno deve destacar **decisões de design relevantes**.

Para cada decisão importante, o texto deveria permitir compreender algo próximo da seguinte lógica: havia determinado problema ou requisito; existiam possíveis maneiras de tratá-lo; uma alternativa foi escolhida por determinada razão; essa escolha foi implementada; posteriormente foram produzidas evidências sobre sua adequação.

É justamente aqui que entram as **Learning Iterations**, uma característica importante do modelo utilizado na sua tese.

Barcellos et al. propõem organizar estudos empíricos realizados em projetos de DSR como Learning Iterations. A ideia é que os estudos não sejam vistos apenas como avaliações realizadas depois que o artefato está pronto. Eles podem ser usados durante a pesquisa para compreender melhor o problema, fundamentar o artefato, orientar seu desenvolvimento, avaliá-lo ou melhorá-lo. ([SBC][4])

### Como preencher cada Learning Iteration

Cada Learning Iteration deve começar explicando **por que aquele estudo precisou ser realizado naquele momento da pesquisa**.

Esse ponto é fundamental. A dissertação não deve simplesmente dizer: “foi realizado um estudo de caso”. O leitor precisa compreender qual dúvida existente no desenvolvimento da pesquisa levou à realização daquele estudo.

Uma boa introdução para uma Learning Iteration normalmente parte do resultado da etapa anterior. O texto pode explicar que determinada decisão de design precisava ser avaliada, que determinado aspecto do problema ainda não estava suficientemente compreendido ou que uma limitação identificada anteriormente exigiu uma nova investigação.

Depois disso, deve ser formulada uma questão específica que represente aquilo que o pesquisador deseja aprender. A questão da Learning Iteration não precisa ser necessariamente a questão principal da dissertação. Ela pode ser uma questão intermediária que ajude o pesquisador a tomar determinada decisão.

Por exemplo, a lógica pode ser:

> A primeira versão do artefato dependia da utilização de X. Entretanto, ainda não existiam evidências suficientes de que X seria adequado ao contexto investigado. Dessa forma, foi realizada uma Learning Iteration para investigar se...

Na sequência, o aluno deve explicar o desenho do estudo empírico utilizado para responder à questão. Isso inclui o método escolhido, contexto, participantes ou unidades de análise, procedimentos de coleta e procedimentos de análise. A escolha do método deve ser coerente com aquilo que se pretende aprender.

Depois de apresentar os resultados, deve existir uma seção equivalente ao **“What did we learn?”** existente na tese.

Essa seção é provavelmente uma das mais importantes de cada Learning Iteration.

Nela, o aluno não deve apenas repetir os resultados do estudo. Deve dizer explicitamente **o que aqueles resultados ensinaram à pesquisa**.

Se a evidência confirmou uma decisão de design, isso deve ser declarado. Se revelou uma limitação, o texto deve indicar qual. Se produziu um novo requisito, deve ser explicado. Se fez o pesquisador abandonar uma abordagem e procurar outra, essa mudança deve aparecer claramente.

É essa ligação que transforma um conjunto de estudos empíricos em um processo coerente de aprendizado. O propósito das Learning Iterations é justamente produzir conhecimento útil para compreender o problema, fundamentar e desenvolver o artefato, avaliá-lo ou refiná-lo. ([SBC][4])

Idealmente, o final de uma Learning Iteration prepara naturalmente o início da seguinte.

A narrativa pode assumir a forma:

**“Aprendemos X. Entretanto, o estudo também revelou Y. Para investigar Y, realizamos a próxima Learning Iteration.”**

Essa estrutura aparece de maneira muito forte na sua tese e é algo que eu recomendaria manter no trabalho dos alunos.

### Ciclo de Rigor

No ciclo de rigor, o aluno precisa tornar explícito de onde veio o conhecimento utilizado para construir o artefato.

A literatura não deveria aparecer apenas no capítulo de fundamentação teórica. Ela deve influenciar decisões concretas da pesquisa.

Se uma teoria levou à criação de um requisito, isso deve ser dito. Se um modelo existente orientou a arquitetura do artefato, essa relação deve aparecer. Se um estudo anterior sugeriu determinado método de avaliação, o texto deve explicar essa influência.

O ciclo de rigor conecta as atividades de design à base de conhecimento composta por fundamentos científicos, experiências e conhecimentos já acumulados. Ao mesmo tempo, os resultados produzidos pela pesquisa devem retornar a essa base como novos conhecimentos. ([ResearchGate][3])

Assim, o aluno deveria conseguir responder no texto não apenas **“o que construí?”**, mas também **“em qual conhecimento me apoiei para decidir construí-lo dessa maneira?”**

### Demonstração

Depois que o artefato atinge uma versão que permite sua utilização, o aluno precisa mostrar que ele consegue ser aplicado para tratar o problema para o qual foi projetado.

A demonstração pode ocorrer por uma prova de conceito, cenário de aplicação, experimento, estudo de caso ou uso em uma organização, dependendo da natureza do trabalho.

O ponto principal é demonstrar que o artefato não existe apenas conceitualmente. Ele precisa ser aplicado de alguma maneira que permita observar sua atuação diante do problema.

No processo de Peffers et al., a demonstração corresponde justamente ao uso do artefato para mostrar que ele pode contribuir para a solução de uma ou mais instâncias do problema. ([Taylor & Francis Online][2])

### Avaliação

Na avaliação, o aluno deve retornar aos objetivos e critérios definidos anteriormente.

O texto deve explicar claramente **o que está sendo avaliado**, **como será avaliado** e **quais evidências permitirão concluir se o artefato atende ao que foi proposto**.

Um erro que deve ser evitado é utilizar apenas afirmações como “os usuários gostaram do sistema”, “a solução funcionou” ou “os resultados foram satisfatórios”. Essas afirmações podem fazer parte das evidências, mas precisam estar relacionadas a critérios previamente definidos.

Hevner et al. colocam a avaliação do artefato como elemento essencial de uma pesquisa em Design Science, e Peffers et al. incluem explicitamente uma atividade de avaliação na DSRM. ([MISQ][1])

No modelo da tese, a avaliação final também pode ser tratada como uma nova Learning Iteration. Isso é particularmente interessante porque preserva a lógica de aprendizado: a pesquisa não pergunta apenas se o artefato passou ou falhou, mas procura compreender **o que foi aprendido quando o artefato foi aplicado em um contexto mais completo ou realista**.

### A seção “What did we learn?”

Eu recomendaria pedir aos alunos que **não retirem essa seção**, mesmo que posteriormente você decida traduzir o título para “O que aprendemos?”.

Ela força o pesquisador a separar resultado empírico de aprendizado científico.

Por exemplo, “quatro dos cinco participantes consideraram a ferramenta útil” é um resultado.

Já uma conclusão como “os resultados sugerem que a visualização X é adequada para apoiar a atividade Y, porém sua utilização exige que previamente exista Z” representa um aprendizado que pode influenciar o artefato ou gerar conhecimento reutilizável.

É nesse segundo nível que começa a aparecer de forma mais clara a contribuição da pesquisa.

### O que o aluno deve conseguir mostrar ao terminar

Ao final do preenchimento, a dissertação deve possuir uma narrativa contínua. O leitor deve conseguir compreender de onde surgiu o problema; como o problema originou objetivos e requisitos; qual conhecimento científico influenciou as decisões; como essas decisões resultaram no artefato; quais Learning Iterations foram necessárias durante seu desenvolvimento; o que foi aprendido em cada uma delas; como esses aprendizados alteraram a pesquisa; como o artefato foi demonstrado e avaliado; e qual conhecimento pode ser extraído de todo esse processo.

A melhor forma de verificar isso é tentar reconstruir mentalmente a seguinte cadeia:

**Problema → objetivos da solução → requisitos → conhecimento existente → decisões de design → artefato → Learning Iterations → evidências → aprendizados → evolução do artefato → avaliação final → contribuição.**

Se algum elo não puder ser explicado, provavelmente existe uma lacuna na escrita ou no próprio desenho da pesquisa.

As referências centrais desse guideline são **Hevner et al. (2004)** para os fundamentos da Design Science em Sistemas de Informação, **Hevner (2007)** para os ciclos de Relevância, Design e Rigor, **Peffers et al. (2007)** para as seis atividades da DSRM e **Barcellos et al. (2022)** para a organização dos estudos empíricos como Learning Iterations. ([MISQ][1])

Acho que vale a pena colocar **este guideline dentro do próprio projeto LaTeX**, como um arquivo `GUIA-DE-PREENCHIMENTO.pdf` ou como páginas iniciais que o aluno exclui antes de entregar a dissertação. Assim, o ZIP teria simultaneamente o **template preenchível** e o **manual de como preenchê-lo**.

[1]: https://misq.umn.edu/misq/article/28/1/75/261/Design-Science-in-Information-Systems-Research1?utm_source=chatgpt.com "Design Science in Information Systems Research 1"
[2]: https://www.tandfonline.com/doi/abs/10.2753/MIS0742-1222240302?utm_source=chatgpt.com "A Design Science Research Methodology for Information ..."
[3]: https://www.researchgate.net/publication/254804390_A_Three_Cycle_View_of_Design_Science_Research?utm_source=chatgpt.com "(PDF) A Three Cycle View of Design Science Research"
[4]: https://sol.sbc.org.br/index.php/sbqs/article/view/23302?utm_source=chatgpt.com "Organizing Empirical Studies as Learning Iterations in ..."
