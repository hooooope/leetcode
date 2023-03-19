/*
 * @lc app=leetcode.cn id=409 lang=typescript
 *
 * [409] 最长回文串
 */

// @lc code=start
function longestPalindrome(s: string): number {
  let ret = 0;
  const map = new Map<string, number>();
  for (const c of s) {
    if (map.has(c)) {
      map.set(c, map.get(c)! + 1);
    } else {
      map.set(c, 1);
    }
  }
  for (const n of map.values()) {
    if (n > 1) {
      ret += (n >> 1) << 1;
      // ret += n % 2 === 0 ? n : n - 1;
    }
    // 在一个回文串中，只有最多一个字符出现了奇数次
    /* if (ret % 2 === 0 && n % 2 === 1) {
      ret++;
    } */
  }
  // 在一个回文串中，只有最多一个字符出现了奇数次（优化）
  return ret < s.length ? ++ret : ret;
}
// @lc code=end
