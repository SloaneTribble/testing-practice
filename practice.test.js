import { sum } from "./practice";

import { capitalize } from "./capitalize";

import { calculator } from "./calculator";

test("Adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// Capitalize

test("Capitalizes the first letter", () => {
  expect(capitalize("hey")).toBe("Hey");
});

// Calculator

test("Performs addition", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("Performs subtraction", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test("Performs multiplication", () => {
  expect(calculator.multiply(2, 4.3)).toBeCloseTo(8.6);
});

test("Performs division", () => {
  expect(calculator.divide(8, 4)).toBe(2);
});
