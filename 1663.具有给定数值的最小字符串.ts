/*
 * @lc app=leetcode.cn id=1663 lang=typescript
 *
 * [1663] 具有给定数值的最小字符串
 */

// @lc code=start
// 贪心
function getSmallestString(n: number, k: number): string {
  let ret = "";
  for (let i = 1; i <= n; i++) {
    // 若k - (n - 1) * 26 > 1，则当前字符不能选择a
    // 若k - (n - 1) * 26 = 1，则当前字符只能选择a
    // 若k - (n - 1) * 26 < 1,则当前字符只能选择a
    const lower = Math.max(1, k - (n - i) * 26);
    k -= lower;
    ret += String.fromCharCode("a".charCodeAt(0) + lower - 1);
  }
  return ret;
}
// @lc code=end
