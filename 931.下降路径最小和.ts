/*
 * @lc app=leetcode.cn id=931 lang=typescript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
// 暴力递归
/* function minFallingPathSum(matrix: number[][]): number {
  const process = (i: number, j: number): number => {
    if (j < 0 || j >= n) {
      return Infinity;
    }
    if (i === n - 1) {
      return matrix[i][j];
    }
    const p1 = process(i + 1, j - 1);
    const p2 = process(i + 1, j);
    const p3 = process(i + 1, j + 1);
    return matrix[i][j] + Math.min(p1, p2, p3);
  };
  let ret = Infinity;
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    ret = Math.min(ret, process(0, i));
  }
  return ret;
} */

// 动态规划
function minFallingPathSum(matrix: number[][]): number {
  let ret = Infinity;
  const n = matrix.length;
  const dp: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(Infinity));
  for (let i = 0; i < n; i++) {
    dp[n - 1][i] = matrix[n - 1][i];
  }
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      const p1 = j - 1 >= 0 ? dp[i + 1][j - 1] : Infinity;
      const p2 = dp[i + 1][j];
      const p3 = j + 1 < n ? dp[i + 1][j + 1] : Infinity;
      dp[i][j] = matrix[i][j] + Math.min(p1, p2, p3);
    }
  }
  for (let i = 0; i < n; i++) {
    ret = Math.min(ret, dp[0][i]);
  }
  return ret;
}
// @lc code=end
