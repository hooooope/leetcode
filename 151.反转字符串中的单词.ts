/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/* function reverseWords(s: string): string {
  const stack: string[] = [];
  const sb: string[] = [];
  const n = s.length;
  let i = 0;
  while (i < n) {
    const c = s[i];
    if (c !== " ") {
      while (i < n && s[i] !== " ") {
        sb.push(s[i]);
        i++;
      }
      stack.unshift(sb.join(""));
      sb.length = 0;
    }
    i++;
  }
  return stack.join(" ");
} */

function reverseWords(s: string): string {
  return s.trim().split(/\s+/).reverse().join(" ");
}
// @lc code=end
