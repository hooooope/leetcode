/*
 * @lc app=leetcode.cn id=688 lang=typescript
 *
 * [688] 骑士在棋盘上的概率
 */

// @lc code=start
function knightProbability(
  n: number,
  k: number,
  row: number,
  column: number
): number {
  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  const dp: number[][][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(k + 1).fill(0)));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j][0] = 1;
    }
  }
  for (let h = 1; h <= k; h++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (const [dr, dc] of moves) {
          if (i + dr >= 0 && i + dr < n && j + dc >= 0 && j + dc < n) {
            dp[i][j][h] += dp[i + dr][j + dc][h - 1];
          }
        }
        dp[i][j][h] /= 8;
      }
    }
  }
  return dp[row][column][k];
}
// @lc code=end
