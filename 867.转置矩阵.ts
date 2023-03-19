/*
 * @lc app=leetcode.cn id=867 lang=typescript
 *
 * [867] 转置矩阵
 */

// @lc code=start
function transpose(matrix: number[][]): number[][] {
  const row = matrix[0].length;
  const col = matrix.length;
  const ret: number[][] = new Array(row)
    .fill(0)
    .map(() => new Array(col).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      ret[j][i] = matrix[i][j];
    }
  }
  return ret;
}
// @lc code=end
