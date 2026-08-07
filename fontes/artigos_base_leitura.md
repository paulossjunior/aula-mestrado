# Artigos-base para leitura inicial

Ponto de partida extraído dos dois corpora do projeto: 233 estudos secundários e 321 artigos
publicados em sedes de referência. A seleção não é um ranking de qualidade. Para cada uma das onze
fases do processo, até dois estudos secundários, que dão o mapa da fase, e até dois trabalhos
primários, que mostram como ela é praticada. O critério combina citações acumuladas, FWCI e
aceleração recente, com peso maior para impacto acumulado.

As métricas vêm do OpenAlex e faltam para boa parte dos preprints de 2025 e 2026, que ainda não têm
indexação madura. Onde aparece "sem métrica indexada", isso não significa pouco impacto, apenas
ausência de registro. As fases estão definidas em `codebook_fases_processo.md`.

O conteúdo desta lista vive em `src/content/leituras-base.json` no repositório do site e é publicado
em `/leituras`. Este arquivo é o registro da origem.

## O tronco do campo

Seis obras distintas com maior impacto acumulado nos dois corpora somados. Três aparecem nos dois
corpora — são revisões publicadas em sede de referência — e estão contadas uma vez cada. Cinco delas
reaparecem na fase a que pertencem.

| arXiv | Sede | Citações | FWCI | Momentum |
|---|---|---|---|---|
| [2308.10620](https://arxiv.org/abs/2308.10620) | TOSEM 2024 (a confirmar) | 795 | 116 | platô |
| [2307.07221](https://arxiv.org/abs/2307.07221) | TSE 2023 | 430 | 197 | desacelerando |
| [2310.03533](https://arxiv.org/abs/2310.03533) | ICSE-FoSE 2023 | 386 | 206 | desacelerando |
| [2304.07590](https://arxiv.org/abs/2304.07590) | TOSEM 2023 | 203 | 47 | platô |
| [2306.01987](https://arxiv.org/abs/2306.01987) | ICSE 2023 | 154 | 79 | crescendo |
| [2404.04834](https://arxiv.org/abs/2404.04834) | TOSEM 2025 (a confirmar) | 154 | 292 | acelerando |

## Assimetria entre praticar e sintetizar

Planejamento e gestão de releases tem 3 revisões contra 6 artigos primários; gestão de conhecimento
e documentação viva tem 2 contra 8; descoberta de produto tem 5 contra 7. É onde está a
oportunidade de pesquisa.

## Pendência de consistência

O corpus de estudos secundários passou de 171 para 233 nesta revisão. As tabelas de
`/codebook/mapeamento` e as contagens por fase do codebook ainda são as de 171, porque a
distribuição por fase e ano do novo recorte não foi publicada. Atualizar quando ela existir.
