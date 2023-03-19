/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  let ret = 0;
  let i = 0;
  let j = 0;
  const m = g.length;
  const n = s.length;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  while (i < m && j < n) {
    if (g[i] <= s[j]) {
      ret++;
      i++;
    }
    j++;
  }
  return ret;
}
// @lc code=end
