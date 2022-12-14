/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (i < nums.length && nums[i] == nums[i + 1]) {
      continue;
    }
    nums[count] = nums[i + 1];
    count++;
  }
  nums.length = count;
  return nums;
};

console.log(removeDuplicates([1, 1, 2]));
//............................1, 2, 7, 7,
