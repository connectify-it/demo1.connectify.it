window.onload = () => {
  getProducts();
};

async function getProducts() {
  let data = await fetch("../products.json");
  data = await data.json();
  console.log(await data);
}

function createGrid() {}
