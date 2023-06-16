/*
 * @lc app=leetcode.cn id=2481 lang=typescript
 *
 * [2481] 分割圆的最少切割次数
 */

// @lc code=start
function numberOfCuts(n: number): number {
  if (n === 1) {
    return 0;
  }
  return n % 2 === 0 ? n / 2 : n;
}
// @lc code=end
