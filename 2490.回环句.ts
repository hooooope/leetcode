/*
 * @lc app=leetcode.cn id=2490 lang=typescript
 *
 * [2490] 回环句
 */

// @lc code=start
function isCircularSentence(sentence: string): boolean {
  const n = sentence.length;
  if (sentence[0] !== sentence[n - 1]) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    if (sentence[i] === " " && sentence[i - 1] !== sentence[i + 1]) {
      return false;
    }
  }
  return true;
}
// @lc code=end
