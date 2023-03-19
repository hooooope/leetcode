/*
 * @lc app=leetcode.cn id=1688 lang=typescript
 *
 * [1688] 比赛中的配对次数
 */

// @lc code=start
/* function numberOfMatches(n: number): number {
  let ret = 0;
  while (n > 1) {
    ret += n >> 1;
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = (n - 1) / 2 + 1;
    }
  }
  return ret;
} */

function numberOfMatches(n: number): number {
  return n - 1;
}
// @lc code=end
