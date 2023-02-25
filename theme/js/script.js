window.onload = () => {
  createGrid();
};

async function createGrid() {
  let products = await getProducts();
  let container = document.getElementById("productsContainer");
  products.forEach((item) => {
    container.innerHTML += `
      <div class="card text-bg-dark product">
         <img src="${item.url}" class="card-img-top" alt="${item.name}">
         <div class="card-body">
            <p class="card-text">${item.name}</p>
         </div>
      </div>
      `;
  });
}

async function getProducts() {
  let data = await fetch("../products.json");
  data = await data.json();
  return await data;
}
