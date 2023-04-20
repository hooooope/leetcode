/*
 * @lc app=leetcode.cn id=2413 lang=typescript
 *
 * [2413] 最小偶倍数
 */

// @lc code=start
function smallestEvenMultiple(n: number): number {
  return n % 2 === 0 ? n : 2 * n;
}
// @lc code=end
