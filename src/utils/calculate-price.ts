export function calculatePrice(price: number, discountPercent: number): number {
  if (!Number.isFinite(price) || price < 0) {
    throw new Error("Price must be a valid non-negative number");
  }
  if (
    !Number.isFinite(discountPercent) ||
    discountPercent < 0 ||
    discountPercent > 100
  ) {
    throw new Error("Discount must be between 0 and 100");
  }


  return price - (price * discountPercent) / 100;
}
