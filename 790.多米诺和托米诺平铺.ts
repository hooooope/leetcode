/*
 * @lc app=leetcode.cn id=790 lang=typescript
 *
 * [790] 多米诺和托米诺平铺
 */

// @lc code=start
function numTilings(n: number): number {
  const mod = 1e9 + 7;
  // 在第i列前面的正方形都被瓷砖覆盖，在第i列后面的正方形都没有被瓷砖覆盖（i从1开始计数）。那么第i列的正方形有四种被覆盖的情况：
  // 一个正方形都没有被覆盖，记为状态0
  // 只有上方的正方形被覆盖，记为状态1
  // 只有下方的正方形被覆盖，记为状态2
  // 上下两个正方形都被覆盖，记为状态3
  // 使用dp[i][s]表示平铺到第i列时，各个状态s对应的平铺方法数量
  const dp: number[][] = new Array(n + 1)
    .fill(0)
    .map(() => new Array(4).fill(0));
  dp[0][3] = 1;
  for (let i = 1; i <= n; i++) {
    dp[i][0] = dp[i - 1][3] % mod;
    dp[i][1] = dp[i - 1][0] + (dp[i - 1][2] % mod);
    dp[i][2] = dp[i - 1][0] + (dp[i - 1][1] % mod);
    dp[i][3] =
      (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][3]) % mod;
  }
  return dp[n][3];
}
// @lc code=end
