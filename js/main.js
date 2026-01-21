(() => {
  const grid = document.getElementById("productsGrid");
  const empty = document.getElementById("emptyState");
  const searchInput = document.getElementById("searchInput");

  const yearEl = document.getElementById("year");
  yearEl.textContent = new Date().getFullYear();

  // Basic HTML escaping (avoid breaking layout if you paste weird chars)
  const esc = (s) => String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const render = (items) => {
    grid.innerHTML = "";
    if (!items.length) {
      empty.hidden = false;
      return;
    }
    empty.hidden = true;

    const frag = document.createDocumentFragment();

    items.forEach((p, idx) => {
      const card = document.createElement("article");
      card.className = "card";

      const badge = p.badge ? `<span class="badge ${p.badge === "NOVO" ? "badge--new" : ""}">${esc(p.badge)}</span>` : "";

      card.innerHTML = `
        <div class="card__in">
          ${p.image ? `<img class="card__image" src="${esc(p.image)}" alt="${esc(p.title)}">` : ``}
          ${badge}
          <h4 class="card__title">${esc(p.title)}</h4>
          <p class="card__desc">${esc(p.description ?? "")}</p>

          <div class="card__row">
            <span class="card__mini">Comprar</span>
            <div class="card__actions">
              <a class="link link--primary" href="${esc(p.buyUrl)}" target="_blank" rel="noreferrer">Comprar</a>
            </div>
          </div>
        </div>
      `;

      frag.appendChild(card);
    });

    grid.appendChild(frag);
  };

  // Featured panel (latest)
  const featuredTitle = document.getElementById("featuredTitle");
  const featuredDesc = document.getElementById("featuredDesc");
  const featuredView = document.getElementById("featuredView");
  const featuredBuy = document.getElementById("featuredBuy");

  const latest = (Array.isArray(window.PRODUCTS) ? window.PRODUCTS : PRODUCTS)?.[0] ?? null;
  const useLatest = (Array.isArray(window.PRODUCTS) ? window.PRODUCTS : PRODUCTS);

  if (useLatest && useLatest.length) {
    const p = useLatest[0];
    featuredTitle.textContent = p.title;
    featuredDesc.textContent = p.description ?? "";
    featuredView.href = p.viewUrl;
    featuredBuy.href = p.buyUrl;
  } else {
    featuredTitle.textContent = "Sem produtos ainda";
    featuredDesc.textContent = "Edite js/products.js para adicionar itens.";
    featuredView.href = "#produtos";
    featuredBuy.href = "#produtos";
  }

  // Initial render
  render(useLatest);

  // Search
  const normalize = (s) => String(s).toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
  const filter = () => {
    const q = normalize(searchInput.value.trim());
    if (!q) return render(useLatest);
    const filtered = useLatest.filter(p => {
      const t = normalize(p.title ?? "");
      const d = normalize(p.description ?? "");
      const b = normalize(p.badge ?? "");
      return t.includes(q) || d.includes(q) || b.includes(q);
    });
    render(filtered);
  };
  searchInput.addEventListener("input", filter, { passive: true });
})();
