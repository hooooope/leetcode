/*
 * @lc app=leetcode.cn id=1330 lang=typescript
 *
 * [1330] 翻转子数组得到最大的数组值
 */

// @lc code=start
// 分类讨论
function maxValueAfterReverse(nums: number[]): number {
  let value = 0;
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    value += Math.abs(nums[i] - nums[i + 1]);
  }
  let mx1 = 0;
  for (let i = 1; i < n - 1; i++) {
    mx1 = Math.max(
      mx1,
      Math.abs(nums[i + 1] - nums[0]) - Math.abs(nums[i + 1] - nums[i])
    );
    mx1 = Math.max(
      mx1,
      Math.abs(nums[n - 1] - nums[i - 1]) - Math.abs(nums[i] - nums[i - 1])
    );
  }
  let mx2 = -Infinity;
  let mn2 = Infinity;
  for (let i = 0; i < n - 1; i++) {
    const x = nums[i];
    const y = nums[i + 1];
    mx2 = Math.max(mx2, Math.min(x, y));
    mn2 = Math.min(mn2, Math.max(x, y));
  }
  return value + Math.max(mx1, 2 * (mx2 - mn2));
}
// @lc code=end
