document.addEventListener("DOMContentLoaded", function () {
  function showItems() {
    const container = document.getElementById("lost-items");
    if (!container) return;
    let items = JSON.parse(localStorage.getItem("lostItems") || "[]");
    container.innerHTML = items
      .map(
        (item) => `
      <div class="product-card">
        <img src="${item.image || 'placeholder.png'}" class="product-image" alt="${item.itemName}">
        <div class="product-name">${item.itemName}</div>
        <div class="product-desc">${item.description}</div>
        <div class="product-meta">
          <span><b>Category:</b> ${item.category}</span>
          <span><b>Location:</b> ${item.location}</span>
          <span><b>Date:</b> ${item.lostDate}</span>
          <span><b>Contact:</b> ${item.contactName} (${item.contactInfo})</span>
        </div>
      </div>
    `
      )
      .join("");
  }

  const form = document.getElementById("lost-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(form);
      let lostItems = JSON.parse(localStorage.getItem("lostItems") || "[]");

      let imageUrl = "placeholder.png";
      const file = formData.get("image");
      if (file && file.size && FileReader) {
        const reader = new FileReader();
        reader.onloadend = function () {
          imageUrl = reader.result;
          addItem(imageUrl);
        };
        reader.readAsDataURL(file);
      } else {
        addItem(imageUrl);
      }

      function addItem(image) {
        const item = {
          itemName: formData.get("itemName"),
          category: formData.get("category"),
          description: formData.get("description"),
          location: formData.get("location"),
          lostDate: formData.get("lostDate"),
          contactName: formData.get("contactName"),
          contactInfo: formData.get("contactInfo"),
          notes: formData.get("notes"),
          image,
        };
        lostItems.push(item);
        localStorage.setItem("lostItems", JSON.stringify(lostItems));
        document.getElementById("lost-success").classList.remove("hidden");
        setTimeout(() => {
          document.getElementById("lost-success").classList.add("hidden");
        }, 2000);
        form.reset();
        showItems();
      }
    });
    showItems();
  }
});
