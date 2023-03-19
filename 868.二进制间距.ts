/*
 * @lc app=leetcode.cn id=868 lang=typescript
 *
 * [868] 二进制间距
 */

// @lc code=start
function binaryGap(n: number): number {
  let ret = 0;
  let last = -1;
  for (let i = 0; n !== 0; i++) {
    if ((n & 1) === 1) {
      if (last !== -1) {
        ret = Math.max(ret, i - last);
      }
      last = i;
    }
    n >>= 1;
  }
  return ret;
}
// @lc code=end
