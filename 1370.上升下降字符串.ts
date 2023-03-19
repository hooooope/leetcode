/*
 * @lc app=leetcode.cn id=1370 lang=typescript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
function sortString(s: string): string {
  const counter = new Array(26).fill(0);
  let ret = "";
  for (const c of s) {
    counter[c.charCodeAt(0) - 97]++;
  }
  while (ret.length < s.length) {
    for (let i = 0; i < counter.length; i++) {
      if (counter[i]) {
        ret += String.fromCharCode(i + 97);
        counter[i]--;
      }
    }
    for (let i = counter.length - 1; i >= 0; i--) {
      if (counter[i]) {
        ret += String.fromCharCode(i + 97);
        counter[i]--;
      }
    }
  }
  return ret;
}
// @lc code=end
