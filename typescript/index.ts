import { Product } from "./src/models/Product.js";
import { Category } from "./src/models/Category.js";
import { Cart } from "./src/models/Cart.js";

const category = new Category(1, "Futebol");

const product1 = new Product(1, "Chuteira Society Penalty", 120.0, category);
const product2 = new Product(2, "Bola de Futebol Nike", 89.5, category);
const product3 = new Product(3, "Manto Flamengo Authentic", 799.99, category);

// adicionando itens (Product) diferentes no Carrinho
const cart = new Cart();
cart.addItem(product1, 1);

cart.addItem(product2, 2);
cart.addItem(product2, 3);

cart.addItem(product3, 1);

const totalItems = cart.getTotalItems();
const finalPrice = cart.getFinalPrice();

console.log("Itens no Carrinho: \n", JSON.stringify(cart.cartItem, null, 2));
console.log("Quantidade de Itens no Carrinho:", totalItems);
console.log(
  "Valor Total da compra:",
  finalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
);
