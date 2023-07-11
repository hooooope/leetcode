/*
 * @lc app=leetcode.cn id=2544 lang=typescript
 *
 * [2544] 交替数字和
 */

// @lc code=start
function alternateDigitSum(n: number): number {
  let ret = 0;
  let sign = 1;
  while (n) {
    ret += (n % 10) * sign;
    n = Math.floor(n / 10);
    sign *= -1;
  }
  return ret * -sign;
}
// @lc code=end
