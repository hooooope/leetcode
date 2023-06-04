/*
 * @lc app=leetcode.cn id=714 lang=typescript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
// 动态规划
/* function maxProfit(prices: number[], fee: number): number {
  const n = prices.length;
  // 考虑到不能同时参与多笔交易，因此每天交易结束后只可能存在手里有一只股票或者没有股票的状态
  // 定义状态dp[i][0]表示第i天交易完后手里没有股票的最大利润
  // dp[i][1]表示第i天交易完后手里持有一只股票的最大利润（i从0开始）
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(2).fill(0));
  dp[0][1] = -prices[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[n - 1][0];
} */

// 动态规划（空间压缩）
/* function maxProfit(prices: number[], fee: number): number {
  const n = prices.length;
  let sell = 0;
  let buy = -prices[0];
  for (let i = 1; i < n; i++) {
    sell = Math.max(sell, buy + prices[i] - fee);
    buy = Math.max(buy, sell - prices[i]);
  }
  return sell;
} */

// 贪心
function maxProfit(prices: number[], fee: number): number {
  const n = prices.length;
  let profit = 0;
  let buy = prices[0] + fee;
  for (let i = 1; i < n; i++) {
    if (prices[i] + fee < buy) {
      buy = prices[i] + fee;
    } else if (prices[i] > buy) {
      profit += prices[i] - buy;
      buy = prices[i];
    }
  }
  return profit;
}

// @lc code=end
