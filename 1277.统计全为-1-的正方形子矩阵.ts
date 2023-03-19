/*
 * @lc app=leetcode.cn id=1277 lang=typescript
 *
 * [1277] 统计全为 1 的正方形子矩阵
 */

// @lc code=start
function countSquares(matrix: number[][]): number {
  let ret = 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        ret += dp[i][j];
      }
    }
  }
  return ret;
}
// @lc code=end
