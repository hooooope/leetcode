/*
 * @lc app=leetcode.cn id=1704 lang=typescript
 *
 * [1704] 判断字符串的两半是否相似
 */

// @lc code=start
function halvesAreAlike(s: string): boolean {
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let acc = 0,
    n = s.length / 2;
  for (let i = 0; i < n; i++) {
    set.has(s[i]) && acc++;
    set.has(s[i + n]) && acc--;
  }
  return acc === 0;
}
// @lc code=end
