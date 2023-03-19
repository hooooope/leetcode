/*
 * @lc app=leetcode.cn id=389 lang=typescript
 *
 * [389] 找不同
 */

// @lc code=start
/* function findTheDifference(s: string, t: string): string {
  let xor = 0;
  for (const c of s) {
    xor ^= c.charCodeAt(0);
  }
  for (const c of t) {
    xor ^= c.charCodeAt(0);
  }
  return String.fromCharCode(xor);
} */

/* function findTheDifference(s: string, t: string): string {
  const cnts = new Array(26).fill(0);
  for (const c of s) {
    cnts[c.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  for (const c of t) {
    cnts[c.charCodeAt(0) - "a".charCodeAt(0)]--;
    if (cnts[c.charCodeAt(0) - "a".charCodeAt(0)] < 0) {
      return c;
    }
  }
  return "";
} */

function findTheDifference(s: string, t: string): string {
  let as = 0;
  let at = 0;
  for (const c of s) {
    as += c.charCodeAt(0);
  }
  for (const c of t) {
    at += c.charCodeAt(0);
  }
  return String.fromCharCode(at - as);
}
// @lc code=end
