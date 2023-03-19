/*
 * @lc app=leetcode.cn id=263 lang=typescript
 *
 * [263] 丑数
 */

// @lc code=start
function isUgly(n: number): boolean {
  if (n <= 0) {
    return false;
  }
  const factors = [2, 3, 5];
  for (const factor of factors) {
    while (n % factor === 0) {
      n /= factor;
    }
  }
  return n === 1;
}
// @lc code=end
