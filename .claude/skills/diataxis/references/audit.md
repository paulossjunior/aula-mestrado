# Auditoria de documentação existente

Use quando já existe documentação e o pedido é melhorar, reorganizar, encontrar
buracos ou "colocar ordem". O princípio que rege tudo aqui: **melhoria
incremental**. Entregue valor a cada passo, nunca um plano de reescrita total
como única opção.

## 1. Inventário

Liste o que existe antes de julgar. Em repositório:

```bash
find . -name "*.md" -o -name "*.rst" -o -name "*.txt" | grep -vi node_modules | sort
wc -l $(find ./docs README.md -name "*.md" 2>/dev/null)
```

Inclua também o que não é arquivo: wiki, planilhas, slides de treinamento,
threads que viraram referência informal. Pergunte ao usuário onde mais mora
conhecimento do projeto.

## 2. Classificação

Monte uma tabela — um documento (ou seção grande) por linha:

| Documento | Modo dominante | Modos intrusos | Público | Estado |
| --------- | -------------- | -------------- | ------- | ------ |
| README.md | guia prático | tutorial, referência, explicação | novato + operador | misturado |
| api.md | referência | — | dev | ok, desatualizado |

"Modos intrusos" é a coluna mais importante: é ela que gera as ações.

## 3. Diagnóstico

Procure os padrões recorrentes:

- **README enciclopédico** — acumula os quatro modos. Ação: manter no README uma porta de entrada curta (o que é, instalação mínima, links para os quatro territórios) e extrair o resto.
- **Ausência de tutorial** — o projeto tem guias e referência, mas ninguém consegue começar. Sintoma: gente pedindo ajuda no chat para os mesmos primeiros passos.
- **Ausência de explicação** — decisões sem registro; discussões se repetem a cada semestre.
- **Referência gerada só parcialmente** — metade dos parâmetros documentados no código, metade em prosa desatualizada.
- **Duplicação** — a mesma instrução em três lugares, divergindo. Ação: eleger a fonte única e transformar as outras em links.
- **Guias sem nome de objetivo** — títulos que descrevem a ferramenta em vez da tarefa; o leitor não encontra pela busca.

## 4. Estrutura-alvo

Proponha uma árvore explícita, agrupada pelos quatro modos:

```
docs/
├── index.md                 # porta de entrada, aponta para os quatro
├── tutoriais/
│   └── primeiros-passos.md
├── guias/
│   ├── como-publicar-um-release.md
│   └── como-restaurar-um-backup.md
├── referencia/
│   ├── cli.md
│   └── configuracao.md
└── explicacoes/
    ├── arquitetura.md
    └── por-que-escolhemos-x.md
```

Em projetos pequenos, quatro arquivos no lugar de quatro pastas já resolvem.
Não imponha cerimônia maior que o projeto.

## 5. Plano incremental

Ordene as ações por dor resolvida por esforço gasto. Uma ordem que costuma
funcionar:

1. Criar o índice/porta de entrada com os quatro rótulos (barato, resolve navegação na hora).
2. Extrair a referência para junto do código (impede desatualização futura).
3. Escrever o tutorial de primeiros passos que falta (reduz suporte repetido).
4. Quebrar o README, movendo blocos já classificados.
5. Escrever as explicações pendentes (registro de decisões).

Apresente isso como lista numerada com estimativa de esforço e diga qual é o
primeiro passo recomendado. Ofereça executar só esse primeiro passo agora.

## 6. Migração sem quebrar links

- Mantenha redirecionamentos ou stubs nos caminhos antigos quando a documentação for publicada na web.
- Ao mover conteúdo, faça commits pequenos e separados de conteúdo movido vs. conteúdo reescrito — a revisão fica possível.
- Depois de mover, releia cada documento resultante pela checklist do modo em `modes.md` e corte o que sobrou do modo antigo.

## Formato do relatório de auditoria

Ao entregar a auditoria, use esta estrutura:

```
## Panorama
(2–4 frases: o que existe, para quem serve, qual o problema central)

## Classificação
(tabela documento × modo × modos intrusos)

## Problemas encontrados
(lista, do mais custoso ao menos custoso, com evidência concreta —
 cite arquivo e trecho)

## Estrutura proposta
(árvore de arquivos)

## Plano incremental
(passos numerados, esforço estimado, primeiro passo destacado)
```
