/*
Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
*/
function add(a, b, c) {
  if (a == "1" && b == "1") {
    return "10";
  } else if (a == "0" && b == "0") {
    return "0";
  } else {
    return "1";
  }
}
function addBinary(a, b) {
  const aArray = a.split("");
  const bArray = b.split("");
  let minLength = 0;
  let maxArray = null;
  if (a.length > b.length) {
    maxArray = aArray;
    minLength = b.length;
  } else {
    maxArray = bArray;
    minLength = a.length;
  }

  for (let i = minLength - 1; i >= 0; i--) {
    let res = add(a[i], b[i]);
    if (res.length == 1) {
      console.log(res);
      maxArray[i] = res;
    } else {
      let temp = res;
      let j = i - 1;
      while (temp.length > 1) {
        maxArray[j] = temp[1];
        temp = add(maxArray[j - 1], temp);
        if (temp.length > 1) {
          maxArray[j - 1] = temp[1];
        } else {
          maxArray[j - 1] = temp[0];
        }
        j--;
      }
    }
  }
  console.log(maxArray);
  return maxArray;
}

console.log(addBinary("010", "1"));

let a = new Map();
a.set("a", "a");

console.log(a.keys());
for (let b of a.keys()) {
  console.log(a.get(b));
}
