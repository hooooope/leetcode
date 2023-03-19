/*
 * @lc app=leetcode.cn id=2351 lang=typescript
 *
 * [2351] 第一个出现两次的字母
 */

// @lc code=start
// 哈希表
/* function repeatedCharacter(s: string): string {
  const cnt = new Array(26).fill(0);
  for (const c of s) {
    const idx = c.charCodeAt(0) - "a".charCodeAt(0);
    cnt[idx]++;
    if (cnt[idx] === 2) {
      return c;
    }
  }
} */

// 位运算
function repeatedCharacter(s: string): string {
  let mask = 0;
  for (const c of s) {
    const offset = c.charCodeAt(0) - "a".charCodeAt(0);
    if ((mask & (1 << offset)) === 0) {
      mask |= 1 << offset;
    } else {
      return c;
    }
  }
}

// @lc code=end
