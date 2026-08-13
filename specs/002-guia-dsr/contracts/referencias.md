# Contrato: as quatro referências do guia

**Feature**: 002-guia-dsr · **Verificado em**: 2026-08-13

Cada referência aparece na página com autores, ano, título, o papel que cumpre no
template e um endereço. O endereço primário é sempre um que responde de fora da rede
de uma instituição — os registros oficiais de MISQ, Taylor & Francis e ACM devolvem
403 a cliente automatizado e ficam atrás de paywall, então entram como registro
secundário, não como o link em que o aluno clica.

O 403 aqui é bloqueio a robô, não link morto: as páginas abrem em navegador. Mesmo
assim, mandar o aluno para um paywall quando existe PDF aberto do mesmo texto seria
uma escolha ruim.

| # | Referência | Papel no template | Endereço primário | HTTP |
| --- | --- | --- | --- | --- |
| 1 | Hevner, March, Park & Ram (2004). *Design Science in Information Systems Research* | Fundamentos da Design Science: o papel do artefato e a relação entre construir, avaliar e produzir conhecimento | `wise.vub.ac.be/sites/default/files/thesis_info/design_science.pdf` | 200 |
| 2 | Hevner (2007). *A Three Cycle View of Design Science Research* | Os três ciclos que estruturam o template: relevância, design e rigor | `uni-kassel.de/fb07/index.php?eID=dumpFile&f=4898&t=f&token=930ca…` | 200 |
| 3 | Peffers, Tuunanen, Rothenberger & Chatterjee (2007). *A Design Science Research Methodology for Information Systems Research* | As seis atividades do método: problema, objetivos, design e desenvolvimento, demonstração, avaliação e comunicação | `indico.cern.ch/event/1542774/contributions/6494311/attachments/…pdf` | 200 |
| 4 | Barcellos et al. (2022). *Organizing Empirical Studies as Learning Iterations in Design Science Research Projects* | As Learning Iterations: cada estudo empírico como uma iteração de aprendizado | `sol.sbc.org.br/index.php/sbqs/article/view/23302` | 200 |

## Registros secundários

Aparecem como texto identificável, não como link principal:

| Referência | Registro | HTTP a robô |
| --- | --- | --- |
| Hevner et al. (2004) | MIS Quarterly 28(1), 75–105 · DOI 10.2307/25148625 | 403 |
| Peffers et al. (2007) | J. of MIS 24(3), 45–77 · DOI 10.2753/MIS0742-1222240302 | 403 |
| Barcellos et al. (2022) | SBQS 2022 · DOI 10.1145/3571473.3571474 · PDF em `nemo.inf.ufes.br` (200) | 403 na ACM |

## Regra de resiliência

FR-004 e o caso de borda «link externo que sai do ar» exigem que a referência continue
identificável sem o link. Por isso a página mostra sempre autores, ano e título por
extenso, e o link é um complemento — nunca o único identificador.

## O que fica de fora

Os parâmetros `?utm_source=chatgpt.com` presentes em `fontes/dsr/source_guideline.md`
são rastreamento da ferramenta que gerou o arquivo. Removidos de todos os endereços.
