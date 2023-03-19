/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
/* function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>();
  for (const c of magazine) {
    if (map.has(c)) {
      map.set(c, map.get(c)! + 1);
    } else {
      map.set(c, 1);
    }
  }
  for (const c of ransomNote) {
    if (map.has(c)) {
      const quantity = map.get(c)! - 1;
      if (quantity === 0) {
        map.delete(c);
      } else {
        map.set(c, quantity);
      }
    } else {
      return false;
    }
  }
  return true;
} */

function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  const cnt = new Array(26).fill(0);
  const CHAR_CODE_A = "a".charCodeAt(0);
  for (const c of magazine) {
    cnt[c.charCodeAt(0) - CHAR_CODE_A]++;
  }
  for (const c of ransomNote) {
    cnt[c.charCodeAt(0) - CHAR_CODE_A]--;
    if (cnt[c.charCodeAt(0) - CHAR_CODE_A] < 0) {
      return false;
    }
  }
  return true;
}
// @lc code=end
