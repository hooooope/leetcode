/*
 * @lc app=leetcode.cn id=1335 lang=typescript
 *
 * [1335] 工作计划的最低难度
 */

// @lc code=start
// 动态规划
/* function minDifficulty(jobDifficulty: number[], d: number): number {
  const n = jobDifficulty.length;
  // 首先当工作份数小于d时，因为每天至少需要完成一份工作，所以此时无法制定工作计划
  if (n < d) {
    return -1;
  }
  // dp[i][j]表示前i+1天完成前j+1项工作的最小难度
  const dp: number[][] = new Array(d)
    .fill(0)
    .map(() => new Array(n).fill(0x3f3f3f3f));
  let max = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, jobDifficulty[i]);
    dp[0][i] = max;
  }
  // 前i+1天
  for (let i = 1; i < d; i++) {
    // 完成前j+1项工作
    for (let j = i; j < n; j++) {
      max = 0;
      // k为前i天完成的工作份数
      for (let k = j; k >= i; k--) {
        // max为第i+1天完成的最大工作强度
        // 即第i份工作到第j份工作的最大工作强度
        max = Math.max(max, jobDifficulty[k]);
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][k - 1] + max);
      }
    }
  }
  return dp[d - 1][n - 1];
} */

// 空间压缩（滚动数组）
function minDifficulty(jobDifficulty: number[], d: number): number {
  const n = jobDifficulty.length;
  if (n < d) {
    return -1;
  }
  let dp: number[] = new Array(n).fill(0);
  let max = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, jobDifficulty[i]);
    dp[i] = max;
  }
  for (let i = 1; i < d; i++) {
    const ndp = new Array(n).fill(0x3f3f3f3f);
    for (let j = i; j < n; j++) {
      max = 0;
      for (let k = j; k >= i; k--) {
        max = Math.max(max, jobDifficulty[k]);
        ndp[j] = Math.min(ndp[j], dp[k - 1] + max);
      }
    }
    dp = ndp;
  }
  return dp[n - 1];
}
// @lc code=end
