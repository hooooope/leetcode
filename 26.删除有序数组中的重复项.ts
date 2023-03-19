/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/* function removeDuplicates(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      for (let j = i; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1];
      }
      nums.length--;
      i--;
    }
  }
  return nums.length;
} */

function removeDuplicates(nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;
  let slow = 1;
  let fast = 1;
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
}
// @lc code=end
