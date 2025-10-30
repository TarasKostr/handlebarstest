import charms from "./products.json"
import template from "./products_template.hbs"

const listEl = document.querySelector(".list__info");
listEl.innerHTML = template({charms})