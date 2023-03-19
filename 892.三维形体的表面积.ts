/*
 * @lc app=leetcode.cn id=892 lang=typescript
 *
 * [892] 三维形体的表面积
 */

// @lc code=start
function surfaceArea(grid: number[][]): number {
  const dr = [0, 1, 0, -1];
  const dc = [1, 0, -1, 0];
  const N = grid.length;
  let ret = 0;
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (grid[r][c] > 0) {
        ret += 2;
        for (let k = 0; k < 4; k++) {
          const nr = r + dr[k];
          const nc = c + dc[k];
          let nv = 0;
          if (nr >= 0 && nr < N && nc >= 0 && nc < N) {
            nv = grid[nr][nc];
          }
          ret += Math.max(0, grid[r][c] - nv);
        }
      }
    }
  }
  return ret;
}
// @lc code=end
