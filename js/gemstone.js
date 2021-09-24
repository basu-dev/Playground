let a = 33344433;

function separator(number) {
  let string = Array.from(number.toString());
  let currentValue = string[0];
  let currentCount = 0;
  let array = [];
  string.forEach((num, i) => {
    array.push(num);

    if (currentValue == num) {
      currentCount++;
    }

    if (currentValue != num && currentCount == 2) {
      console.log(currentValue, num, currentCount);
      array.push(" ");
      currentCount = 0;
    }

    if (currentCount == 3) {
      console.log(currentValue, num, currentCount);
      array.push(" ");

      currentCount = 0;
    }

    currentValue = num;
  });
  return array;
}

let value = separator(a).join("").toString();
console.log(value);
