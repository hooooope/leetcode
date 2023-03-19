/*
 * @lc app=leetcode.cn id=1572 lang=typescript
 *
 * [1572] 矩阵对角线元素的和
 */

// @lc code=start
/* function diagonalSum(mat: number[][]): number {
  let ret = 0;
  const n = mat.length;
  for (let i = 0, j = n - 1; i < n; i++, j--) {
    ret += mat[i][i];
    ret += mat[i][j];
  }
  if (n % 2 === 1) {
    const mid = n >> 1;
    ret -= mat[mid][mid];
  }
  return ret;
} */

function diagonalSum(mat: number[][]): number {
  let ret = 0;
  const n = mat.length,
    mid = n >> 1;
  for (let i = 0, j = n - 1; i < n; i++, j--) {
    ret += mat[i][i] + mat[i][j];
  }
  // 奇数 & 1 = 1，偶数 & 1 = 0
  // 矩阵边长为奇数时，需要减去对角线上重复的数字
  ret -= mat[mid][mid] * (n & 1);
  return ret;
}
// @lc code=end
