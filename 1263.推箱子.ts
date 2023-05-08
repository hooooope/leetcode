/*
 * @lc app=leetcode.cn id=1263 lang=typescript
 *
 * [1263] 推箱子
 */

// @lc code=start
// 图的广度优先搜索
function minPushBox(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const d = [-1, 0, 1, 0, -1];
  const dp: number[][] = new Array(m * n)
    .fill(0)
    .map(() => new Array(m * n).fill(Number.MAX_VALUE));
  const ok = (grid: string[][], x: number, y: number) => {
    const m = grid.length;
    const n = grid[0].length;
    return x >= 0 && y >= 0 && x < m && y < n && grid[x][y] !== "#";
  };
  let sx = -1,
    sy = -1,
    bx = -1,
    by = -1;
  let queue: number[][] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "S") {
        sx = i;
        sy = j;
      } else if (grid[i][j] === "B") {
        bx = i;
        by = j;
      }
    }
  }
  dp[sx * n + sy][bx * n + by] = 0;
  queue.push([sx * n + sy, bx * n + by]);
  while (queue.length) {
    const queue1: number[][] = [];
    while (queue.length) {
      const [s1, b1] = queue.shift()!;
      const sx1 = Math.floor(s1 / n),
        sy1 = s1 % n,
        bx1 = Math.floor(b1 / n),
        by1 = b1 % n;
      if (grid[bx1][by1] === "T") {
        // 箱子已经被推到目标处
        return dp[s1][b1];
      }
      for (let i = 0; i < 4; i++) {
        // 玩家向四个方向移动一个状态
        const sx2 = sx1 + d[i],
          sy2 = sy1 + d[i + 1],
          s2 = sx2 * n + sy2;
        if (!ok(grid, sx2, sy2)) {
          // 玩家位置不合法
          continue;
        }
        if (sx2 === bx1 && sy2 === by1) {
          // 推动箱子
          const bx2 = bx1 + d[i],
            by2 = by1 + d[i + 1],
            b2 = bx2 * n + by2;
          if (!ok(grid, bx2, by2) || dp[s2][b2] <= dp[s1][b1] + 1) {
            // 箱子位置不合法或状态已访问
            continue;
          }
          dp[s2][b2] = dp[s1][b1] + 1;
          queue1.push([s2, b2]);
        } else {
          if (dp[s2][b1] <= dp[s1][b1]) {
            // 状态已访问
            continue;
          }
          dp[s2][b1] = dp[s1][b1];
          queue.push([s2, b1]);
        }
      }
    }
    // 先求得未推动箱子之前的所有状态，再计算推动箱子之后的所有状态
    // 避免由于未计算为推动箱子之前的状态，导致推箱子一圈回到原点的情况仍被计入结果，造成结果偏大
    queue = queue1;
  }
  return -1;
}
// @lc code=end
