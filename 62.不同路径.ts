/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
// 暴力递归法
/* function uniquePaths(m: number, n: number): number {
  const process = (r: number, c: number, m: number, n: number) => {
    if (r >= m || c >= n) {
      return 0;
    }
    if (r === m - 1 && c === n - 1) {
      return 1;
    }
    return process(r, c + 1, m, n) + process(r + 1, c, m, n);
  };
  return process(0, 0, m, n);
} */

// 记忆化搜索法
/* function uniquePaths(m: number, n: number): number {
  const process = (
    r: number,
    c: number,
    m: number,
    n: number,
    dp: number[][]
  ) => {
    if (r >= m || c >= n) {
      return 0;
    }
    if (dp[r][c] !== -1) {
      return dp[r][c];
    }
    if (r === m - 1 && c === n - 1) {
      dp[r][c] = 1;
    } else {
      dp[r][c] = process(r, c + 1, m, n, dp) + process(r + 1, c, m, n, dp);
    }
    return dp[r][c];
  };
  const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(-1));
  return process(0, 0, m, n, dp);
} */

// 严格表结构法
/* function uniquePaths(m: number, n: number): number {
  const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(-1));
  dp[m - 1][n - 1] = 1;
  // 初始化最后一列
  for (let i = m - 2; i >= 0; i--) {
    dp[i][n - 1] = dp[i + 1][n - 1];
  }
  // 初始化最后一行
  for (let i = n - 2; i >= 0; i--) {
    dp[m - 1][i] = dp[m - 1][i + 1];
  }
  // 初始化普遍区域
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
    }
  }
  return dp[0][0];
} */

// 严格表结构法（空间压缩）
/* function uniquePaths(m: number, n: number): number {
  const dp: number[] = new Array(n).fill(1);
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dp[j] = dp[j] + dp[j + 1];
    }
  }
  return dp[0];
} */

// 组合数学法
function uniquePaths(m: number, n: number): number {
  let ret = 1;
  for (let x = n, y = 1; y < m; x++, y++) {
    ret = Math.floor((ret * x) / y);
  }
  return ret;
}
// @lc code=end
