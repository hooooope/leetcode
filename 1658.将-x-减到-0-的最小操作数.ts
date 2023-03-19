/*
 * @lc app=leetcode.cn id=1658 lang=typescript
 *
 * [1658] 将 x 减到 0 的最小操作数
 */

// @lc code=start
function minOperations(nums: number[], x: number): number {
  const n = nums.length;
  const sum = nums.reduce((a, b) => a + b, 0);
  let ret = n + 1;
  let left = -1;
  let right = 0;
  let leftSum = 0;
  let rightSum = sum;
  while (left < n) {
    if (left !== -1) {
      leftSum += nums[left];
    }
    while (leftSum + rightSum > x) {
      rightSum -= nums[right];
      right++;
    }
    if (leftSum + rightSum === x) {
      ret = Math.min(ret, left + 1 + n - right);
    }
    left++;
  }
  return ret > n ? -1 : ret;
}
// @lc code=end
