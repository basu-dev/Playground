function longestCommonPrefix(strs) {
  let shortestString = strs
    .sort((str1, str2) => str2.length - str1.length)
    .pop();
  let match = false;
  while (!match && shortestString.length) {
    match = strs.every((str) => str.indexOf(shortestString) == 0);
    if (!match)
      shortestString = shortestString.slice(0, shortestString.length - 1);
  }
  return shortestString;
}

console.log(longestCommonPrefix(["fastest", "fast", "nicer"]));
