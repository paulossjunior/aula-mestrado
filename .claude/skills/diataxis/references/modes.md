# Os quatro modos em detalhe

Índice:
- [Tutorial](#tutorial)
- [Guia prático (how-to)](#guia-prático-how-to)
- [Referência](#referência)
- [Explicação](#explicação)
- [Teste rápido de classificação](#teste-rápido-de-classificação)

---

## Tutorial

**Necessidade atendida:** "Sou novo aqui e quero adquirir competência fazendo algo."

O tutorial é uma **aula**, e a responsabilidade é sua, não do leitor. O leitor
iniciante não sabe o suficiente para tomar decisões, então o tutorial não
oferece escolhas: ele conduz. O objetivo real não é o artefato construído ao
final — é a confiança adquirida no caminho.

**Faça:**
- Garanta que funciona. Um tutorial que quebra no passo 7 destrói a confiança do iniciante, que assume que o erro é dele.
- Comece dizendo o que será construído e quanto tempo leva.
- Dê resultados visíveis cedo e com frequência ("você deve ver X na tela agora").
- Use "vamos" / "você vai": o professor acompanha.
- Seja concreto e específico. Nada de "escolha um banco de dados"; diga qual.
- Minimize a explicação. Uma frase de contexto, com link para a explicação completa.

**Não faça:**
- Não ofereça opções, alternativas ou "se preferir, pode usar Y".
- Não documente todos os parâmetros do comando usado.
- Não discuta decisões de arquitetura.
- Não presuma conhecimento não declarado nos pré-requisitos.

**Linguagem:** primeira pessoa do plural ou segunda pessoa, presente, imperativo suave. "Agora vamos criar o arquivo de configuração."

**Erro típico:** o autor, que é especialista, sente desconforto em omitir nuances e vai enchendo o tutorial de ressalvas. O iniciante afoga. Corte tudo que não for necessário para chegar ao fim.

---

## Guia prático (how-to)

**Necessidade atendida:** "Sei o que estou fazendo e preciso resolver este problema agora."

O guia prático é uma **receita** para um usuário competente com um objetivo real
no mundo. Ele não quer aprender — quer terminar a tarefa.

**Faça:**
- Nomeie pelo objetivo do usuário: "Como restaurar um backup", não "O comando restore".
- Assuma competência básica; pule o que o leitor já sabe.
- Trate do caso real, com suas condições: "se você usa proxy, adicione…".
- Aceite ramificações e alternativas — aqui elas ajudam, porque o contexto do leitor varia.
- Seja pragmático: sequência de ações, sem completude enciclopédica.

**Não faça:**
- Não ensine conceitos (link para explicação).
- Não descreva exaustivamente a ferramenta (link para referência).
- Não vire tutorial: nada de "vamos entender o que acabamos de fazer".

**Linguagem:** imperativa e condicional. "Rode X. Se o retorno for Y, faça Z."

**Erro típico:** confundir com tutorial. Teste: se o leitor-alvo já tem um problema concreto e um contexto próprio, é guia prático; se ele ainda não sabe o suficiente para ter um problema, é tutorial.

---

## Referência

**Necessidade atendida:** "Preciso conferir um detalhe enquanto trabalho."

A referência **descreve a máquina**. É consultada, nunca lida do início ao fim.
Sua virtude é ser austera, consistente e confiável.

**Faça:**
- Espelhe a estrutura do produto/código. Se o sistema tem módulos, a referência tem seções por módulo.
- Seja consistente: mesma ordem de campos, mesmo formato, sempre. A previsibilidade é o que permite consulta rápida.
- Descreva com neutralidade: tipos, valores padrão, limites, efeitos colaterais, exceções.
- Inclua exemplos curtos de uso — ilustram sem instruir.
- Mantenha próximo ao código (docstrings, geração automática) para não desatualizar.

**Não faça:**
- Não instrua nem explique. Sem "recomendamos", sem "para começar, faça".
- Não conte o histórico da decisão.

**Linguagem:** terceira pessoa, presente, descritiva. "`timeout` define o tempo máximo em segundos. Padrão: 30."

**Erro típico:** referência incompleta que vira "meio tutorial" nos pontos difíceis. Se um campo é complicado, descreva-o bem e linke um guia prático.

---

## Explicação

**Necessidade atendida:** "Quero entender por que isto é assim."

A explicação é **discussão**, lida longe do teclado. É o único modo onde
opinião, contexto histórico e comparação são bem-vindos.

**Faça:**
- Responda "por quê": motivos, restrições, trade-offs, alternativas descartadas.
- Dê contexto histórico e conexões com outras partes do sistema.
- Admita opiniões e limitações conhecidas do desenho atual.
- Trate de um tema, não de uma tarefa: "Sobre o modelo de permissões".

**Não faça:**
- Não dê passo a passo.
- Não vire referência com listas de parâmetros.

**Linguagem:** discursiva, com conectivos causais. "Isso acontece porque…", "a alternativa seria…, mas ela implica…".

**Erro típico:** ser esquecida. É o modo mais negligenciado e o que mais poupa tempo de manutenção futura — inclui as razões que ninguém mais lembra em seis meses.

---

## Teste rápido de classificação

Para cada trecho de texto, pergunte:

1. **O leitor está com as mãos no teclado?** Sim → tutorial ou guia. Não → referência ou explicação.
2. **O leitor tem um objetivo próprio e real?** Sim → guia ou referência. Não (está estudando) → tutorial ou explicação.

Cruze as respostas:

- mãos no teclado + estudando = **tutorial**
- mãos no teclado + objetivo real = **guia prático**
- pensando + objetivo real = **referência**
- pensando + estudando = **explicação**

Se um mesmo documento tem trechos que caem em quadrantes diferentes, ele está
misturado. Marque os trechos, decida o modo dominante e mova o resto.
