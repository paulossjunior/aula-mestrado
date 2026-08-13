# Quickstart: validar o guia DSR

**Feature**: 002-guia-dsr · **Date**: 2026-08-13

Como confirmar que a entrega faz o que a especificação promete. Cada bloco aponta o
critério que verifica.

## Pré-requisitos

```sh
npm install       # Node 20+
```

## Construir

```sh
npm run check     # tipos e schema das aulas
npm run build     # gera dist/
```

**Esperado**: `0 errors`, e **26 páginas** construídas — as 25 de antes mais `/dsr`.

## Servir sob o subcaminho do Pages

A rota real inclui `/aula-mestrado`, e servir a raiz esconde erros de caminho base:

```sh
mkdir -p /tmp/srv && ln -sfn "$PWD/dist" /tmp/srv/aula-mestrado
npx serve /tmp/srv -l 4500
# abre em http://localhost:4500/aula-mestrado/dsr
```

## O que conferir

### Conteúdo completo — SC-002

```sh
curl -s localhost:4500/aula-mestrado/dsr | grep -c 'id="parte-'   # 9
curl -s localhost:4500/aula-mestrado/dsr | grep -c 'id="elo-'     # 11
```

As nove partes e os onze elos precisam estar no HTML. Se faltar, faltou conteúdo no
JSON — não é problema de estilo.

### Referências — SC-003

Cada uma com autores, ano, título, papel e link. Os quatro endereços foram verificados
em `contracts/referencias.md`; para reconferir:

```sh
for u in $(curl -s localhost:4500/aula-mestrado/dsr \
            | grep -oE 'https://[^"]+' | grep -vE 'ifes|github|arxiv' | sort -u); do
  printf '%s %s\n' "$(curl -s -o /dev/null -w '%{http_code}' -L --max-time 20 -A Mozilla "$u")" "$u"
done
```

**Esperado**: 200 nos quatro. Um 403 aqui significa que o endereço primário voltou a
apontar para paywall — corrigir, porque o aluno não deve bater em muro.

### Template para download — SC-008

```sh
curl -s -o /tmp/t.zip -w '%{http_code}\n' localhost:4500/aula-mestrado/dsr/modelo_DSR.zip
cmp /tmp/t.zip fontes/dsr/modelo_DSR.zip && echo "idêntico ao original"
unzip -l /tmp/t.zip | tail -3      # 14 arquivos
```

**Esperado**: 200, `idêntico ao original`, 14 arquivos.

### Caminho até o guia — SC-004

Do menu, em qualquer página, e do material de apoio da Aula 02:

```sh
curl -s localhost:4500/aula-mestrado/ | grep -c '/aula-mestrado/dsr'       # ≥ 1
curl -s localhost:4500/aula-mestrado/aulas/02 | grep -c '/aula-mestrado/dsr'  # ≥ 1
```

### Sem JavaScript — SC-006

No navegador, desligar o JS e recarregar `/dsr`: todo o texto continua visível. Ou:

```sh
grep -c '<script' dist/dsr/index.html    # 0
```

### Sem rolagem horizontal — SC-005

Em 320, 375, 861 e 1280 pixels, `document.documentElement.scrollWidth` não pode passar
de `window.innerWidth`. O script usado nas entregas anteriores serve; o que importa é
que **a página** não role — um contêiner largo rolando dentro de si é o comportamento
correto, não um defeito.

### Nada quebrado no resto do site

```sh
node /tmp/crawl.mjs               # links, âncoras e imagens das 26 páginas
node scripts/conferir-labs.mjs    # os laboratórios continuam com data
```

### Conteúdo em arquivo, não em código — SC-007

```sh
grep -c 'Learning Iteration\|ciclo de relevância' src/pages/dsr.astro   # 0
```

Zero significa que o `.astro` não guarda texto do guia. Se der diferente de zero, o
princípio I da constituição foi violado e a frase precisa migrar para o JSON.

## Fidelidade à fonte — FR-011

Não é automatizável, e por isso é o item que exige leitura: cada frase de `espera` e
`evitar` no JSON tem de ter origem localizável em `fontes/dsr/guideline.md`. As três
omissões deliberadas — o link `sandbox:`, o parágrafo sobre empacotar o guia no ZIP e a
moldura conversacional — estão registradas em `research.md` R2.
