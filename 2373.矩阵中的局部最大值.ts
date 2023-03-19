/*
 * @lc app=leetcode.cn id=2373 lang=typescript
 *
 * [2373] 矩阵中的局部最大值
 */

// @lc code=start
/* function largestLocal(grid: number[][]): number[][] {
  const n = grid.length;
  const ret: number[][] = new Array(n - 2)
    .fill(0)
    .map(() => new Array(n - 2).fill(0));
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      const centerRow = i + 1;
      const centerCol = j + 1;
      ret[i][j] = Math.max(
        grid[centerRow - 1][centerCol - 1],
        grid[centerRow - 1][centerCol],
        grid[centerRow - 1][centerCol + 1],
        grid[centerRow][centerCol - 1],
        grid[centerRow][centerCol],
        grid[centerRow][centerCol + 1],
        grid[centerRow + 1][centerCol - 1],
        grid[centerRow + 1][centerCol],
        grid[centerRow + 1][centerCol + 1]
      );
    }
  }
  return ret;
} */

function largestLocal(grid: number[][]): number[][] {
  const n = grid.length;
  const ret: number[][] = new Array(n - 2)
    .fill(0)
    .map(() => new Array(n - 2).fill(0));
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          ret[i][j] = Math.max(ret[i][j], grid[x][y]);
        }
      }
    }
  }
  return ret;
}
// @lc code=end
