/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
// 模拟
/* function generateMatrix(n: number): number[][] {
  const ret: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let row = 0;
  let col = 0;
  let directionIndex = 0;
  for (let i = 1; i <= n * n; i++) {
    ret[row][col] = i;
    const nextRow = row + directions[directionIndex][0];
    const nextCol = col + directions[directionIndex][1];
    if (
      !(
        0 <= nextRow &&
        nextRow < n &&
        0 <= nextCol &&
        nextCol < n &&
        !ret[nextRow][nextCol]
      )
    ) {
      directionIndex = (directionIndex + 1) % 4;
    }
    row += directions[directionIndex][0];
    col += directions[directionIndex][1];
  }
  return ret;
} */

// 按层模拟
function generateMatrix(n: number): number[][] {
  const ret: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let x = 1;
  let row1 = 0;
  let col1 = 0;
  let row2 = n - 1;
  let col2 = n - 1;
  while (row1 <= row2 && col1 <= col2) {
    for (let i = col1; i <= col2; i++) {
      ret[row1][i] = x++;
    }
    for (let i = row1 + 1; i <= row2; i++) {
      ret[i][col2] = x++;
    }
    if (row1 < row2 && col1 < col2) {
      for (let i = col2 - 1; i >= col1; i--) {
        ret[row2][i] = x++;
      }
      for (let i = row2 - 1; i > row1; i--) {
        ret[i][col1] = x++;
      }
    }
    row1++;
    col1++;
    row2--;
    col2--;
  }
  return ret;
}
// @lc code=end
