import { Product } from "./src/models/Product.js";
import { Category } from "./src/models/Category.js";
import { Cart } from "./src/models/Cart.js";

const productCategory: Category = {
  id: 1,
  name: "Futebol",
};

const product1: Product = {
  id: 1,
  name: "Chuteira Society Penalty",
  price: 120.0,
  category: productCategory,
};

const product2: Product = {
  id: 2,
  name: "Bola de Futebol Nike",
  price: 89.5,
  category: productCategory,
};

const product3: Product = {
  id: 3,
  name: "Manto Flamengo Authentic",
  price: 799.99,
  category: productCategory,
};

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
