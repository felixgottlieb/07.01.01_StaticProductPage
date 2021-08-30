const url = "https://kea-alt-del.dk/t7/api/products/2801";

//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page

function showProduct(product) {
  console.log(product);

  document.querySelector(
    "img.productImage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productImage").alt = product.productdisplayname;
  document.querySelector("h2").textContent = product.productdisplayname;
  document.querySelector(".productInformation .inventoryNumber").textContent =
    product.id;
  document.querySelector(".productInformation .productColour").textContent =
    product.basecolour;
  document.querySelector(".productInformation .modelName").textContent =
    product.productdisplayname;
}
