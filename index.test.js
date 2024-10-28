import { capitalize, reverseString, calculator } from "./index.js";

test("tests", () => {
    expect(capitalize("tests")).toBe("Tests");
})

test("reversed string", () => {
    expect(reverseString("Jonathan")).toBe("nahtanoJ");
})

test("1+5", () => {
    expect(calculator.add(1, 5)).toBe(6);
})

test("17 - 24", () => {
    expect(calculator.subtract(17, 24)).toBe(-7);
})

test("2*33", () => {
    expect(calculator.multiply(2, 33)).toBe(66);
})

test("12/4", () => {
    expect(calculator.divide(12, 4)).toBe(3);
})

test("22/0", () => {
    expect(calculator.divide(22, 0)).toBe(Infinity);
})