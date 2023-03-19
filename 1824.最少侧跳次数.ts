/*
 * @lc app=leetcode.cn id=1824 lang=typescript
 *
 * [1824] 最少侧跳次数
 */

// @lc code=start
// 暴力递归法
/* function minSideJumps(obstacles: number[]): number {
  // 返回从第0点第2条跑道到达第n点任意跑道的最少侧跳次数
  const process = (i: number, j: number): number => {
    // base case
    if (i === 0) {
      if (j === 1) {
        return 0;
      }
      if (j === 0 || j === 2) {
        return 1;
      }
    }
    if (obstacles[i] - 1 === j) {
      return Number.MAX_VALUE;
    }
    let p = process(i - 1, j);
    // 前一个位置有障碍
    if (p === Number.MAX_VALUE) {
      // 则从其中两条跑道中，选择侧跳次数最少的跑道，侧跳一次到达当前跑道
      p = Math.min(process(i, (j + 1) % 3), process(i, (j + 2) % 3)) + 1;
    }
    // 前一个位置没有障碍则不需要增加侧跳次数
    return p;
  };
  const n = obstacles.length - 1;
  return Math.min(process(n, 0), process(n, 1), process(n, 2));
} */

// 记忆化搜索
/* function minSideJumps(obstacles: number[]): number {
  const process = (i: number, j: number, dp: number[][]): number => {
    if (dp[i][j] !== -1) {
      return dp[i][j];
    } else if (obstacles[i] - 1 === j) {
      return (dp[i][j] = Number.MAX_VALUE);
    }
    dp[i][j] = process(i - 1, j, dp);
    if (dp[i][j] === Number.MAX_VALUE) {
      dp[i][j] =
        Math.min(process(i, (j + 1) % 3, dp), process(i, (j + 2) % 3, dp)) + 1;
    }
    return dp[i][j];
  };
  const n = obstacles.length;
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(3).fill(-1));
  dp[0][0] = 1;
  dp[0][1] = 0;
  dp[0][2] = 1;
  return Math.min(
    process(n - 1, 0, dp),
    process(n - 1, 1, dp),
    process(n - 1, 2, dp)
  );
} */

// 严格表结构法
/* function minSideJumps(obstacles: number[]): number {
  const n = obstacles.length;
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(3).fill(-1));
  dp[0][0] = 1;
  dp[0][1] = 0;
  dp[0][2] = 1;
  for (let i = 1; i < n; i++) {
    let minCnt = Number.MAX_VALUE;
    for (let j = 0; j < 3; j++) {
      if (obstacles[i] - 1 === j) {
        dp[i][j] = Number.MAX_VALUE;
      } else {
        dp[i][j] = dp[i - 1][j];
        minCnt = Math.min(minCnt, dp[i][j]);
      }
    }
    for (let j = 0; j < 3; j++) {
      if (obstacles[i] - 1 === j) {
        continue;
      }
      dp[i][j] = Math.min(dp[i][j], minCnt + 1);
    }
  }
  return Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]);
} */

// 严格表结构法（维度优化）
function minSideJumps(obstacles: number[]): number {
  const n = obstacles.length;
  const dp = [1, 0, 1];
  for (let i = 1; i < n; i++) {
    let minCnt = Number.MAX_VALUE;
    for (let j = 0; j < 3; j++) {
      if (obstacles[i] - 1 === j) {
        dp[j] = Number.MAX_VALUE;
      } else {
        minCnt = Math.min(minCnt, dp[j]);
      }
    }
    for (let j = 0; j < 3; j++) {
      if (obstacles[i] - 1 === j) {
        continue;
      }
      dp[j] = Math.min(dp[j], minCnt + 1);
    }
  }
  return Math.min(dp[0], dp[1], dp[2]);
}
// @lc code=end
