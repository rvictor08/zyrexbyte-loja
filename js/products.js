/* 
  ZyrexByte — edite SOMENTE aqui para adicionar/alterar produtos.

  Como editar:
  1) Duplique um item do array PRODUCTS
  2) Troque title/description e links
  3) Salve, publique no GitHub Pages

  Observação importante:
  Em um site estático (GitHub Pages), não existe "segurança real" para esconder links.
  O que dá pra fazer é CENTRALIZAR tudo aqui, pra você trocar rápido.
*/

const PRODUCTS = [
  {
    id: "p1",
    title: "Produto Exemplo 1",
    description: "Descrição curta e direta. Você pode vender acessórios, cursos, serviços, etc.",
    image: "https://via.placeholder.com/600x400",
    viewUrl: "https://exemplo.com/produto-1",
    buyUrl: "https://exemplo.com/comprar-1",
    badge: "NOVO",
  },
  {
    id: "p2",
    title: "Produto Exemplo 2",
    description: "Outro item. A página mostra só o botão Comprar.",
    image: "https://via.placeholder.com/600x400",
    viewUrl: "https://exemplo.com/produto-2",
    buyUrl: "https://exemplo.com/comprar-2",
    badge: "OFERTA",
  },
  {
    id: "p3",
    title: "Produto Exemplo 3",
    description: "Você pode adicionar quantos quiser. O layout se ajusta automaticamente.",
    image: "https://via.placeholder.com/600x400",
    viewUrl: "https://exemplo.com/produto-3",
    buyUrl: "https://exemplo.com/comprar-3",
    badge: "TOP",
  }
];
