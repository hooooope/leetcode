/*
 * @lc app=leetcode.cn id=566 lang=typescript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/* function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  if (r * c !== mat.length * mat[0].length) {
    return mat;
  }
  const nums: number[] = [];
  const ret: number[][] = new Array(r).fill(0).map(() => new Array(c).fill(0));
  for (const row of mat) {
    for (const col of row) {
      nums.push(col);
    }
  }
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      ret[i][j] = nums[i * c + j];
    }
  }
  return ret;
} */

function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  if (r * c !== m * n) {
    return mat;
  }
  const ret: number[][] = new Array(r).fill(0).map(() => new Array(c).fill(0));
  for (let i = 0; i < m * n; i++) {
    ret[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n];
  }
  return ret;
}
// @lc code=end
