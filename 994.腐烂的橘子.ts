/*
 * @lc app=leetcode.cn id=994 lang=typescript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
function orangesRotting(grid: number[][]): number {
  const R = grid.length;
  const C = grid[0].length;
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];
  const queue: number[] = [];
  // key: 烂橘子的位置, value: 烂橘子的深度，即腐烂该橘子花费的时间
  const depth = new Map<number, number>();
  // 将烂橘子的位置存入队列
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (grid[r][c] === 2) {
        const code = r * C + c;
        queue.push(code);
        depth.set(code, 0);
      }
    }
  }
  let ret = 0;
  while (queue.length) {
    const code = queue.shift()!;
    const r = Math.floor(code / C);
    const c = code % C;
    for (let k = 0; k < 4; k++) {
      const nr = r + dr[k];
      const nc = c + dc[k];
      // 相邻位置在网格范围内且该橘子为新鲜橘子
      if (0 <= nr && nr < R && 0 <= nc && nc < C && grid[nr][nc] === 1) {
        const ncode = nr * C + nc;
        grid[nr][nc] = 2;
        queue.push(ncode);
        depth.set(ncode, depth.get(code)! + 1);
        ret = depth.get(ncode)!;
      }
    }
  }
  // 存在新鲜橘子没有被腐烂，则返回-1
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (grid[r][c] === 1) {
        return -1;
      }
    }
  }
  return ret;
}
// @lc code=end
