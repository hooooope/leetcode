/*
 * @lc app=leetcode.cn id=695 lang=typescript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
// 深度优先
/* function maxAreaOfIsland(grid: number[][]): number {
  const dfs = (grid: number[][], i: number, j: number) => {
    const m = grid.length;
    const n = grid[0].length;
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] !== 1) {
      return 0;
    }
    grid[i][j] = 2;
    let ret = 1;
    const di = [-1, 1, 0, 0];
    const dj = [0, 0, -1, 1];
    for (let index = 0; index < 4; index++) {
      ret += dfs(grid, i + di[index], j + dj[index]);
    }
    return ret;
  };
  let ret = 0;
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ret = Math.max(ret, dfs(grid, i, j));
    }
  }
  return ret;
} */

// 深度优先+栈
/* function maxAreaOfIsland(grid: number[][]): number {
  let ret = 0;
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let cur = 0;
      // 也可以只使用一个栈，stack[i] = row * n + col
      const stacki: number[] = [];
      const stackj: number[] = [];
      stacki.push(i);
      stackj.push(j);
      while (stacki.length) {
        const curi = stacki.pop()!;
        const curj = stackj.pop()!;
        if (
          curi < 0 ||
          curj < 0 ||
          curi >= m ||
          curj >= n ||
          grid[curi][curj] !== 1
        ) {
          continue;
        }
        cur++;
        grid[curi][curj] = 2;
        const di = [-1, 1, 0, 0];
        const dj = [0, 0, -1, 1];
        for (let index = 0; index < 4; index++) {
          stacki.push(curi + di[index]);
          stackj.push(curj + dj[index]);
        }
      }
      ret = Math.max(ret, cur);
    }
  }
  return ret;
} */

// 广度优先
function maxAreaOfIsland(grid: number[][]): number {
  let ret = 0;
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let cur = 0;
      // 也可以只使用一个队列，queue[i] = row * n + col
      const queuei: number[] = [];
      const queuej: number[] = [];
      queuei.push(i);
      queuej.push(j);
      while (queuei.length) {
        const curi = queuei.shift()!;
        const curj = queuej.shift()!;
        if (
          curi < 0 ||
          curj < 0 ||
          curi >= m ||
          curj >= n ||
          grid[curi][curj] !== 1
        ) {
          continue;
        }
        cur++;
        grid[curi][curj] = 2;
        const di = [-1, 1, 0, 0];
        const dj = [0, 0, -1, 1];
        for (let index = 0; index < 4; index++) {
          queuei.push(curi + di[index]);
          queuej.push(curj + dj[index]);
        }
      }
      ret = Math.max(ret, cur);
    }
  }
  return ret;
}
// @lc code=end
