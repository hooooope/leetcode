/*
 * @lc app=leetcode.cn id=1796 lang=typescript
 *
 * [1796] 字符串中第二大的数字
 */

// @lc code=start
/* function secondHighest(s: string): number {
  const nums: number[] = s.match(/\d/g)?.map((e) => Number(e)) ?? [];
  let first = -1;
  let second = -1;
  for (const num of nums) {
    if (num === first) {
      continue;
    }
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second) {
      second = num;
    }
  }
  return second;
} */

function secondHighest(s: string): number {
  let first = -1;
  let second = -1;
  const CHAR_CODE_0 = "0".charCodeAt(0);
  const CHAR_CODE_9 = "9".charCodeAt(0);
  for (const c of s) {
    const cc = c.charCodeAt(0);
    if (cc >= CHAR_CODE_0 && cc <= CHAR_CODE_9) {
      const num = cc - CHAR_CODE_0;
      if (num > first) {
        second = first;
        first = num;
      } else if (num > second && num < first) {
        second = num;
      }
    }
  }
  return second;
}
// @lc code=end
