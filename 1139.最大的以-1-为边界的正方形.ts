/*
 * @lc app=leetcode.cn id=1139 lang=typescript
 *
 * [1139] 最大的以 1 为边界的正方形
 */

// @lc code=start
function largest1BorderedSquare(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  // right[i][j]表示grid[i][j]右侧有多少个1（包含grid[i][j]）
  // right[m+1][n+1]，可以减少最后一行和最后一列的边界判断
  const right = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  const down = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  let maxBorder = 0;
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (grid[i][j] === 1) {
        right[i][j] = right[i][j + 1] + 1;
        down[i][j] = down[i + 1][j] + 1;
        let border = Math.min(right[i][j], down[i][j]);
        while (
          right[i + border - 1][j] < border ||
          down[i][j + border - 1] < border
        ) {
          border--;
        }
        maxBorder = Math.max(maxBorder, border);
      }
    }
  }
  return maxBorder * maxBorder;
}
// @lc code=end
