import type { Product } from "./types/product.types.js";
import { calculatePrice } from "./utils/calculate-price.js";
import { validationProductName } from "./utils/validation-product.js";


const product:Product = {
  id: 1,
  name: "Mechanical Keyboard",
  price: 2500,
  stock: 10
}


if(!validationProductName(product.name)) {
  console.log(`Invalid Product Name`);
}

const finalPrice = calculatePrice(product.price, 10)

console.log("Product: ", product.name);
console.log("Original Price: ", product.price);
console.log("Discount: 10%");
console.log("Final Price: ", finalPrice)
// console.log(calculatePrice(2500,10))