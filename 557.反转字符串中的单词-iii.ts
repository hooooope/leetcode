/*
 * @lc app=leetcode.cn id=557 lang=typescript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/* function reverseWords(s: string): string {
  const words: string[] = s.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }
  return words.join(" ");
} */

function reverseWords(s: string): string {
  const chars: string[] = [];
  let i = 0;
  const n = s.length;
  while (i < n) {
    let start = i;
    while (i < n && s[i] !== " ") {
      i++;
    }
    for (let j = start; j < i; j++) {
      chars.push(s[start + i - 1 - j]);
    }
    while (s[i] === " ") {
      chars.push(" ");
      i++;
    }
  }
  return chars.join("");
}
// @lc code=end
