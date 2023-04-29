/*
 * @lc app=leetcode.cn id=1033 lang=typescript
 *
 * [1033] 移动石子直到连续
 */

// @lc code=start
function numMovesStones(a: number, b: number, c: number): number[] {
  const x = Math.min(a, b, c);
  const z = Math.max(a, b, c);
  const y = a + b + c - x - z;
  const ret = [2, z - x - 2];
  if (z - x === 2) {
    // e.g: abc
    ret[0] = 0;
  } else if (z - y <= 2 || y - x <= 2) {
    // e.g: a_b_c、a_bc、ab_c
    ret[0] = 1;
  }
  return ret;
}
// @lc code=end
