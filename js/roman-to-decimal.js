function romanToInt(s) {
  let a = new Map();
  a.set("I", 1);
  a.set("V", 5);
  a.set("X", 10);
  a.set("L", 50);
  a.set("C", 100);
  a.set("D", 500);
  a.set("M", 1000);

  const get = (key) => {
    return a.get(key);
  };

  let result = 0;
  const len = s.length;
  for (let i = 0; i < len; i++) {
    let iValue = get(s[i]);
    if (i < len - 1) {
      const nextValue = get(s[i + 1]);
      if (iValue < nextValue) {
        result += nextValue - iValue;
        i++;
      } else {
        result += iValue;
      }
    } else {
      result += iValue;
    }
  }

  return result;
}

let a = new Map();
a.set(1, "I");
a.set(5, "V");
a.set(10, "X");
a.set(50, "L");
a.set(100, "C");
a.set(500, "D");
a.set(1000, "M");

const get = (num) => {
  return a.get(num);
};
function intToRoman(num) {
  let result = "";
  if (num == 0) return "";
  if (num == 4) return "IV";
  if (num == 9) return "IX";
  if (num >= 40 && num < 50) return "XL" + intToRoman(num - 40);
  if (num >= 90 && num < 100) return "XC" + intToRoman(num - 90);
  if (num >= 400 && num < 500) return "CD" + intToRoman(num - 400);
  if (num >= 900 && num < 1000) return "CM" + intToRoman(num - 900);

  let set = [1000, 500, 100, 50, 10, 5, 1];

  for (let i = 0; i < set.length; i++) {
    let quo = Math.floor(num / set[i]);
    if (quo == 0) continue;
    console.log(quo);
    if (quo == 4 && set[i] !== 1000) {
      console.log("here");
      let base = set[i] * quo; // if num = 535 base is 500, if 45 base is 40
      let baseToRoman = intToRoman(base);
      let remToRoman = intToRoman(num - base); // so (num - base) = 535 - 500 or 45 - 40
      result += baseToRoman + remToRoman;
      break;
    } else {
      for (let j = 0; j < quo; j++) {
        result += get(set[i]);
      }
      num = num % set[i];
      result += intToRoman(num);
      break;
    }
  }

  return result;
}

console.log(intToRoman(104));
