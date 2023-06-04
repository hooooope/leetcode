/*
 * @lc app=leetcode.cn id=2460 lang=typescript
 *
 * [2460] 对数组执行操作
 */

// @lc code=start
function applyOperations(nums: number[]): number[] {
  const n = nums.length;
  for (let i = 0, j = 0; i < n; i++) {
    if (i + 1 < n && nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  return nums;
}
// @lc code=end
