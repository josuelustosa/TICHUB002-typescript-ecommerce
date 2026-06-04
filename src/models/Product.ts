import type { Category } from "./Category.js";

export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public category: Category,
  ) {}
}
