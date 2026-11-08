import { describe, expect, it } from "vitest";
import {calculatePrice} from "../../src/utils/calculate-price"


describe("calculatePrice", ()=>{
    it("should calculate discount correctly", ()=>{
        const result = calculatePrice(2500,10);

        expect(result).toBe(2250);
    });

    it("should return original price when discount is 0", ()=>{
        const result = calculatePrice(2500, 0);

        expect(result).toBe(2500);
    });

    it("should throw error for negative price", ()=>{
        expect(()=>calculatePrice(-100,10)).toThrow(
            "Price cannot be negative"
        );
    });

    it("should throw error for invalid discount", ()=>{
        expect(()=>calculatePrice(2500, 110)).toThrow(
            "Invalid discount percentage"
        )
    })
})