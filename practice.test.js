import { sum } from "./practice";

import { capitalize } from "./capitalize";

import { calculator } from "./calculator";

import { caesarCipher } from "./caesar-cipher";

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
