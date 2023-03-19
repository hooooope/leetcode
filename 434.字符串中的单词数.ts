/*
 * @lc app=leetcode.cn id=434 lang=typescript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/* function countSegments(s: string): number {
  if (!s.trim()) {
    return 0;
  }
  return s.trim().split(/\s+/).length;
} */

function countSegments(s: string): number {
  let ret = 0;
  for (let i = 0; i < s.length; i++) {
    if ((i === 0 || s[i - 1] === " ") && s[i] !== " ") {
      ret++;
    }
  }
  return ret;
}
// @lc code=end
