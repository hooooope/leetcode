/*
 * @lc app=leetcode.cn id=2517 lang=typescript
 *
 * [2517] 礼盒的最大甜蜜度
 */

// @lc code=start
// 贪心+二分查找
function maximumTastiness(price: number[], k: number): number {
  const check = (price: number[], k: number, tastiness: number) => {
    let prev = -Number.MAX_VALUE / 2;
    let cnt = 0;
    for (const p of price) {
      if (p - prev >= tastiness) {
        cnt++;
        prev = p;
      }
    }
    return cnt >= k;
  };
  price.sort((a, b) => a - b);
  let left = 0;
  let right = price[price.length - 1] - price[0];
  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2);
    if (check(price, k, mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
// @lc code=end
