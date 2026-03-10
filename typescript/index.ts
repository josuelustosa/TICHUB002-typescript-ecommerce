// interface Product {
//   name: string;
//   price: number;
//   description: string;
//   isActive: boolean;
// }

// interface Product {
//   category: string;
// }

type ProductType = {
  name: string;
  price: number;
  description: string;
  isActive: boolean;
  category: Category;
};

type Category = {
  name: string;
};

const product: ProductType = {
  name: "Chuteira Society Penalty",
  price: 149.9,
  description:
    "Chuteira confortável e com design moderno ideal para grama sintética",
  category: {
    name: "Futebol",
  },
  isActive: true,
};

console.log(product);
