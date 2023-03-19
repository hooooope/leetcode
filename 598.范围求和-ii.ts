/*
 * @lc app=leetcode.cn id=598 lang=typescript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/* 
  init
  0 0 0
  0 0 0
  0 0 0

  [[1,1], [2,2]]
  2 1 0
  1 1 0
  0 0 0

  [[1,2], [2,1]]
  2 1 0
  1 0 0
  0 0 0
*/
function maxCount(m: number, n: number, ops: number[][]): number {
  let mina = m;
  let minb = n;
  for (const op of ops) {
    mina = Math.min(mina, op[0]);
    minb = Math.min(minb, op[1]);
  }
  return mina * minb;
}
// @lc code=end
