/*
 * @lc app=leetcode.cn id=240 lang=typescript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  let x = 0;
  let y = n - 1;
  while (x < m && y >= 0) {
    if (matrix[x][y] < target) {
      x++;
    } else if (matrix[x][y] > target) {
      y--;
    } else {
      return true;
    }
  }
  return false;
}
// @lc code=end
