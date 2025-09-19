
import product from "./products.json";
import template from "./product-template.hbs";

const list = document.querySelector(".list");
list.innerHTML = template({ product });
