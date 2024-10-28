import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./index.js";

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

test("xyz, 3", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
})

test("XYZ, 3", () => {
    expect(caesarCipher("XYZ", 4)).toBe("BCD");
})

test("HeLLo, 3", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
})

test("Hello, World!, 3", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})

test("analyze array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(
        { average: 4, min: 1, max: 8, length: 6 }
    )
})