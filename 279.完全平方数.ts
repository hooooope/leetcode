/*
 * @lc app=leetcode.cn id=279 lang=typescript
 *
 * [279] 完全平方数
 */

// @lc code=start
// 暴力
/* function numSquares(n: number): number {
  const process = (n: number) => {
    if (n <= 0) {
      return 0;
    }
    let min = Number.MAX_VALUE;
    for (let i = 1; i * i <= n; i++) {
      min = Math.min(min, process(n - i * i));
    }
    return min + 1;
  };
  return process(n);
} */

// 记忆化搜索
/* function numSquares(n: number): number {
  const process = (n: number, dp: number[]) => {
    if (n <= 0) {
      return 0;
    }
    if (dp[n] === -1) {
      let min = Number.MAX_VALUE;
      for (let i = 1; i * i <= n; i++) {
        min = Math.min(min, process(n - i * i, dp));
      }
      dp[n] = min + 1;
    }
    return dp[n];
  };
  const dp: number[] = new Array(n + 1).fill(-1);
  return process(n, dp);
} */

// 严格表结构
function numSquares(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, dp[i - j * j]);
    }
    dp[i] = min + 1;
  }
  return dp[n];
}
// @lc code=end
