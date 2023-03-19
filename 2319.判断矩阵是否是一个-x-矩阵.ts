/*
 * @lc app=leetcode.cn id=2319 lang=typescript
 *
 * [2319] 判断矩阵是否是一个 X 矩阵
 */

// @lc code=start
function checkXMatrix(grid: number[][]): boolean {
  const n = grid.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 对角线
      if (i === j || i + j === n - 1) {
        if (grid[i][j] === 0) {
          return false;
        }
      } else if (grid[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}
// @lc code=end
