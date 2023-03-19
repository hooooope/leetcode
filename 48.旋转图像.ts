/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
// 辅助数组
/* function rotate(matrix: number[][]): void {
  const n = matrix.length;
  const newMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newMatrix[j][n - 1 - i] = matrix[i][j];
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = newMatrix[i][j];
    }
  }
} */

// 翻转代替旋转
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  // 水平翻转
  for (let i = 0; i < n >> 1; i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - 1 - i][j]] = [
        matrix[n - 1 - i][j],
        matrix[i][j],
      ];
    }
  }
  // 主对角线翻转
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

// 按层翻转
/* function rotate(matrix: number[][]): void {
  const process = (
    matrix: number[][],
    r1: number,
    c1: number,
    r2: number,
    c2: number
  ) => {
    for (let i = 0; i < c2 - c1; i++) {
      const temp = matrix[r1][c1 + i];
      matrix[r1][c1 + i] = matrix[r2 - i][c1];
      matrix[r2 - i][c1] = matrix[r2][c2 - i];
      matrix[r2][c2 - i] = matrix[r1 + i][c2];
      matrix[r1 + i][c2] = temp;
    }
  };
  const n = matrix.length;
  let r1 = 0;
  let c1 = 0;
  let r2 = n - 1;
  let c2 = n - 1;
  while (r1 <= r2 && c1 <= c2) {
    process(matrix, r1++, c1++, r2--, c2--);
  }
} */
// @lc code=end
