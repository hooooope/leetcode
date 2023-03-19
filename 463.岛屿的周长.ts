/*
 * @lc app=leetcode.cn id=463 lang=typescript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
// 迭代
/* function islandPerimeter(grid: number[][]): number {
  let ret = 0;
  const row = grid.length;
  const col = grid[0].length;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j]) {
        for (let k = 0; k < 4; k++) {
          const tx = i + dx[k];
          const ty = j + dy[k];
          if (tx < 0 || tx >= row || ty < 0 || ty >= col || !grid[tx][ty]) {
            ret++;
          }
        }
      }
    }
  }
  return ret;
} */

// DFS
function islandPerimeter(grid: number[][]): number {
  let ret = 0;
  const row = grid.length;
  const col = grid[0].length;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const dfs = (x: number, y: number): number => {
    if (x < 0 || x >= row || y < 0 || y >= col || !grid[x][y]) {
      return 1;
    }
    if (grid[x][y] === 2) {
      return 0;
    }
    grid[x][y] = 2;
    let ret = 0;
    for (let k = 0; k < 4; k++) {
      const tx = x + dx[k];
      const ty = y + dy[k];
      ret += dfs(tx, ty);
    }
    return ret;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        ret += dfs(i, j);
      }
    }
  }
  return ret;
}
// @lc code=end
