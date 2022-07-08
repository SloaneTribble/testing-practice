const analyzeArray = function returnObjectWithAnalysis(array) {
  const sum = array.reduce((partialSum, a) => partialSum + a, 0);
  const average = sum / array.length;

  const min = minNum(array);

  const max = maxNum(array);

  const arrayLength = array.length;

  return { average, min, max, arrayLength };
};

export { analyzeArray };

const minNum = function findMin(array) {
  let minimum = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] < array[i]) {
      minimum = array[i + 1];
    }
  }
  return minimum;
};

const maxNum = function findMax(array) {
  let maximum = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] > array[i]) {
      maximum = array[i + 1];
    }
  }
  return maximum;
};
