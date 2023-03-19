/*
 * @lc app=leetcode.cn id=804 lang=typescript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
function uniqueMorseRepresentations(words: string[]): number {
  const set = new Set<string>();
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  for (const word of words) {
    let s = "";
    for (const letter of word) {
      s += morse[letter.charCodeAt(0) - "a".charCodeAt(0)];
    }
    set.add(s);
  }
  return set.size;
}
// @lc code=end
