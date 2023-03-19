/*
 * @lc app=leetcode.cn id=290 lang=typescript
 *
 * [290] 单词规律
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  const n = pattern.length;
  const words = s.split(" ");
  if (n !== words.length) {
    return false;
  }
  const p2w = new Map<string, string>();
  const w2p = new Map<string, string>();
  for (let i = 0; i < n; i++) {
    const p = pattern[i];
    const w = words[i];
    if (p2w.has(p) && p2w.get(p) !== w) {
      return false;
    }
    if (w2p.has(w) && w2p.get(w) !== p) {
      return false;
    }
    p2w.set(p, w);
    w2p.set(w, p);
  }
  return true;
}
// @lc code=end
