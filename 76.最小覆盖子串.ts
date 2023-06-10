/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  const check = () => {
    for (const [k, v] of ori) {
      if ((cnt.get(k) ?? 0) < v) {
        return false;
      }
    }
    return true;
  };
  let start = 0;
  let len = Infinity;
  const n = s.length;
  const ori = new Map<string, number>();
  const cnt = new Map<string, number>();
  for (const c of t) {
    ori.set(c, (ori.get(c) ?? 0) + 1);
  }
  let l = 0;
  let r = -1;
  while (r < n) {
    r++;
    if (r < n && ori.has(s[r])) {
      cnt.set(s[r], (cnt.get(s[r]) ?? 0) + 1);
    }
    while (check() && l <= r) {
      if (r - l + 1 < len) {
        start = l;
        len = r - l + 1;
      }
      if (ori.has(s[l])) {
        cnt.set(s[l], (cnt.get(s[l]) ?? 0) - 1);
      }
      l++;
    }
  }
  return len === Infinity ? "" : s.slice(start, start + len);
}
// @lc code=end
