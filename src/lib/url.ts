// O site é servido sob o subcaminho do repositório no GitHub Pages.
// Todo link interno e todo asset passa por aqui.
const BASE = import.meta.env.BASE_URL;

export function rota(caminho: string): string {
  const base = BASE.endsWith("/") ? BASE.slice(0, -1) : BASE;
  const alvo = caminho.startsWith("/") ? caminho : `/${caminho}`;
  return `${base}${alvo}` || "/";
}

// Link de material de apoio: interno passa pelo base, externo vai direto.
export function link(href: string): string {
  return /^(https?:|mailto:|#)/.test(href) ? href : rota(href);
}
