/*
 * @lc app=leetcode.cn id=1318 lang=typescript
 *
 * [1318] 或运算的最小翻转次数
 */

// @lc code=start
function minFlips(a: number, b: number, c: number): number {
  let ret = 0;
  for (let i = 0; i < 31; i++) {
    const aBit = (a >> i) & 1;
    const bBit = (b >> i) & 1;
    const cBit = (c >> i) & 1;
    if (cBit === 0) {
      ret += aBit + bBit;
    } else {
      ret += Number(aBit + bBit === 0);
    }
  }
  return ret;
}
// @lc code=end
