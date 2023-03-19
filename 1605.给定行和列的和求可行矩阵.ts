/*
 * @lc app=leetcode.cn id=1605 lang=typescript
 *
 * [1605] 给定行和列的和求可行矩阵
 */

// @lc code=start
function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
  const n = rowSum.length;
  const m = colSum.length;
  const matrix: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(m).fill(0));
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    const v = Math.min(rowSum[i], colSum[j]);
    matrix[i][j] = v;
    rowSum[i] -= v;
    colSum[j] -= v;
    if (rowSum[i] === 0) {
      i++;
    }
    if (colSum[j] === 0) {
      j++;
    }
  }
  return matrix;
}
// @lc code=end
