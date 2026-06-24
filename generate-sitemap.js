const fs = require("fs");

async function generateSitemap() {
  const response = await fetch(
    "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products"
  );

  const products = await response.json();

  const urls = products
    .map(
      (product) => `
      <url>
        <loc>https://bizharheritage.com/product/${product.id}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls}

</urlset>`;

  fs.writeFileSync("./public/sitemap.xml", sitemap);

  console.log("Sitemap generated");
}

generateSitemap();