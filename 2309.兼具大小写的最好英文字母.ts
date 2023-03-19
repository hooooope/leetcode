/*
 * @lc app=leetcode.cn id=2309 lang=typescript
 *
 * [2309] 兼具大小写的最好英文字母
 */

// @lc code=start
// 哈希表
/* function greatestLetter(s: string): string {
  const set = new Set<string>();
  for (const c of s) {
    set.add(c);
  }
  for (let i = 25; i >= 0; i--) {
    if (
      set.has(String.fromCharCode("a".charCodeAt(0) + i)) &&
      set.has(String.fromCharCode("A".charCodeAt(0) + i))
    ) {
      return String.fromCharCode("A".charCodeAt(0) + i);
    }
  }
  return "";
} */

// 位运算
function greatestLetter(s: string): string {
  let lower = 0;
  let upper = 0;
  for (const c of s) {
    if ("a" <= c && c <= "z") {
      lower |= 1 << (c.charCodeAt(0) - "a".charCodeAt(0));
    } else {
      upper |= 1 << (c.charCodeAt(0) - "A".charCodeAt(0));
    }
  }
  for (let i = 25; i >= 0; i--) {
    if ((lower & upper & (1 << i)) !== 0) {
      return String.fromCharCode("A".charCodeAt(0) + i);
    }
  }
  return "";
}
// @lc code=end
