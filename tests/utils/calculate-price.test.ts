import { describe, expect, it } from "vitest";
import {calculatePrice} from "../../src/utils/calculate-price"


describe("calculatePrice", ()=>{
    it("should calculate discount correctly", ()=>{
        expect(calculatePrice(2500,10)).toBe(2250);
    });

    it("should return original price when discount is 0", ()=>{
        expect(calculatePrice(2500, 0)).toBe(2500);
    });

    it("should return 0 when discount is 100%", ()=>{
        expect(calculatePrice(2500,100)).toBe(0);
    })

    it("should calculate decimal prices", ()=>{
        expect(calculatePrice(99.99, 10)).toBeCloseTo(89.991);
    })

    it("should reject negative price", ()=>{
        expect(()=>calculatePrice(-100, 10)).toThrow("Price must be a valid non-negative number")
    })

    it("should reject NaN price", ()=>{
        expect(()=>calculatePrice(NaN, 10)).toThrow("Price must be a valid non-negative number")
    })

    it("should reject infinite price",()=>{
        expect(()=>calculatePrice(Infinity, 10)).toThrow("Price must be a valid non-negative number")
    })

    it("should reject negative discount",()=>{
        expect(()=> calculatePrice(2500, -10)).toThrow("Discount must be between 0 and 100")
    })

    it("should reject discount above 100", ()=>{
        expect(()=>calculatePrice(2500, 110)).toThrow("Discount must be between 0 and 100")
    })

    it("should reject NaN discount", ()=>{
        expect(()=> calculatePrice(2500, NaN)).toThrow("Discount must be between 0 and 100")
    })

    it("should reject infinite discount", ()=>{
        expect(()=>calculatePrice(2500, Infinity)).toThrow("Discount must be between 0 and 100")
    })

})