import { Product } from "./src/model/product.model.js";
import { Category } from "./src/model/category.model.js";

const category = new Category("Futebol");

const product = new Product(
  "Chuteira Society Penalty",
  149.9,
  "https:example.site/igm/IMAGE-01.jpeg",
  category,
);

console.log("Categoria do Produto:", product.category.title);
