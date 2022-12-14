/*Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/

function lengthOfLastWord(s) {
  let wordLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && s[i] !== " " && s[i - 1] == " ") {
      wordLength = 1;
    } else if (s[i] !== " ") {
      wordLength++;
    }
  }
  return wordLength;
}

console.log(lengthOfLastWord("Hello World aas abasu dev"));
