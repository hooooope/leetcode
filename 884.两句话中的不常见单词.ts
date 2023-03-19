/*
 * @lc app=leetcode.cn id=884 lang=typescript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
function uncommonFromSentences(s1: string, s2: string): string[] {
  const ret: string[] = [];
  const map = new Map<string, number>();
  for (const word of s1.split(" ")) {
    map.set(word, (map.get(word) ?? 0) + 1);
  }
  for (const word of s2.split(" ")) {
    map.set(word, (map.get(word) ?? 0) + 1);
  }
  for (const [word, count] of map.entries()) {
    if (count === 1) {
      ret.push(word);
    }
  }
  return ret;
}
// @lc code=end
