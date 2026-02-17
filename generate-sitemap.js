const fs = require("fs");
const axios = require("axios");

const BASE_URL = "https://marufotomasyon.vercel.app";
const API_URL = "https://marufotomasyon.onrender.com/api/products/getallwithoutpages";

async function generateSitemap() {
  try {
    console.log("📡 Ürünler çekiliyor...");

    const res = await axios.get(API_URL);
    const products = res.data.data || res.data; // backend response formatına göre

    // Statik sayfalar
    const staticRoutes = [
      "/",
      "/home",
      "/aboutus",
      "/services",
      "/contact",
      "/programming",
      "/projects",
      "/maintenance",
      "/heat",
      "/productsupplies",
      "/video",
      "/photo",
      "/ourprojects",
      "/categories",
      "/plcnedir",
      "/products",
      "/products/secondhand"
    ];

    // Ürün URL'leri
    const productRoutes = products.map(p => {
      const category = encodeURIComponent(p.categoryName);
      const product = encodeURIComponent(p.productName);
      return `/products/${category}/${product}`;
    });

    const routes = [...staticRoutes, ...productRoutes];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `
  <url>
    <loc>${BASE_URL}${r}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`).join("")}
</urlset>`;

    fs.writeFileSync("./public/sitemap.xml", sitemap);
    console.log(`✅ Sitemap generated: ${routes.length} URL`);
  } catch (err) {
    console.error("❌ Sitemap error:", err.message);
  }
}

generateSitemap();