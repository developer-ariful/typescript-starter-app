import type { Product } from "./types/product.types.js";
import { calculatePrice } from "./utils/calculate-price.js";


const product: Product = {
  id: "1",
  name: "Mechanical Keyboard",
  price: 2500,
  stock: 10,
}


const finalPrice = calculatePrice(product.price, 10);;

console.log("Product", product.name);
console.log("Original Price:", product.price);
console.log("Discounted 10%:");
console.log("Final Price:", finalPrice);