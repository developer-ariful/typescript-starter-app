export function calculatePrice(price: number, discountPercent: number): number {
  if (price < 0) {
    throw new Error("Price cannot be negative");
  }

  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error("Invalid discount percentage");
  }

  return price - (price * discountPercent) / 100;
}
