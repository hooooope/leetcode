/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
// 暴力递归法
/* function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const process = (r: number, c: number, obstacleGrid: number[][]) => {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    if (r >= m || c >= n) {
      return 0;
    }
    if (obstacleGrid[r][c] === 1) {
      return 0;
    }
    if (r === m - 1 && c === n - 1) {
      return 1;
    }
    return process(r + 1, c, obstacleGrid) + process(r, c + 1, obstacleGrid);
  };
  return process(0, 0, obstacleGrid);
} */

// 记忆化搜索法
/* function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const process = (
    r: number,
    c: number,
    obstacleGrid: number[][],
    dp: number[][]
  ) => {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    if (r >= m || c >= n) {
      return 0;
    }
    if (dp[r][c] !== -1) {
      return dp[r][c];
    }
    if (obstacleGrid[r][c] === 1) {
      dp[r][c] = 0;
    } else if (r === m - 1 && c === n - 1) {
      dp[r][c] = 1;
    } else {
      dp[r][c] =
        process(r + 1, c, obstacleGrid, dp) +
        process(r, c + 1, obstacleGrid, dp);
    }
    return dp[r][c];
  };
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(-1));
  return process(0, 0, obstacleGrid, dp);
} */

// 严格表结构法
/* function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[m - 1][n - 1] === 1) {
    return 0;
  }
  const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(-1));
  dp[m - 1][n - 1] = 1;
  // 初始化最后一列
  for (let i = m - 2; i >= 0; i--) {
    dp[i][n - 1] = obstacleGrid[i][n - 1] === 0 ? dp[i + 1][n - 1] : 0;
  }
  // 初始化最后一行
  for (let i = n - 2; i >= 0; i--) {
    dp[m - 1][i] = obstacleGrid[m - 1][i] === 0 ? dp[m - 1][i + 1] : 0;
  }
  // 初始化普遍区域
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dp[i][j] = obstacleGrid[i][j] === 0 ? dp[i + 1][j] + dp[i][j + 1] : 0;
    }
  }
  return dp[0][0];
} */

// 严格表结构法（空间压缩）
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[m - 1][n - 1] === 1) {
    return 0;
  }
  const dp: number[] = new Array(n).fill(1);
  for (let i = n - 2; i >= 0; i--) {
    dp[i] = obstacleGrid[m - 1][i] === 0 ? dp[i + 1] : 0;
  }
  for (let i = m - 2; i >= 0; i--) {
    dp[n - 1] = obstacleGrid[i][n - 1] === 0 ? dp[n - 1] : 0;
    for (let j = n - 2; j >= 0; j--) {
      dp[j] = obstacleGrid[i][j] === 0 ? dp[j] + dp[j + 1] : 0;
    }
  }
  return dp[0];
}
// @lc code=end
