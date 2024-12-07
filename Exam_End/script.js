const productContainer = document.getElementById("productContainer");
let allProducts = [];

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    allProducts = products.map(product => ({
      image: product.image,
      title: product.title,
      description: product.description,
      category: product.category,
      price: product.price,
    }));

    displayProducts(allProducts);
  } catch (error) {
    productContainer.innerHTML = `<div class="loading">Error loading products. Please try again later.</div>`;
    console.error("Error fetching products:", error);
  }
}

function displayProducts(products) {
  productContainer.innerHTML = "";
  if (products.length === 0) {
    productContainer.innerHTML = `<div class="loading">No products found.</div>`;
    return;
  }

  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p>Category: ${product.category}</p>
      <p class="price">$${product.price.toFixed(2)}</p>
    `;
    productContainer.appendChild(productCard);
  });
}

function searchProducts() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const filteredProducts = allProducts.filter(product =>
    product.title.toLowerCase().includes(searchInput) ||
    product.category.toLowerCase().includes(searchInput)
  );
  displayProducts(filteredProducts);
}

fetchProducts();
