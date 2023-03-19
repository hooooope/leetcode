/*
 * @lc app=leetcode.cn id=883 lang=typescript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
function projectionArea(grid: number[][]): number {
  const n = grid.length;
  let xy = 0;
  let yz = 0;
  let zx = 0;
  for (let i = 0; i < n; i++) {
    let x = 0;
    let y = 0;
    let z = 0;
    for (let j = 0; j < n; j++) {
      grid[i][j] !== 0 && x++;
      y = Math.max(y, grid[i][j]);
      z = Math.max(z, grid[j][i]);
    }
    xy += x;
    yz += y;
    zx += z;
  }
  return xy + yz + zx;
}
// @lc code=end
