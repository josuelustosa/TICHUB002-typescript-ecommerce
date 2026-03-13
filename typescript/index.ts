import { Product } from "./src/model/product.model.js";
import { Category } from "./src/model/category.model.js";
import { Cart } from "./src/model/cart.model.js";

const category = new Category("Futebol");

const product = new Product(
  "Chuteira Society Penalty",
  149.9,
  "https:example.site/img/IMAGE-01.jpeg",
  category,
  0.5,
);

const cart = new Cart();
cart.addItem(product, 1);
cart.addItem(product, 4);

console.log("Categoria do Produto:", product.category.title + `\n`);
console.log(
  "Valor do Produto com desconto aplicado: R$",
  product.priceWithDiscountApplied() + `\n`,
);
console.log("Itens no carrinho: \n", cart.listProduct);
