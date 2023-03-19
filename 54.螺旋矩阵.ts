/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
// 模拟
function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;
  const total = m * n;
  const ret: number[] = new Array(total).fill(0);
  const visited: boolean[][] = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(false));
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let row = 0;
  let col = 0;
  let directionIndex = 0;
  for (let i = 0; i < total; i++) {
    ret[i] = matrix[row][col];
    visited[row][col] = true;
    const nextRow = row + directions[directionIndex][0];
    const nextCol = col + directions[directionIndex][1];
    if (
      !(
        0 <= nextRow &&
        nextRow < m &&
        0 <= nextCol &&
        nextCol < n &&
        !visited[nextRow][nextCol]
      )
    ) {
      directionIndex = (directionIndex + 1) % 4;
    }
    row += directions[directionIndex][0];
    col += directions[directionIndex][1];
  }
  return ret;
}

// 按层模拟
/* function spiralOrder(matrix: number[][]): number[] {
  // 顺时针遍历以(x1,y1)为左上角，以(x2,y2)为右下角的矩形边框
  const process = (
    matrix: number[][],
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    ret: number[]
  ) => {
    if (x1 === x2) {
      for (let i = y1; i <= y2; i++) {
        ret.push(matrix[x1][i]);
      }
    } else if (y1 === y2) {
      for (let i = x1; i <= x2; i++) {
        ret.push(matrix[i][y1]);
      }
    } else {
      let x = x1;
      let y = y1;
      while (y !== y2) {
        ret.push(matrix[x][y++]);
      }
      while (x !== x2) {
        ret.push(matrix[x++][y]);
      }
      while (y !== y1) {
        ret.push(matrix[x][y--]);
      }
      while (x !== x1) {
        ret.push(matrix[x--][y]);
      }
    }
  };
  const m = matrix.length;
  const n = matrix[0].length;
  const ret: number[] = [];
  let x1 = 0;
  let y1 = 0;
  let x2 = m - 1;
  let y2 = n - 1;
  while (x1 <= x2 && y1 <= y2) {
    process(matrix, x1++, y1++, x2--, y2--, ret);
  }
  return ret;
} */
// @lc code=end
