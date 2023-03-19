/*
 * @lc app=leetcode.cn id=1078 lang=typescript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
function findOcurrences(text: string, first: string, second: string): string[] {
  const words = text.split(" ");
  const ret: string[] = [];
  for (let i = 2; i < words.length; i++) {
    if (words[i - 2] === first && words[i - 1] === second) {
      ret.push(words[i]);
    }
  }
  return ret;
}
// @lc code=end
