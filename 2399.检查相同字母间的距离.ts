/*
 * @lc app=leetcode.cn id=2399 lang=typescript
 *
 * [2399] 检查相同字母间的距离
 */

// @lc code=start
function checkDistances(s: string, distance: number[]): boolean {
  for (let i = 0; i < s.length; i++) {
    const j = s[i].charCodeAt(0) - "a".charCodeAt(0);
    if (s[i] !== s[i + distance[j] + 1] && s[i] !== s[i - distance[j] - 1]) {
      return false;
    }
  }
  return true;
}
// @lc code=end
