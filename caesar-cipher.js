const caesarCipher = function shiftCharacters(string) {
  // split string while maintaining spaces
  const stringArray = splitString(string);

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
  const code = letter.charCodeAt(0);
  const shiftedCode = code + 1;
  const shiftedLetter = String.fromCharCode(shiftedCode);

  return shiftedLetter;
};

function splitString(str) {
  str = str.trim();
  let length = str.length;
  let retArr = [];
  for (var i = 0; i < length; i++) {
    if (str[i] === " ") {
      retArr[retArr.length - 1] += " ";
      continue;
    }
    retArr.push(str[i]);
  }
  return retArr;
}

export { caesarCipher };
