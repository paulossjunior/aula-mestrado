# Guideline para Escrita de uma Dissertação utilizando Design Science Research

## 1. Objetivo deste guideline

Este guideline tem como objetivo auxiliar o estudante na escrita de uma dissertação que utiliza Design Science Research (DSR) como abordagem metodológica. Ele deve ser utilizado em conjunto com o template LaTeX fornecido. No template, os textos apresentados em vermelho indicam os trechos que precisam ser substituídos ou desenvolvidos pelo estudante.

O objetivo não é fazer com que todas as dissertações reproduzam exatamente a mesma estrutura ou tenham a mesma quantidade de estudos. O template procura ajudar o estudante a tornar explícita a lógica da pesquisa, mostrando como o problema investigado se relaciona com o conhecimento científico utilizado, com as decisões de design, com o artefato desenvolvido, com os estudos empíricos realizados e, principalmente, com os aprendizados produzidos ao longo da pesquisa.

Em Design Science Research, desenvolver um software, método, modelo, processo ou outra solução não é suficiente, por si só, para caracterizar uma pesquisa científica. A construção do artefato faz parte de um processo no qual conhecimento sobre o problema e sobre possíveis soluções é produzido por meio da concepção, construção, aplicação e avaliação desse artefato.

Hevner et al. (2004) apresentam Design Science como um paradigma no qual conhecimento e compreensão sobre um domínio de problema e sua solução são obtidos por meio da construção e da aplicação de artefatos.

A referência pode ser consultada em:

https://misq.umn.edu/misq/article/28/1/75/261/Design-Science-in-Information-Systems-Research1

Durante a escrita da dissertação, o estudante deve procurar tornar claras três questões: **qual problema estamos tentando resolver, por que construímos o artefato dessa maneira e o que aprendemos ao construí-lo e avaliá-lo?**

De maneira simplificada, o leitor deve conseguir reconstruir uma trajetória semelhante a:

**Problema → necessidade de conhecimento → objetivos da solução → requisitos → conhecimento científico → decisões de design → artefato → estudos empíricos → evidências → aprendizados → evolução do artefato → avaliação → contribuição científica.**

Essa trajetória não precisa ser linear. Ao contrário, uma característica importante da DSR é justamente a possibilidade de a pesquisa evoluir à medida que novos conhecimentos são produzidos.

---

## 2. Apresentando a Design Science Research na dissertação

Na seção de método de pesquisa, o estudante deve inicialmente explicar por que a Design Science Research é adequada ao trabalho desenvolvido.

A justificativa não deve ser simplesmente afirmar que DSR foi adotada porque um software foi desenvolvido. Deve existir um problema relevante e uma intervenção concebida para contribuir para sua solução.

Na tese utilizada como exemplo neste guideline, a relação entre o problema, o artefato e a abordagem de pesquisa aparece explicitamente quando a pesquisa é sintetizada:

> “In this work, we propose to use networked ontologies to establish an integration architecture and assign semantics to application data.”

Logo depois, a abordagem metodológica é explicitada:

> “The work followed the Design Science Research paradigm and involved four learning iterations.”

Observe que a DSR não aparece isolada. Antes de declarar o método, o texto apresenta aquilo que está sendo proposto e o problema ao qual a proposta está relacionada.

Ao preencher o template, o estudante deve procurar fazer algo semelhante. Primeiro deve situar o problema e a intervenção proposta. Depois deve explicar por que investigar esse problema por meio da construção e avaliação de um artefato caracteriza uma abordagem adequada de Design Science Research.

---

## 3. Organização geral da pesquisa

Uma referência importante para organizar uma pesquisa em DSR é Peffers et al., que apresentam a Design Science Research Methodology. A metodologia compreende atividades relacionadas à identificação do problema e motivação, definição dos objetivos da solução, design e desenvolvimento, demonstração, avaliação e comunicação.

A referência pode ser consultada em:

https://www.tandfonline.com/doi/abs/10.2753/MIS0742-1222240302

Essas atividades são úteis para estruturar a pesquisa, mas não devem ser entendidas como uma sequência rígida na qual o problema é completamente compreendido antes do desenvolvimento e nunca mais é revisitado.

A própria execução da pesquisa pode produzir novos conhecimentos que alterem a compreensão do problema ou da solução.

Isso aparece claramente na tese. Ao descrever a primeira Learning Iteration, o texto registra:

> “As result, we created the first version of Immigrant.”

Entretanto, o estudo não terminou apenas com a criação de uma primeira versão do artefato. A investigação produziu uma nova necessidade:

> “The first learning iteration raised a demand to investigate how to understand the way an organization works...”

Esse trecho é importante porque mostra uma característica central da DSR. O desenvolvimento de uma solução produziu conhecimento que revelou uma nova parte do problema.

A pesquisa então continuou:

> “This prompted the second learning iteration...”

O estudante deve procurar explicitar esse tipo de relação. Sempre que uma investigação ou versão do artefato produzir uma nova necessidade de conhecimento, essa transição deve aparecer claramente no texto.

---

## 4. Relevance Cycle, Design Cycle e Rigor Cycle

O template utiliza também os três ciclos apresentados por Hevner (2007): **Relevance Cycle, Design Cycle e Rigor Cycle**.

A referência pode ser consultada em:

https://www.uni-kassel.de/fb07/index.php?eID=dumpFile&f=4898&t=f&token=930ca01adbdcc1e7f24d1a3d3a1f0a17422df86e

O Relevance Cycle conecta a pesquisa ao ambiente no qual existe o problema. O Rigor Cycle conecta a investigação à base de conhecimento científico. O Design Cycle representa a construção e avaliação iterativa do artefato.

Esses ciclos não devem existir apenas como um desenho na seção metodológica. Eles precisam ser perceptíveis na narrativa da dissertação.

Um trecho da tese sintetiza bem essa interação:

> “Each learning iteration helped us better understand the target problem and gradually evaluate design choices we have made to develop Immigrant.”

Essa frase é particularmente importante para compreender a lógica da pesquisa.

A expressão **“better understand the target problem”** mostra que as iterações ajudaram a aprofundar a compreensão do problema, característica associada ao Relevance Cycle.

Já a expressão **“evaluate design choices”** mostra que essas mesmas iterações produziram evidências sobre decisões tomadas durante a construção do artefato, característica associada ao Design Cycle.

Ao mesmo tempo, essas decisões são fundamentadas por conhecimentos existentes, estabelecendo a relação com o Rigor Cycle.

O aluno deve procurar fazer com que esses três movimentos sejam identificáveis em sua própria narrativa.

---

## 5. Relevance Cycle: começar pelo problema, e não pela tecnologia

No Relevance Cycle, o pesquisador deve caracterizar o ambiente no qual o problema existe.

Isso significa explicar o contexto, as pessoas ou organizações afetadas, as necessidades existentes e as dificuldades que justificam uma intervenção.

O estudante deve evitar começar pela tecnologia.

Uma introdução como “este trabalho desenvolve uma aplicação utilizando inteligência artificial” ainda não explica por que aquela aplicação precisa existir.

Na tese, a construção do problema começa muito antes da apresentação de Immigrant ou The Band.

O texto inicialmente estabelece uma necessidade relacionada à evolução do desenvolvimento de software:

> “Hence, organizations should evolve to continuous and data-driven development in a Continuous Software Engineering (CSE) approach.”

Depois, o texto mostra uma situação encontrada nas organizações:

> “Software organizations often use different applications to support different aspects of software development.”

Em seguida, apresenta-se o problema:

> “However, many of them do not use data present in the applications to support data-driven software development.”

A argumentação então aprofunda uma possível causa:

> “One of the reasons for that is the difficulty in accessing, integrating, analyzing, and viewing data handled by heterogeneous applications.”

Observe a construção da narrativa.

O texto não começa afirmando “vamos utilizar ontologias”.

Primeiro apresenta o contexto. Depois mostra uma situação problemática. Em seguida identifica uma dificuldade mais específica que impede ou dificulta aquilo que as organizações precisam fazer.

Somente depois é introduzido o conhecimento tecnológico relacionado à solução.

O estudante deve procurar construir o problema de sua dissertação da mesma forma: **contexto → necessidade → dificuldade → problema → possibilidade de intervenção**.

---

## 6. Relacionando o problema ao conhecimento existente

Depois de apresentar o problema, a literatura deve ajudar a compreendê-lo e indicar possibilidades de solução.

Na tese, depois de discutir a dificuldade de integrar dados de aplicações heterogêneas, o texto apresenta uma consequência:

> “This difficulty can result in semantic conflicts whenever divergent interpretations are given to the same information item...”

Logo depois, a literatura ajuda a indicar uma possibilidade:

> “Ontologies can be used to deal with these issues in semantic integration initiatives.”

E o texto explica por quê:

> “They establish a common conceptualization about the applications subject domains and support communication and integration.”

Esse é um bom exemplo de interação entre Relevance Cycle e Rigor Cycle.

O problema veio do ambiente. A literatura oferece conhecimento que ajuda a compreender o problema e a orientar uma possível solução.

O aluno deve procurar evitar duas partes completamente desconectadas da dissertação, uma denominada “fundamentação teórica” e outra denominada “desenvolvimento da solução”.

A fundamentação deve influenciar aquilo que será construído.

---

## 7. Dos problemas aos objetivos da solução

Depois de caracterizar o problema, o estudante deve estabelecer aquilo que uma solução deveria ser capaz de realizar.

Os objetivos da solução devem ser formulados antes dos detalhes tecnológicos.

Se o problema é a dificuldade de integrar dados provenientes de aplicações heterogêneas, um objetivo da solução pode ser fornecer uma forma de integração capaz de preservar ou atribuir significado aos dados.

A tese apresenta uma formulação bastante clara da intervenção proposta:

> “We propose to use networked ontologies to establish an integration architecture and assign semantics to application data.”

O texto ainda acrescenta outro princípio importante:

> “Moreover, we advocate that integrated data should be aligned to the organization information needs.”

Esse segundo trecho é especialmente interessante porque mostra que a solução não deveria simplesmente integrar tudo o que fosse tecnicamente possível.

A integração deveria ser orientada pelas necessidades de informação da organização.

Isso demonstra como a compreensão do problema produz características que posteriormente influenciam o design.

Ao escrever sua dissertação, o estudante deve procurar deixar clara essa passagem entre **o problema observado** e **aquilo que uma solução precisa oferecer**.

---

## 8. Requisitos podem surgir durante a própria pesquisa

Em uma DSR, nem todos os requisitos precisam necessariamente ser conhecidos no começo da pesquisa.

Novos requisitos podem surgir à medida que o pesquisador obtém evidências.

Isso aparece claramente na primeira Learning Iteration da tese.

Inicialmente, a investigação concentrou-se no uso de ontologias para integrar dados provenientes de diferentes aplicações.

Depois do estudo, entretanto, surgiu um novo aprendizado:

> “With this study, we confirmed in practice the necessity of properly identifying the organization’s information needs to guide data integration...”

Além disso:

> “we noticed that organizations may face difficulties in identifying such information.”

Esses resultados produziram uma nova necessidade para o design da solução.

Não bastava integrar dados.

Era necessário também ajudar a organização a identificar quais informações eram relevantes.

O texto continua:

> “we observed that understanding how the organization works and the CSE practices it adopts is useful to identify the organization’s information needs.”

Esse aprendizado levou a outra investigação.

O estudante deve observar que aqui existe uma cadeia de rastreabilidade:

**estudo → evidência → aprendizado → nova necessidade → nova investigação → evolução do artefato.**

Essa cadeia deve aparecer sempre que novos requisitos forem identificados durante a dissertação.

---

## 9. Rigor Cycle: conhecimento científico deve orientar decisões

O Rigor Cycle estabelece a ligação entre a pesquisa e a base de conhecimento existente.

Isso significa que as decisões tomadas durante o desenvolvimento do artefato não devem ser justificadas apenas por preferência pessoal ou conveniência técnica.

A literatura pode indicar conceitos, teorias, métodos, arquiteturas ou princípios que ajudem a construir a solução.

Na tese, por exemplo, a decisão de utilizar ontologias é relacionada ao problema de integração semântica:

> “Ontologies can be used to deal with these issues in semantic integration initiatives.”

Posteriormente, o desenvolvimento evolui para uma solução baseada em redes de ontologias e Federated Information Systems:

> “we evolved the software solution [...] to a data integration solution based on the concepts of ontology network and Federated Information System (FIS), called The Band.”

Observe que esses conceitos não aparecem apenas como revisão bibliográfica. Eles são utilizados para tomar decisões concretas sobre a construção do artefato.

Ao escrever, o estudante deve procurar responder: **qual conhecimento existente justifica ou influencia esta decisão de design?**

---

## 10. Design Cycle: construir, avaliar, aprender e evoluir

No Design Cycle, o artefato é progressivamente construído e avaliado.

A escrita dessa seção não deve se transformar em um diário de programação.

O interesse científico está principalmente nas decisões relevantes.

A tese apresenta de maneira bastante clara que o artefato foi sendo modificado durante a pesquisa:

> “Thus, we evolved the software solution proposed in (SANTOS et al., 2021) to a data integration solution...”

Depois, explica uma característica da nova solução:

> “The Band leverages Continuum as the basis to build reusable and autonomous software components...”

E apresenta o resultado pretendido dessa decisão:

> “As a result, data from different applications can be integrated and visualized to provide meaningful information...”

Essa sequência é útil como modelo de escrita.

O estudante deve procurar explicar **o que mudou, por que mudou e qual resultado a decisão pretende produzir**.

---

## 11. Learning Iterations como mecanismo de evolução da DSR

O template utiliza o conceito de **Learning Iterations**, conforme discutido por Barcellos et al. (2022).

A referência está disponível em:

https://sol.sbc.org.br/index.php/sbqs/article/view/23302

e em:

https://dl.acm.org/doi/abs/10.1145/3571473.3571474

Uma Learning Iteration representa uma investigação realizada porque existe algo que precisa ser aprendido para que a pesquisa avance.

A própria tese resume a função dessas iterações:

> “Each learning iteration helped us better understand the target problem and gradually evaluate design choices...”

Essa frase deve ser tomada como referência conceitual pelo estudante.

Uma Learning Iteration não precisa existir apenas para avaliar o artefato final.

Ela pode ajudar a compreender o problema, investigar uma hipótese, avaliar uma decisão, descobrir requisitos ou testar uma nova versão da solução.

---

## 12. Uma Learning Iteration deve surgir de uma necessidade de conhecimento

Antes de explicar participantes, entrevistas, questionários ou procedimentos, o estudante deve explicar **por que aquele estudo foi necessário**.

A transição entre a primeira e a segunda Learning Iteration da tese fornece um exemplo muito claro.

Primeiro é apresentado o resultado da primeira iteração:

> “As result, we created the first version of Immigrant.”

Depois surge uma nova necessidade:

> “The first learning iteration raised a demand to investigate how to understand the way an organization works...”

E finalmente aparece a consequência:

> “This prompted the second learning iteration...”

Essa é uma excelente estrutura para o estudante utilizar.

Em termos genéricos:

**“O estudo anterior produziu X. Entretanto, identificamos que ainda era necessário compreender Y. Por esse motivo, realizamos uma nova Learning Iteration.”**

Esse tipo de escrita cria continuidade entre os estudos.

---

## 13. Uma limitação pode provocar uma nova Learning Iteration

Uma Learning Iteration também pode surgir quando uma solução apresenta bons resultados, mas revela uma limitação.

Isso acontece na transição entre California e Zeppelin.

A tese reconhece inicialmente que California pode ser útil. Entretanto:

> “Although California can be useful in this matter, it may demand knowledge and time to be applied.”

Essa observação tem uma consequência direta:

> “Thus, we performed the third learning iteration...”

Essa terceira iteração investigou Zeppelin em cinco organizações:

> “a multiple case study with five Brazilian software organizations to evaluate a diagnostic instrument, called Zeppelin...”

O estudante deve observar que a limitação da solução anterior não foi apresentada apenas como uma fraqueza.

Ela se tornou uma **nova necessidade de pesquisa**.

Essa é uma característica muito valiosa da DSR.

---

## 14. Execução e resultados da Learning Iteration

Depois de explicar a necessidade de conhecimento, o estudante deve apresentar como pretende obtê-lo.

Nesse ponto entram o desenho do estudo, o contexto, participantes, instrumentos, procedimentos de coleta e métodos de análise.

A escolha do método deve ser coerente com aquilo que se deseja aprender.

Depois da execução, os resultados devem ser descritos.

Entretanto, uma Learning Iteration não deve terminar apenas com “Execution and Results”.

A dissertação utilizada como modelo cria deliberadamente uma seção adicional intitulada:

> “What did we learn?”

Essa seção tem uma função metodológica importante: separar **resultado empírico** de **aprendizado produzido para a DSR**.

---

## 15. What did we learn?: tornar o aprendizado explícito

Depois de apresentar os resultados, o estudante deve explicar explicitamente o que aprendeu.

A tese faz isso de forma direta.

Na aplicação final de Immigrant, após utilizar Zeppelin e California, o texto afirma:

> “We learned that by doing that it was possible to understand the organization faster than when California was applied alone...”

Observe a diferença entre descrever a atividade e descrever o aprendizado.

“Utilizamos Zeppelin e California” é uma descrição da execução.

“Foi possível compreender a organização mais rapidamente” é conhecimento produzido a partir da experiência.

O estudante deve procurar fazer essa passagem em todas as Learning Iterations.

A pergunta fundamental é:

**O que sabemos depois deste estudo que não sabíamos antes dele?**

---

## 16. O aprendizado deve produzir consequências para o artefato

Uma Learning Iteration torna-se ainda mais relevante quando o conhecimento produzido influencia diretamente o design.

Na avaliação de Zeppelin, a tese relata que algumas respostas poderiam decorrer de interpretações incorretas das afirmações do instrumento.

O texto afirma:

> “people can misunderstand the statements and provide incorrect answers.”

Em seguida, uma evidência é apresentada:

> “conducting an interview helps understand how CSE practices have been performed in the organization...”

Finalmente, aparece uma consequência para o artefato:

> “This shows that Zeppelin can be improved to better support its users to properly understand the statements...”

Esse trecho é um excelente modelo para o aluno porque mostra toda a sequência:

**problema observado → evidência → aprendizado → melhoria do artefato.**

Quando possível, a seção “What did we learn?” deve terminar mostrando qual consequência o conhecimento produzido teve sobre a pesquisa.

---

## 17. Resultados inesperados também são conhecimento

Nem toda Learning Iteration precisa confirmar as expectativas iniciais.

Resultados negativos, restrições e dependências também podem ser contribuições importantes.

Durante a aplicação de The Band, por exemplo, a tese identifica:

> “The Band data integration is sensitive to the quality of application data.”

Depois, o aprendizado é ampliado:

> “quality of such data is directly related to the quality of the process that produce it...”

E surge uma implicação:

> “to improve the quality of data integration it is necessary to improve the development process...”

Observe que a descoberta de uma dependência não é escondida.

Ela se torna conhecimento sobre as condições necessárias para que o artefato produza resultados adequados.

O aluno deve tratar limitações dessa maneira sempre que possível.

---

## 18. Evolução do artefato por meio das Learning Iterations

Ao final de várias Learning Iterations, o estudante deve ser capaz de explicar como o artefato chegou à sua forma atual.

Na tese, essa evolução é sintetizada explicitamente:

> “At the end, we reached the first version of The Band...”

Além disso:

> “California and Zeppelin were incorporated into Immigrant’s current version...”

Essas incorporações não aparecem como decisões arbitrárias.

Elas são consequências dos aprendizados obtidos durante as iterações anteriores.

Em outra parte da tese, essa evolução também aparece quando é explicado que a primeira solução não cobria determinados processos:

> “data from applications addressing certain CSE processes [...] was not included in the first version of the proposed solution.”

A consequência foi:

> “we decided to expand the scope of integrated data using an ontology network.”

Esse é outro padrão importante:

**limitação identificada → decisão de design → evolução do artefato.**

---

## 19. Demonstração do artefato

Depois de construir uma versão utilizável do artefato, o estudante deve demonstrar que ela pode ser aplicada ao problema para o qual foi concebida.

A demonstração deve deixar claro o contexto de utilização, os elementos do artefato utilizados e o que se pretende demonstrar.

Na aplicação final descrita na tese, o processo é resumido da seguinte maneira:

> “initially, Zeppelin was used to gain a comprehensive understanding of the current CSE practices implemented in the organization.”

Em seguida:

> “we employed California to pinpoint specific information requirements...”

E finalmente:

> “we used The Band to deliver cohesive and integrated data to meet the identified information needs.”

Esse trecho é interessante porque mostra o artefato funcionando como uma composição de elementos, cada um cumprindo uma função na solução do problema.

O estudante deve procurar fornecer uma descrição semelhante quando demonstrar seu artefato.

---

## 20. Avaliação

A avaliação deve produzir evidências relacionadas aos objetivos da solução.

Ela não deve ser limitada a afirmações como “o sistema funcionou” ou “os usuários gostaram”.

Na tese, a Learning Iteration final possui um objetivo claro:

> “to evaluate Immigrant in a real context to verify whether it is useful and whether its use is feasible.”

Essa frase é um bom exemplo porque apresenta explicitamente **o que se pretende avaliar**.

Posteriormente, a conclusão é coerente com esse objetivo:

> “Immigrant was considered useful by the director to enable data-driven software development.”

Entretanto, a dissertação não transforma essa percepção em uma afirmação universal.

Isso nos leva às ameaças à validade.

---

## 21. Ameaças à validade e força das evidências

Uma avaliação científica precisa apresentar também os limites das evidências produzidas.

A tese reconhece, por exemplo:

> “the main threat is that Immigrant was applied in only one organization...”

Também reconhece que:

> “the organization profile is very specific...”

Além disso, o papel do próprio pesquisador é tratado como uma ameaça:

> “the main threat is the influence of the author in the study...”

Diante dessas limitações, a conclusão é cuidadosamente delimitada:

> “the obtained results must be considered preliminary evidence that needs other studies to be confirmed.”

Esse é um importante modelo de escrita acadêmica.

O aluno não precisa demonstrar que seu artefato funciona universalmente.

Precisa apresentar claramente **qual evidência possui, em qual contexto ela foi produzida e até onde essa evidência permite chegar**.

---

## 22. Learning Iteration final

A avaliação final também pode ser organizada como uma Learning Iteration.

Isso significa que ela não deve procurar apenas responder se o artefato “funciona”.

Ela deve procurar produzir novos conhecimentos sobre sua utilização.

Na tese, a quarta iteração é descrita da seguinte maneira:

> “To evaluate Immigrant’s usefulness and practical feasibility, we performed the fourth learning iteration...”

O artefato foi então aplicado utilizando seus diferentes componentes:

> “Zeppelin and California were used to help identify information needs and The Band was used to provide integrated data...”

A conclusão é adequadamente cuidadosa:

> “The results provide preliminary evidence that Immigrant is useful and its use in a practical setting is feasible.”

Observe novamente a escolha da expressão **“preliminary evidence”**.

Isso comunica aquilo que foi aprendido sem extrapolar a força do estudo realizado.

---

## 23. Como sintetizar todas as Learning Iterations

Ao final da dissertação, o estudante deve reconstruir a história completa da evolução da pesquisa.

A tese faz isso na seção de síntese.

Primeiro retoma a primeira investigação:

> “In the first learning iteration we explored the use of an ontology on agile development with Scrum to integrate software development data...”

Depois registra o aprendizado:

> “we confirmed in practice the necessity of properly identifying the organization’s information needs to guide data integration...”

Esse conhecimento leva à próxima investigação:

> “Thus, we performed the second learning iteration...”

A segunda investigação revela uma limitação:

> “it may demand knowledge and time to be applied.”

Isso provoca a terceira:

> “Thus, we performed the third learning iteration...”

Finalmente, uma quarta Learning Iteration é utilizada para avaliar o artefato em um contexto real.

Essa sequência é provavelmente uma das partes mais importantes para o aluno compreender.

A dissertação não contém apenas quatro estudos.

Ela contém uma **cadeia de aprendizado**.

---

## 24. Contribuição científica

No final do trabalho, o estudante deve distinguir aquilo que foi construído daquilo que foi aprendido.

O artefato é uma contribuição importante, mas não necessariamente a única contribuição.

Na síntese da tese, por exemplo, Immigrant é apresentado como uma abordagem composta por California, Zeppelin e The Band:

> “Immigrant considers the organization’s information needs and the available data to provide meaningful data integration to support CSE.”

Os diferentes componentes cumprem papéis específicos:

> “California and Zeppelin are used to understand the organization and identify its information needs...”

Enquanto:

> “The Band is used to provide ontology-based integrated data to meet the identified information needs.”

Entretanto, a contribuição científica não está apenas na existência desses artefatos.

Está também no conhecimento produzido sobre como identificar necessidades de informação, como combinar compreensão organizacional e integração de dados e quais condições interferem na aplicação da abordagem.

O estudante deve fazer essa distinção em sua dissertação.

Uma pergunta útil é:

**Se o software desenvolvido deixasse de existir amanhã, que conhecimento produzido durante esta pesquisa ainda poderia ser utilizado por outros pesquisadores ou profissionais?**

A resposta ajuda a identificar a contribuição científica.

---

## 25. A narrativa que o estudante deve produzir

Quando a dissertação estiver concluída, o leitor deve ser capaz de reconstruir sua lógica.

Na tese utilizada como referência, essa lógica pode ser resumida da seguinte forma.

A pesquisa identificou uma dificuldade relacionada ao uso de dados distribuídos em diferentes aplicações.

A primeira Learning Iteration investigou uma solução baseada em ontologias e produziu uma primeira versão do artefato.

Essa investigação revelou a necessidade de compreender melhor as necessidades de informação das organizações.

Essa necessidade provocou a segunda Learning Iteration e o desenvolvimento de California.

A aplicação de California mostrou benefícios, mas também revelou dificuldades relacionadas ao conhecimento e ao tempo necessários.

Essa limitação provocou uma terceira Learning Iteration e o desenvolvimento de Zeppelin.

Paralelamente, novas necessidades relacionadas à cobertura de diferentes processos levaram à evolução da integração e à criação de The Band.

Finalmente, uma quarta Learning Iteration reuniu os componentes da abordagem e produziu evidências sobre sua utilidade e viabilidade prática.

A própria tese resume a função desse processo:

> “Each learning iteration helped us better understand the target problem and gradually evaluate design choices...”

Essa é a narrativa que este template pretende estimular.

Não apenas:

**“Eu desenvolvi um artefato e depois o avaliei.”**

Mas:

**“Eu tinha um problema. Para resolvê-lo, precisava aprender. Cada investigação produziu evidências. Essas evidências modificaram minha compreensão do problema e minhas decisões de design. O artefato evoluiu como consequência desse aprendizado.”**

---

## 26. Referências essenciais

Para os fundamentos de Design Science Research, recomenda-se:

**Hevner, A. R.; March, S. T.; Park, J.; Ram, S. (2004). Design Science in Information Systems Research. MIS Quarterly.**

https://misq.umn.edu/misq/article/28/1/75/261/Design-Science-in-Information-Systems-Research1

Para compreender os ciclos de Relevância, Design e Rigor:

**Hevner, A. R. (2007). A Three Cycle View of Design Science Research.**

https://www.uni-kassel.de/fb07/index.php?eID=dumpFile&f=4898&t=f&token=930ca01adbdcc1e7f24d1a3d3a1f0a17422df86e

Para a Design Science Research Methodology:

**Peffers, K.; Tuunanen, T.; Rothenberger, M. A.; Chatterjee, S. A Design Science Research Methodology for Information Systems Research.**

https://www.tandfonline.com/doi/abs/10.2753/MIS0742-1222240302

Para o conceito de Learning Iterations:

**Barcellos et al. (2022). Organizing Empirical Studies as Learning Iterations in Design Science Research Projects.**

https://sol.sbc.org.br/index.php/sbqs/article/view/23302

https://dl.acm.org/doi/abs/10.1145/3571473.3571474

---

## 27. Como revisar sua própria escrita

Ao terminar cada parte do template, o estudante deve verificar se consegue explicar a conexão entre aquilo que acabou de escrever e aquilo que vem em seguida.

Depois do problema, deve ser possível responder: **o que precisamos compreender ou resolver?**

Depois de um requisito: **de onde surgiu esse requisito?**

Depois de uma decisão de design: **qual problema, evidência ou conhecimento justifica essa decisão?**

Depois de uma Learning Iteration: **o que aprendemos?**

Depois de um aprendizado: **o que mudou na pesquisa por causa disso?**

Depois de uma avaliação: **quais evidências foram produzidas e até onde elas permitem concluir?**

E, ao final da dissertação: **o que sabemos agora que não sabíamos antes da realização desta pesquisa?**

A estrutura utilizada na tese fornece um exemplo particularmente simples dessa lógica:

> “The first learning iteration raised a demand...”

seguido de:

> “This prompted the second learning iteration...”

e, posteriormente:

> “Although California can be useful [...] it may demand knowledge and time...”

seguido de:

> “Thus, we performed the third learning iteration...”

Essas pequenas expressões — **“raised a demand”**, **“this prompted”**, **“we learned”**, **“thus, we performed”** — tornam explícita uma característica essencial da Design Science Research: **a pesquisa evolui porque aprende**.

Esse é o principal comportamento que o estudante deve procurar reproduzir ao preencher o template.
