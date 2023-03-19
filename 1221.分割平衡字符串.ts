/*
 * @lc app=leetcode.cn id=1221 lang=typescript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
function balancedStringSplit(s: string): number {
  let n = 0,
    ret = 0;
  for (const c of s) {
    c === "L" ? n++ : n--;
    n === 0 && ret++;
  }
  return ret;
}
// @lc code=end
