/*
 * @lc app=leetcode.cn id=1091 lang=typescript
 *
 * [1091] 二进制矩阵中的最短路径
 */

// @lc code=start
// DFS(Time Limit Exceeded)
/* function shortestPathBinaryMatrix(grid: number[][]): number {
  const n = grid.length;
  const seen: boolean[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(false));
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  const process = (
    x: number,
    y: number,
    seen: boolean[][],
    distance: number
  ): number => {
    if (x < 0 || x >= n || y < 0 || y >= n || seen[x][y] || grid[x][y] === 1) {
      return Infinity;
    }
    if (x === n - 1 && y === n - 1) {
      return distance;
    }
    let ret = Infinity;
    seen[x][y] = true;
    for (let i = 0; i < 8; i++) {
      ret = Math.min(ret, process(x + dx[i], y + dy[i], seen, distance + 1));
    }
    seen[x][y] = false;
    return ret;
  };
  const ret = process(0, 0, seen, 1);
  return ret === Infinity ? -1 : ret;
} */

// BFS
function shortestPathBinaryMatrix(grid: number[][]): number {
  if (grid[0][0] === 1) {
    return -1;
  }
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  const n = grid.length;
  const dist: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(Infinity));
  dist[0][0] = 1;
  const queue: [number, number][] = [];
  queue.push([0, 0]);
  while (queue.length) {
    const [x, y] = queue.shift()!;
    if (x === n - 1 && y === n - 1) {
      return dist[x][y];
    }
    for (let i = 0; i < 8; i++) {
      if (x + dx[i] < 0 || x + dx[i] >= n || y + dy[i] < 0 || y + dy[i] >= n) {
        continue;
      }
      if (
        grid[x + dx[i]][y + dy[i]] === 1 ||
        dist[x + dx[i]][y + dy[i]] <= dist[x][y] + 1
      ) {
        continue;
      }
      dist[x + dx[i]][y + dy[i]] = dist[x][y] + 1;
      queue.push([x + dx[i], y + dy[i]]);
    }
  }
  return -1;
}
// @lc code=end
