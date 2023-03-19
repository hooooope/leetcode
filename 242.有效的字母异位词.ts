/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/* function isAnagram(s: string, t: string): boolean {
  return (
    s.length === t.length && [...s].sort().join("") === [...t].sort().join("")
  );
} */

/* function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const n = s.length;
  const CHAR_CODE_A = "a".charCodeAt(0);
  const counterS = new Array(26).fill(0);
  const counterT = new Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    const c1 = s[i];
    const c2 = t[i];
    counterS[c1.charCodeAt(0) - CHAR_CODE_A]++;
    counterT[c2.charCodeAt(0) - CHAR_CODE_A]++;
  }
  for (let i = 0; i < 26; i++) {
    if (counterS[i] !== counterT[i]) {
      return false;
    }
  }
  return true;
} */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const n = s.length;
  const table = new Array(26).fill(0);
  const CHAR_CODE_A = "a".codePointAt(0)!;
  for (let i = 0; i < n; i++) {
    table[s.codePointAt(i)! - CHAR_CODE_A]++;
  }
  for (let i = 0; i < n; i++) {
    table[t.codePointAt(i)! - CHAR_CODE_A]--;
    if (table[t.codePointAt(i)! - CHAR_CODE_A] < 0) {
      return false;
    }
  }
  return true;
}
// @lc code=end
