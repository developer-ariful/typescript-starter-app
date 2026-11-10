import { describe, expect, it } from "vitest";
import { validationProductName } from "../../src/utils/validation-product";

describe("validationProductName", () => {
  it("should accept a valid product name", () => {
    expect(validationProductName("Keyword")).toBe(true);
  });

  it("should reject a name shorter than 3 characters", () => {
    expect(validationProductName("TV")).toBe(false);
  });

  it("should reject a name shorter than 3 characters", ()=>{
    expect(validationProductName("ABC")).toBe(true);
  })

  it("should reject an empty name", () => {
    expect(validationProductName("")).toBe(false);
  });

  it("should reject a name containing only spaces", () => {
    expect(validationProductName(" ")).toBe(false);
  });

  it("should reject a name with surrounding spaces it trimmed length is valid", () => {
    expect(validationProductName("   Mouse   ")).toBe(true);
  });
});
