/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/* function lengthOfLastWord(s: string): number {
  return s.trim().split(/\s+/).pop()!.length;
} */

function lengthOfLastWord(s: string): number {
  let ret = 0;
  let index = s.length - 1;
  while (s[index] === " ") {
    index--;
  }
  while (index >= 0 && s[index] !== " ") {
    ret++;
    index--;
  }
  return ret;
}
// @lc code=end
