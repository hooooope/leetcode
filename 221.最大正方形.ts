/*
 * @lc app=leetcode.cn id=221 lang=typescript
 *
 * [221] 最大正方形
 */

// @lc code=start
// 暴力法
/* function maximalSquare(matrix: string[][]): number {
  let maxSide = 0;
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "1") {
        maxSide = Math.max(maxSide, 1);
        const curMaxSide = Math.min(m - i, n - j);
        for (let k = 1; k < curMaxSide; k++) {
          let flag = true;
          if (matrix[i + k][j + k] === "0") {
            break;
          }
          for (let l = 0; l < k; l++) {
            if (matrix[i + k][j + l] === "0" || matrix[i + l][j + k] === "0") {
              flag = false;
              break;
            }
          }
          if (flag) {
            maxSide = Math.max(maxSide, k + 1);
          } else {
            break;
          }
        }
      }
    }
  }
  return maxSide * maxSide;
} */

// 动态规划
function maximalSquare(matrix: string[][]): number {
  let maxSide = 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "1") {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        maxSide = Math.max(maxSide, dp[i][j]);
      }
    }
  }
  return maxSide * maxSide;
}
// @lc code=end
