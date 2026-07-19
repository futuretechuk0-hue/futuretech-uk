
const products = [{"name": "REMAX RPP-72 Power Bank", "price": "\u00a339.99", "category": "Power", "icon": "\ud83d\udd0b", "desc": "20,000mAh fast-charging power bank with USB and Type-C outputs.", "badge": "Best Seller"}, {"name": "T900 Pro Max Smartwatch", "price": "\u00a329.99", "category": "Wearables", "icon": "\u231a", "desc": "Stylish smartwatch with fitness tracking, calls and notifications.", "badge": "Popular"}, {"name": "i12 Wireless Earbuds", "price": "\u00a312.99", "category": "Audio", "icon": "\ud83c\udfa7", "desc": "Compact wireless earbuds with charging case and touch controls.", "badge": "Great Value"}, {"name": "Wireless Lavalier Microphone", "price": "\u00a319.99", "category": "Audio", "icon": "\ud83c\udf99\ufe0f", "desc": "Clip-on wireless microphone for TikTok, interviews and videos.", "badge": "Creator Pick"}, {"name": "MagSafe Car Mount", "price": "\u00a314.99", "category": "Accessories", "icon": "\ud83d\ude97", "desc": "Strong magnetic phone holder with adjustable 360\u00b0 rotation.", "badge": "New"}, {"name": "S001 Handheld Fan", "price": "\u00a39.99", "category": "Home & Travel", "icon": "\ud83c\udf00", "desc": "Portable rechargeable mini fan for travel, work and summer.", "badge": "Summer Deal"}, {"name": "Bluetooth Keyboard Case", "price": "\u00a324.99", "category": "Accessories", "icon": "\u2328\ufe0f", "desc": "Protective tablet keyboard case for work, study and travel.", "badge": "Limited"}, {"name": "MacBook Air Hard Case", "price": "\u00a316.99", "category": "Accessories", "icon": "\ud83d\udcbb", "desc": "Slim protective hard shell case for compatible MacBook Air models.", "badge": "Protect Your Tech"}, {"name": "HDMI Matrix Switch", "price": "\u00a334.99", "category": "Electronics", "icon": "\ud83d\udcfa", "desc": "Flexible HDMI switching solution for home entertainment and office setups.", "badge": "Pro Tech"}, {"name": "Sports Mist Water Bottle", "price": "\u00a311.99", "category": "Lifestyle", "icon": "\ud83e\udd64", "desc": "Reusable sports bottle with refreshing mist spray function.", "badge": "Trending"}, {"name": "42-Piece Children\u2019s Art Set", "price": "\u00a314.99", "category": "Kids", "icon": "\ud83c\udfa8", "desc": "Colourful creative art set with paints, brushes and accessories.", "badge": "Family Favourite"}, {"name": "Pet Grooming Brush", "price": "\u00a38.99", "category": "Pets", "icon": "\ud83d\udc3e", "desc": "Easy-clean grooming brush for removing loose pet hair.", "badge": "Everyday Essential"}];
const grid = document.getElementById('productGrid');
const filters = document.querySelectorAll('#filters button');

function renderProducts(filter='All') {
  const visible = filter === 'All' ? products : products.filter(p => p.category === filter);
  grid.innerHTML = visible.map(p => `
    <article class="product">
      <div class="product-image">
        <span class="badge">${p.badge}</span>
        <span class="product-icon">${p.icon}</span>
      </div>
      <div class="product-info">
        <small>${p.category}</small>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="product-bottom">
          <strong>${p.price}</strong>
          <a class="order-btn" target="_blank" rel="noopener" href="https://wa.me/447858033396?text=${encodeURIComponent('Hello FutureTech UK, I would like to order: ' + p.name + ' at ' + p.price)}">Order now</a>
        </div>
      </div>
    </article>
  `).join('');
}

filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(btn.dataset.filter);
}));

document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('open');
});

document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => {
  document.getElementById('nav').classList.remove('open');
}));

renderProducts();
