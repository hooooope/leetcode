/*
 * @lc app=leetcode.cn id=1140 lang=typescript
 *
 * [1140] 石子游戏 II
 */

// @lc code=start
function stoneGameII(piles: number[]): number {
  const n = piles.length;
  // dp[i][j]表示先手从位置i开始取1～2*j堆石子能获得的最大数量
  const dp: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n + 1).fill(0));
  // 记录piles[i:n-1]的石子总数
  let sum = 0;
  for (let i = n - 1; i >= 0; i--) {
    sum += piles[i];
    for (let m = 1; m <= n; m++) {
      // 在位置i上取m堆石子，可以取完剩下的所有石子
      if (i + 2 * m >= n) {
        dp[i][m] = sum;
      } else {
        // 在位置i上取m堆石子，无法取完剩下的所有石子
        // 尝试取1~2*m堆石子，使当前获得的石子数量最大化
        for (let x = 1; x <= 2 * m; x++) {
          dp[i][m] = Math.max(dp[i][m], sum - dp[i + x][Math.max(x, m)]);
        }
      }
    }
  }
  return dp[0][1];
}
// @lc code=end
