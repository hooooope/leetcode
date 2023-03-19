/*
 * @lc app=leetcode.cn id=709 lang=typescript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/* function toLowerCase(s: string): string {
  return s.toLowerCase();
} */

function toLowerCase(s: string): string {
  let sb: string[] = [];
  const CHAR_CODE_A = "A".charCodeAt(0);
  const CHAR_CODE_Z = "Z".charCodeAt(0);
  const DIFF = "a".charCodeAt(0) - CHAR_CODE_A;
  for (let c of s) {
    const charCode = c.charCodeAt(0);
    if (charCode >= CHAR_CODE_A && charCode <= CHAR_CODE_Z) {
      c = String.fromCharCode(charCode + DIFF);
    }
    sb.push(c);
  }
  return sb.join("");
}
// @lc code=end
