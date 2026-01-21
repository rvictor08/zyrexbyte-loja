# ZyrexByte — Site pronto (GitHub Pages)

## Como alterar os produtos
Abra `js/products.js` e edite o array `PRODUCTS`.

Cada produto tem:
- `title`: nome
- `description`: descrição curta
- `viewUrl`: link para ver o produto
- `buyUrl`: link do botão **Comprar**
- `badge` (opcional): etiqueta (ex: NOVO, OFERTA, TOP)

> **Importante:** em um site estático (GitHub Pages) não existe “segurança real” para esconder links.
> O que foi feito aqui é deixar **tudo centralizado em 1 arquivo**, pra você trocar rápido.

## Publicar no GitHub Pages (passo a passo)
1. Crie um repositório no GitHub (ex: `zyrexbyte-site`)
2. Envie **todos os arquivos** desta pasta para o repositório
3. Vá em **Settings → Pages**
4. Em **Build and deployment**, selecione:
   - Source: **Deploy from a branch**
   - Branch: **main** / (root)
5. Salve — o GitHub vai gerar a URL do seu site.

## Rodar localmente (opcional)
Você pode abrir o `index.html` direto no navegador.
Se preferir um servidor local simples:
- VS Code: extensão “Live Server”
- Ou qualquer server HTTP simples.

Versão otimizada (sem animações de fundo) para ficar bem leve.

Bom uso! ✨
