/*
 * @lc app=leetcode.cn id=2395 lang=typescript
 *
 * [2395] 和相等的子数组
 */

// @lc code=start
function findSubarrays(nums: number[]): boolean {
  const n = nums.length;
  const seen = new Set<number>();
  for (let i = 0; i < n - 1; i++) {
    const sum = nums[i] + nums[i + 1];
    if (seen.has(sum)) {
      return true;
    }
    seen.add(sum);
  }
  return false;
}
// @lc code=end
