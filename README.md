# Site da disciplina — pacote para o Claude Code

Site de **Tópico Especial em Inteligência Artificial: Desenvolvimento de Software
Suportado por IA** — Mestrado em Computação Aplicada, IFES Serra, 2026.2.
Prof. Paulo Sérgio dos Santos Júnior.

## O que tem aqui

```
Disciplina.dc.html   protótipo completo — abra direto no navegador
support.js           runtime do protótipo (não editar)
corpus.js            os dois corpora em JS (157 secundários + 106 em sedes)
fichamento.tex       modelo de fichamento em LaTeX
uploads/             as duas figuras do mapeamento (PNG)
fontes/              material de origem: codebook (11 fases), mapeamento e os CSV
_ds/modernist-.../   design system Modernist: styles.css + bundle + guia
```

Abra `Disciplina.dc.html` num navegador para ver o site inteiro funcionando.
A navegação é por hash: `#`, `#conteudo`, `#avaliacao`, `#fases`, `#mapeamento`,
`#aula-01` … `#aula-17`.

## Estado do conteúdo

- **Real:** codebook das 11 fases, corpus (arXiv + OpenAlex), bibliografia,
  figuras, calendário (quintas 19h–22h, 06 ago a 03 dez, sem aula 09–11 set por
  causa do SBES 2026), modelo de fichamento.
- **Definido:** só a **Aula 01**. As demais aparecem como *a definir*.
- **Fixo:** o **último encontro de cada mês** (27 ago, 24 set, 29 out, 26 nov,
  03 dez) é apresentação de trabalho e debate.
- **Inventado, a substituir pelo plano de ensino real:** pesos da avaliação
  (20/30/50), enunciados dos quatro laboratórios, títulos das aulas 02–17.
- **Defasado:** a página `#mapeamento` ainda usa o recorte de 157/106 sob o
  esquema de 8 fases. O codebook já está em 11 fases, 171/129. Atualizar quando
  os novos CSV existirem (há um aviso visível na própria página).

## Prompt sugerido para o Claude Code

> Converta este protótipo num site estático em Astro, mantendo o visual exato.
>
> - Rotas reais em vez de hash: `/`, `/conteudo`, `/avaliacao`, `/codebook`,
>   `/codebook/mapeamento`, `/aulas/[n]`.
> - O conteúdo das aulas, o codebook (`FASES`, `FRONTEIRAS`), a bibliografia e as
>   tabelas do mapeamento estão no bloco `<script data-dc-script>` no fim do
>   `Disciplina.dc.html`. Extraia para content collections em Markdown/JSON — o
>   professor precisa editar aula por aula sem tocar em código.
> - `corpus.js` continua como dado; o navegador de corpus (filtro por corpus e
>   por fase, paginação de 25 em 25) pode virar uma ilha interativa.
> - Use `_ds/modernist-.../styles.css` como folha única e as variáveis
>   `var(--color-*)`, `var(--font-*)`, `var(--space-*)`. O guia do design system
>   está em `_ds/modernist-.../readme.md`: nada de cantos arredondados, réguas de
>   2px, tudo alinhado à esquerda, vermelho só no acento.
> - Mobile first — o protótipo já é assim: estilos base para telas pequenas e um
>   único breakpoint em `min-width: 861px`.
> - Não invente conteúdo novo. O que estiver marcado como *a definir* continua
>   *a definir*.
