/*
Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/

function plusOne(digits) {
  let position = digits.length - 1;
  digits[position] = digits[position] + 1;

  while (digits[position] > 9) {
    digits[position] = 0;
    position = position - 1;
    if (position >= 0) {
      digits[position] = digits[position] + 1;
    } else {
      let newArray = new Array(digits.length + 1);
      newArray[0] = 1;
      digits.forEach((d, i) => (newArray[i + 1] = d));
      return newArray;
    }
  }

  return digits;
}

console.log(plusOne([1, 2, 8]));
