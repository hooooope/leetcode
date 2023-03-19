/*
 * @lc app=leetcode.cn id=461 lang=typescript
 *
 * [461] 汉明距离
 */

// @lc code=start
/* function hammingDistance(x: number, y: number): number {
  let z = x ^ y;
  let ret = 0;
  while (z) {
    ret += z & 1;
    z >>= 1;
  }
  return ret;
} */

function hammingDistance(x: number, y: number): number {
  let z = x ^ y;
  let ret = 0;
  while (z) {
    z &= z - 1;
    ret++;
  }
  return ret;
}
// @lc code=end
