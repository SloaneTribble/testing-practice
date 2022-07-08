const reverseString = function reverse(string) {
  const stringArray = string.split("");

  let reversedArray = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedArray[string.length - i - 1] = string[i];
  }

  const reversedString = reversedArray.join("");

  return reversedString;
};

export { reverseString };
