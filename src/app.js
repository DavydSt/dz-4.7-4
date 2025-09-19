
import Handlebars from "handlebars";
import product from "./products.json";
import templateSource from "bundle-text:./product-template.handlebars";

const template = Handlebars.compile(templateSource);

const list = document.querySelector(".list");
list.innerHTML = template({ product });