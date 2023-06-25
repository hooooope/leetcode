/*
 * @lc app=leetcode.cn id=2485 lang=typescript
 *
 * [2485] 找出中枢整数
 */

// @lc code=start
function pivotInteger(n: number): number {
  const t = (n * n + n) / 2;
  const x = Math.floor(Math.sqrt(t));
  return x * x === t ? x : -1;
}
// @lc code=end
