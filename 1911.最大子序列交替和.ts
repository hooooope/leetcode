/*
 * @lc app=leetcode.cn id=1911 lang=typescript
 *
 * [1911] 最大子序列交替和
 */

// @lc code=start
/* function maxAlternatingSum(nums: number[]): number {
  const n = nums.length;
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(2).fill(0));
  dp[0][0] = nums[0];
  dp[0][1] = 0;
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + nums[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - nums[i]);
  }
  return dp[n - 1][0];
} */

function maxAlternatingSum(nums: number[]): number {
  const n = nums.length;
  let even = nums[0];
  let odd = 0;
  for (let i = 1; i < n; i++) {
    even = Math.max(even, odd + nums[i]);
    odd = Math.max(odd, even - nums[i]);
  }
  return even;
}
// @lc code=end
