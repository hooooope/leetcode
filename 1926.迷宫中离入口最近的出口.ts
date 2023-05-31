/*
 * @lc app=leetcode.cn id=1926 lang=typescript
 *
 * [1926] 迷宫中离入口最近的出口
 */

// @lc code=start
// BFS
function nearestExit(maze: string[][], entrance: number[]): number {
  const m = maze.length;
  const n = maze[0].length;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const q: [number, number, number][] = [];
  q.push([entrance[0], entrance[1], 0]);
  maze[entrance[0]][entrance[1]] = "+";
  while (q.length) {
    const [cx, cy, d] = q.shift()!;
    for (let k = 0; k < 4; k++) {
      const nx = cx + dx[k];
      const ny = cy + dy[k];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && maze[nx][ny] === ".") {
        if (nx === 0 || nx === m - 1 || ny === 0 || ny === n - 1) {
          return d + 1;
        }
        maze[nx][ny] = "+";
        q.push([nx, ny, d + 1]);
      }
    }
  }
  return -1;
}
// @lc code=end
