/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
function rob(nums: number[]): number {
  const n = nums.length;
  if (n === 1) {
    return nums[0];
  }
  if (n === 2) {
    return Math.max(nums[0], nums[1]);
  }
  return Math.max(robRange(nums, 0, n - 2), robRange(nums, 1, n - 1));
}
function robRange(nums: number[], start: number, end: number) {
  let first = nums[start];
  let second = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    const temp = second;
    second = Math.max(nums[i] + first, second);
    first = temp;
  }
  return second;
}
// @lc code=end
