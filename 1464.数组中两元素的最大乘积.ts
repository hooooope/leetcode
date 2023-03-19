/*
 * @lc app=leetcode.cn id=1464 lang=typescript
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
/* function maxProduct(nums: number[]): number {
  const sortedNums = nums.sort((a, b) => b - a);
  return (sortedNums[0] - 1) * (sortedNums[1] - 1);
} */

function maxProduct(nums: number[]): number {
  let m1 = 0,
    m2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > m1) {
      m2 = m1;
      m1 = nums[i];
    } else if (nums[i] > m2) {
      m2 = nums[i];
    }
  }
  return (m1 - 1) * (m2 - 1);
}
// @lc code=end
