/*
 * @lc app=leetcode.cn id=441 lang=typescript
 *
 * [441] 排列硬币
 */

// @lc code=start
/* function arrangeCoins(n: number): number {
  let ret = 0;
  let i = 1;
  while (n > 0) {
    n -= i++;
    ret++;
  }
  return n === 0 ? ret : ret - 1;
} */

// 二分法
/* function arrangeCoins(n: number): number {
  let left = 1;
  let right = n;
  while (left < right) {
    const mid = left + ((right - left + 1) >> 1);
    // 等差数列求和公式
    if ((mid * (mid + 1)) / 2 <= n) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
} */

// 数学法
function arrangeCoins(n: number): number {
  return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
}
// @lc code=end
