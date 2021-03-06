const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");

const url = "https://kea-alt-del.dk/t7/api/products?limit=100?season=" + season;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductlist(data);
  });

function handleProductlist(data) {
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#product_template").content;

  const copy = template.cloneNode(true);

  copy
    .querySelector("a")
    .setAttribute("href", "/product_page/product.html?id=" + product.id);

  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  //NOT WORKING - adding dynamically, sale and out of stock items
  if (product.soldout) {
    copy.querySelector("article").classList.add("_soldout");
  }

  if (product.onsale) {
    copy.querySelector("article").classList.add("_onsale");

    copy.querySelector(".onsale p").textContent =
      product.price - product.discount;

    copy.querySelector(".onsale ::p").textContent =
      (product.discount / product.price) * 10 + `%`;
  }

  const parent = document.querySelector("main");

  parent.appendChild(copy);
}
