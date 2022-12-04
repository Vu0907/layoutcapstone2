var productService = new ProductService();

function getEle(id) {
  return document.getElementById(id);
}

function getListProduct() {
  var promise = productService.getListProductApi();

  promise
    .then(function (result) {
      renderHTML(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getListProduct();

function renderHTML(data) {
  var content = "";

  data.forEach(function (product) {
    content += `  <div class="col-3">
              <div class="product-card">
                <div class="product-img">
                  <a href="#">
                    <img
                      src="${product.img}"
                      alt=""
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="product-text">
                  <p class="describe">
                    <span class="typephone">${product.name}</span> - ${product.desc}
                  </p>
                  <span class="price">$${product.price}</span>
                  <div class="price-icon">
                    <i class="fa-solid fa-cart-plus"></i>
                  </div>
                </div>
              </div>
            </div>
    `;
  });

  getEle("productItems").innerHTML = content;
}
