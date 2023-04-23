/*
 * @lc app=leetcode.cn id=1105 lang=typescript
 *
 * [1105] 填充书架
 */

// @lc code=start
// 动态规划
function minHeightShelves(books: number[][], shelfWidth: number): number {
  const n = books.length;
  // dp[i]表示放下前i本书所用的最小高度
  const dp: number[] = new Array(n + 1).fill(1000000);
  // 初始化dp[0]为零，表示没有书是高度为零
  dp[0] = 0;
  // 当我们要放置前i+1本书的时候
  for (let i = 0; i < n; i++) {
    let maxHeight = 0;
    let currentWidth = 0;
    // 假定前j本书放在上面的书架中，其中j<i+1
    // 前j本书放好后剩余的书放在最后一层书架上
    for (let j = i; j >= 0; j--) {
      currentWidth += books[j][0];
      if (currentWidth > shelfWidth) {
        break;
      }
      maxHeight = Math.max(maxHeight, books[j][1]);
      // 这一层书架的高度是这部分书的高度最大值
      dp[i + 1] = Math.min(dp[i + 1], dp[j] + maxHeight);
    }
  }
  return dp[n];
}
// @lc code=end
