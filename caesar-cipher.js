const caesarCipher = function shiftCharacters(string) {
  // split string while maintaining spaces
  const stringArray = string.split("");

  for (let i = 0; i < stringArray.length; i++) {
    if (isLetter(stringArray[i])) {
      const shiftedChar = shift(stringArray[i]);
      stringArray[i] = shiftedChar;
    }
  }
  return stringArray.join("");
};

const isLetter = function checkIfCharIsLetter(letter) {
  if (typeof letter !== "string") {
    return false;
  }

  return /^[a-zA-Z]+$/.test(letter);
};

const shift = function shiftCharAhead(letter) {
  if (letter === "z") {
    return "a";
  }
  if (letter === "Z") {
    return "A";
  }
  const code = letter.charCodeAt(0);
  const shiftedCode = code + 1;
  const shiftedLetter = String.fromCharCode(shiftedCode);

  return shiftedLetter;
};

export { caesarCipher };
