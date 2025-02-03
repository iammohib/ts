function maxNum(num: number[]) {
  let maxValue = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > maxValue) {
      maxValue = num[i];
    }
  }
  return maxValue;
}

const result = maxNum([21, 23, 1, 12, 100, 22]);
console.log(result);
