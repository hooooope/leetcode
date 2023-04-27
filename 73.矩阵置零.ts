/*
 * @lc app=leetcode.cn id=73 lang=typescript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
// 使用标记数组
/* function setZeroes(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;
  const rows: boolean[] = new Array(m).fill(false);
  const cols: boolean[] = new Array(n).fill(false);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = cols[j] = true;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0;
      }
    }
  }
} */

// 使用两个标记变量
/* function setZeroes(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;
  let flagCol0 = false;
  let flagRow0 = false;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      flagCol0 = true;
      break;
    }
  }
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      flagRow0 = true;
      break;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (flagCol0) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  if (flagRow0) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
} */

// 使用一个标记变量
function setZeroes(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;
  let flagCol0 = false;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      flagCol0 = true;
    }
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }
  // 为了防止每一列的第一个元素被提前更新，我们需要从最后一行开始，倒序地处理矩阵元素
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
    if (flagCol0) {
      matrix[i][0] = 0;
    }
  }
}
// @lc code=end
