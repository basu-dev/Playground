function rangeRandom(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

let randomNumbers = [];
let count = 100_000;
for (let i = 0; i < count; i++) {
  randomNumbers.push(rangeRandom(5, 10));
}
let x = randomNumbers.sort((a, b) => a - b);
console.log({ minValue: x[0], maxValue: x[x.length - 1] });
