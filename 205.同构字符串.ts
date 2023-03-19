/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  const len = s.length;
  const s2t = new Map<string, string>();
  const t2s = new Map<string, string>();
  for (let i = 0; i < len; i++) {
    const x = s[i];
    const y = t[i];
    if ((s2t.has(x) && s2t.get(x) !== y) || (t2s.has(y) && t2s.get(y) !== x)) {
      return false;
    }
    s2t.set(x, y);
    t2s.set(y, x);
  }
  return true;
}
// @lc code=end
