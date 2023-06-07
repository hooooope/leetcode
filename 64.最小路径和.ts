/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
// 暴力递归
/* function minPathSum(grid: number[][]): number {
  const process = (x: number, y: number, s: number): number => {
    if (x >= m || y >= n) {
      return Infinity;
    }
    if (x === m - 1 && y === n - 1) {
      return s + grid[x][y];
    }
    return Math.min(
      process(x + 1, y, s + grid[x][y]),
      process(x, y + 1, s + grid[x][y])
    );
  };
  const m = grid.length;
  const n = grid[0].length;
  return process(0, 0, 0);
} */

// 严格表结构
function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const dp: number[][] = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(Infinity));
  dp[m - 1][n - 1] = grid[m - 1][n - 1];
  for (let i = m - 2; i >= 0; i--) {
    dp[i][n - 1] = grid[i][n - 1] + dp[i + 1][n - 1];
  }
  for (let j = n - 2; j >= 0; j--) {
    dp[m - 1][j] = grid[m - 1][j] + dp[m - 1][j + 1];
  }
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  return dp[0][0];
}
// @lc code=end
