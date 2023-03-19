/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
// time limit exceeded
/* function maxProfit(prices: number[]): number {
  let ret = 0;
  const n = prices.length;
  for (let i = 0; i < n; i++) {
    const inPrice = prices[i];
    for (let j = i + 1; j < n; j++) {
      const outPrice = prices[j];
      ret = Math.max(ret, outPrice - inPrice);
    }
  }
  return ret;
} */

/* function maxProfit(prices: number[]): number {
  let ret = 0;
  let minPrice = Number.MAX_VALUE;
  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > ret) {
      ret = price - minPrice;
    }
  }
  return ret;
} */

function maxProfit(prices: number[]): number {
  let ret = 0;
  let minPrice = Number.MAX_VALUE;
  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    ret = Math.max(ret, price - minPrice);
  }
  return ret;
}
// @lc code=end
