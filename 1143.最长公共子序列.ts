/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  // dp[i][j]表示text1[0...i-1]和text2[0...j-1]的最长公共子序列的长度
  // 考虑动态规划的边界情况：
  // 当i=0时，text1[0...i-1]为空，空字符串和任何字符串的最长公共子序列的长度都是0，因此对任意0<=j<=n，有dp[0][j]=0
  // 当j=0时，text2[0...j-1]为空，同理可得，对任意0<=i<=m，有dp[i][0]=0
  // 因此动态规划的边界情况是：当i=0或j=0时，dp[i][j]=0
  const dp: number[][] = new Array(m + 1)
    .fill(0)
    .map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    const c1 = text1[i - 1];
    for (let j = 1; j <= n; j++) {
      const c2 = text2[j - 1];
      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}
// @lc code=end
