# Recortes dos corpora, e o que cada página usa

O corpus foi revisado várias vezes. Cada rodada elevou as contagens, e nem toda
página acompanhou na mesma hora — porque só se atualiza o que tem dado publicado.
Esta nota registra qual recorte sustenta o quê, para que ninguém cite um número
sem saber de onde ele vem.

| Recorte | Fases | Secundários | Sedes | Onde vale |
|---|---|---|---|---|
| **Corrente** | 12 | 236 | 338 | Codebook, dimensão de segurança, Aula 01, home |
| Anterior | 11 | 171 | 321 | Tabelas de distribuição por fase e ano, e as duas figuras do mapeamento |
| Mais antigo | 8 | 157 | 106 | Corpus navegável no fim do mapeamento, preso aos CSV |

## Por que as tabelas do mapeamento não acompanharam

A distribuição por fase **e ano** do recorte de 236 não foi publicada. O codebook
traz o total por fase, que é o que permitiu atualizar as contagens; a repartição
por ano, a de grau de agência e a de tipos de estudo continuam nas de 171, que
fecham entre si. Atualizar só o total quebraria a soma das tabelas.

Cada página declara o próprio recorte. Nenhum número aparece sem essa marca.

## Para atualizar quando o dado novo existir

1. `src/content/mapeamento/distribuicao-fase.json` — por fase e ano, somando 236
2. `src/content/mapeamento/distribuicao-agencia.json` — idem
3. `src/content/mapeamento/tipos-estudo.json` — idem
4. `src/content/mapeamento/sedes-fase.json` — matriz sede × fase, somando 338
5. `node scripts/gerar-figuras.mjs` — as figuras saem desses arquivos
6. Retirar as notas de recorte das páginas

## A dimensão de segurança

Ortogonal à fase: cada obra tem uma fase e um grau de centralidade da segurança
(central, secundária, ausente). Os dados estão em `src/content/seguranca.json` e
são publicados em `/seguranca`. Das 574 obras dos dois corpora, 140 tratam de
segurança — 77 com ela como objeto central.

## Template DSR

`public/dsr/modelo_DSR.zip` é cópia exata de `fontes/dsr/modelo_DSR.zip`, publicada
para download na página `/dsr`. Ao trocar o template, troque nos dois lugares e
confira com `cmp` — a página declara o peso do arquivo, e um peso errado é uma
promessa quebrada antes do clique.

`fontes/dsr/exemplo_dsr.pdf` **não** é publicado: é tese de terceiros, sem licença de
redistribuição declarada.
