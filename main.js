// demo items for preview; replace with backend fetch if needed
const sampleItems = [
  {
    name: "Black Samsung Phone",
    desc: "Lost on 24th Sep at Stand 12. Has a cracked screen.",
    image: "assets/samsung.jpeg",
    details: "Contact: 9876543212"
  },
  {
    name: "Brown Purse",
    desc: "Contains ID Card, lost near canteen area.",
    image: "assets/purse.jpeg",
    details: "Contact: 9876543212"
  }
];

function createProductCard(item) {
  return `
    <div class="product-card animate-card">
      <div class="product-image-wrapper">
        <img src="${item.image}" alt="${item.name}" class="product-image" />
      </div>
      <div class="product-details-box">
        <div class="product-name">${item.name}</div>
        <div class="product-desc">${item.desc}</div>
        <div class="product-meta">${item.details}</div>
      </div>
    </div>
  `;
}

window.onload = function() {
  const container = document.getElementById("dynamic-lost-items");
  container.innerHTML = sampleItems.map(createProductCard).join("");
};
