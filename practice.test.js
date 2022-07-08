import { sum } from "./practice";

import { capitalize } from "./capitalize";

import { calculator } from "./calculator";

import { caesarCipher } from "./caesar-cipher";

import { analyzeArray } from "./analyze-array";

import { reverseString } from "./reverse-string";

test.skip("Adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// Capitalize

test.skip("Capitalizes the first letter", () => {
  expect(capitalize("hey")).toBe("Hey");
});

// Calculator

test.skip("Performs addition", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test.skip("Performs subtraction", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test.skip("Performs multiplication", () => {
  expect(calculator.multiply(2, 4.3)).toBeCloseTo(8.6);
});

test.skip("Performs division", () => {
  expect(calculator.divide(8, 4)).toBe(2);
});

// Caesar Cipher

test.skip("Shifts lower-case string, no spaces", () => {
  expect(caesarCipher("cowboy")).toBe("dpxcpz");
});

test.skip("Shifts lower-case string with spaces", () => {
  expect(caesarCipher("cow boy")).toBe("dpx cpz");
});

test.skip("Shifts upper-case letters correctly", () => {
  expect(caesarCipher("Cow Boy")).toBe("Dpx Cpz");
});

test.skip("Shifts z to a, Z to A", () => {
  expect(caesarCipher("zZ")).toBe("aA");
});

// Analyze Array

test.skip("Returns object with average of array's numbers", () => {
  const analyzedArray = analyzeArray([1, 2, 3]);

  expect(analyzedArray.average).toBe(2);
});

test.skip("Returns object with min. of array's numbers", () => {
  const analyzedArray = analyzeArray([8, 10, 2]);

  expect(analyzedArray.min).toBe(2);
});

test.skip("Returns object with max. of array's numbers", () => {
  const analyzedArray = analyzeArray([8, 10, 2]);

  expect(analyzedArray.max).toBe(10);
});

test.skip("Returns object with length of array", () => {
  const analyzedArray = analyzeArray([1, 2, 3]);

  expect(analyzedArray.arrayLength).toBe(3);
});

test("Reverses a string with no spaces", () => {
  expect(reverseString("Sloane")).toBe("enaolS");
});

test("Reverses a string with odd number of chars", () => {
  expect(reverseString("Sloaner")).toBe("renaolS");
});

test("Reverses a string with spaces", () => {
  expect(reverseString("Me cool")).toBe("looc eM");
});

test("Reverses a string with spaces and punctuation", () => {
  expect(reverseString("Me cool!")).toBe("!looc eM");
});
