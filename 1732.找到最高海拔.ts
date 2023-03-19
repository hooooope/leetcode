/*
 * @lc app=leetcode.cn id=1732 lang=typescript
 *
 * [1732] 找到最高海拔
 */

// @lc code=start
function largestAltitude(gain: number[]): number {
  let ret = 0;
  let acc = 0;
  for (const i of gain) {
    acc += i;
    ret = Math.max(ret, acc);
  }
  return ret;
}
// @lc code=end
