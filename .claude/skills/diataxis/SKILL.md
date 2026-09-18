---
name: diataxis
description: Aplica o framework Diátaxis (tutorial, guia prático/how-to, referência e explicação) para escrever, classificar, revisar e reorganizar documentação técnica. Use sempre que o usuário pedir para escrever ou melhorar documentação, docs, README, tutorial, guia de uso, manual, referência de API, onboarding, wiki ou "explicar como o sistema funciona" — e também quando a documentação existente estiver confusa, repetitiva, misturada ou difícil de navegar, mesmo que o usuário não cite o Diátaxis pelo nome. Serve tanto para repositórios de código (Claude Code, /docs, README) quanto para documentação institucional em chat. Use também para auditar um conjunto de documentos e propor uma estrutura nova.
---

# Diátaxis

Framework de Daniele Procida (https://diataxis.fr) para organizar documentação
técnica. A ideia central: documentação não é um bloco único — ela atende a
**quatro necessidades distintas** do usuário, e cada necessidade exige uma forma
de escrita diferente. Misturar as quatro no mesmo documento é a causa mais comum
de documentação ruim, porque um texto que tenta ensinar, instruir, descrever e
explicar ao mesmo tempo não faz nada disso bem.

## O mapa

Duas perguntas definem o modo:

1. O usuário está **agindo** (mãos na massa) ou **cogitando** (querendo entender)?
2. O usuário está **estudando** (adquirindo competência) ou **trabalhando** (aplicando competência num objetivo real)?

|                | Estudo (aquisição)                          | Trabalho (aplicação)                        |
| -------------- | ------------------------------------------- | ------------------------------------------- |
| **Ação**       | **Tutorial** — aprender fazendo             | **Guia prático** — resolver um problema real |
| **Cognição**   | **Explicação** — entender o porquê          | **Referência** — consultar a informação      |

Em uma linha cada:

- **Tutorial**: aula guiada. O usuário é iniciante, você conduz pela mão e garante que ele chegue a um resultado que funciona.
- **Guia prático (how-to)**: receita. O usuário já sabe o básico e tem um objetivo concreto ("como publicar um release").
- **Referência**: descrição austera da máquina. Parâmetros, endpoints, campos, comandos. Consultada, não lida.
- **Explicação**: discussão. Por que existe, quais alternativas foram descartadas, como se conecta com o resto.

## Fluxo de trabalho

### 1. Identifique o modo antes de escrever uma linha

Faça as duas perguntas do mapa. Se a resposta for "depende, tem um pouco de
cada", isso não é um documento — são vários. Separe.

Quando o pedido do usuário for ambíguo ("escreve a documentação do módulo X"),
não escolha por conta própria em silêncio: diga qual modo você vai escrever e
por quê, ou ofereça os quatro documentos separados. Na maioria dos projetos
pequenos, comece por **guia prático + referência** — são os que mais doem
quando faltam.

### 2. Escreva puro

Cada documento obedece às regras do seu modo, e a disciplina está principalmente
no que você **não** escreve:

- Tutorial **não** explica alternativas nem discute design. No máximo, uma frase e um link.
- Guia prático **não** ensina conceitos básicos e **não** documenta todas as opções.
- Referência **não** instrui e **não** conta história. Descreve.
- Explicação **não** dá passo a passo.

Quando sentir vontade de acrescentar algo fora do modo, transforme em link para
o documento do modo certo. Isso é o mecanismo principal do Diátaxis: o conteúdo
extra não é apagado, é realocado.

Leia `references/modes.md` antes de redigir — ele traz, para cada modo, a
checklist de qualidade, os marcadores de linguagem (tempo verbal, pessoa,
imperativo) e os erros típicos. Use `assets/templates.md` para o esqueleto de
cada tipo.

### 3. Nomeie pelo modo

O título já deve avisar o leitor em que território ele está:

| Modo         | Padrão de título                                     |
| ------------ | ---------------------------------------------------- |
| Tutorial     | "Primeiros passos com X", "Criando seu primeiro Y"    |
| Guia prático | "Como fazer X", "Como configurar Y para Z"            |
| Referência   | "Referência da API de X", "Opções de configuração"    |
| Explicação   | "Sobre X", "Por que usamos Y", "Arquitetura de Z"     |

Na navegação, agrupe por esses quatro rótulos. O leitor aprende o mapa em uma
visita e passa a se localizar sozinho.

### 4. Audite o que já existe

Quando o pedido for melhorar documentação existente, siga
`references/audit.md`: inventário → classificação página a página → detecção de
mistura → estrutura-alvo → migração incremental.

## Regras de ouro

**Diátaxis é bússola, não formulário.** A pergunta útil não é "em qual das
quatro caixas isto cabe?", mas "dado onde este texto está agora, qual é o
próximo passo que o melhora?". Se um documento é 80% guia prático com um bloco
de explicação encravado, mover esse bloco já é uma vitória — não é preciso
reescrever o conjunto.

**Trabalhe em passos pequenos e contínuos.** Nunca proponha uma reestruturação
de tudo-ou-nada como única saída. Documentação melhora por iteração: uma
correção, depois outra. Ofereça sempre um primeiro passo que caiba em uma sessão.

**Qualidade tem duas camadas.** A funcional (está correto? está completo? os
comandos rodam?) e a profunda (um tutorial *parece* um tutorial? o leitor
iniciante consegue seguir sem travar?). A segunda só se verifica lendo com os
olhos do usuário-alvo — faça isso explicitamente ao revisar.

**Escreva no idioma do projeto.** Siga o idioma da documentação ou do código
existente; na ausência de sinal, use o idioma em que o usuário está falando.
Mantenha termos técnicos consagrados em inglês quando traduzi-los atrapalhar.

## Sinais de que algo está errado

Use como gatilho de revisão ao ler qualquer documento:

- Um "tutorial" que começa com uma seção de arquitetura → explicação disfarçada.
- Um guia prático que explica o que é um contêiner → ensino no lugar errado.
- Uma referência com "agora execute" → instrução no lugar errado.
- Um README de 900 linhas → os quatro modos fundidos; é o candidato clássico a divisão.
- Conteúdo duplicado em três páginas → falta de referência única para linkar.
- Usuário reclamando que "tem documentação, mas não acho nada" → problema de estrutura, não de volume.
