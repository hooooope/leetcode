/*
 * @lc app=leetcode.cn id=1016 lang=typescript
 *
 * [1016] 子串能表示从 1 到 N 数字的二进制串
 */

// @lc code=start
function queryString(s: string, n: number): boolean {
  for (let i = 1; i <= n; i++) {
    if (!s.includes(i.toString(2))) {
      return false;
    }
  }
  return true;
}
// @lc code=end
