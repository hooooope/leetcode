/*
 * @lc app=leetcode.cn id=718 lang=typescript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
function findLength(nums1: number[], nums2: number[]): number {
  let ret = 0;
  const m = nums1.length;
  const n = nums2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = nums1[i - 1] === nums2[j - 1] ? dp[i - 1][j - 1] + 1 : 0;
      ret = Math.max(ret, dp[i][j]);
    }
  }
  return ret;
}
// @lc code=end
