import { validationProductName } from "./utils/validation-product.js";


const productName = "Mechanical Keyboard";

if(validationProductName(productName)) {
  console.log(`Product name is valid`);
}else{
  console.log(`Product name must be at least 3 characters long`);
}