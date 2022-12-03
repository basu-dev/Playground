// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.

function isValid(s) {
  const openingBrackets = ["(", "{", "["];
  const closingBrackets = [")", "}", "]"];
  let stack = [];
  const len = s.length;

  for (let i = 0; i < len; i++) {
    let str = s[i];
    let openingBracketIndex = openingBrackets.indexOf(str);
    console.log(openingBracketIndex);
    if (openingBracketIndex > -1) {
      stack.push(str);
      continue;
    }

    let closingBracketIndex = closingBrackets.indexOf(s[i]);

    if (closingBracketIndex < 0) continue;

    console.log(str, stack);
    if (!stack.length) return false;

    let lastOpeningBracket = stack.pop();

    if (closingBracketIndex !== openingBrackets.indexOf(lastOpeningBracket)) {
      return false;
    }
  }

  console.log(stack.length);
  if (stack.length) return false;
  return true;
}

console.log(isValid("()"));
