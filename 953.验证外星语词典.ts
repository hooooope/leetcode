/*
 * @lc app=leetcode.cn id=953 lang=typescript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
function isAlienSorted(words: string[], order: string): boolean {
  const index = new Array(26).fill(0);
  for (let i = 0; i < order.length; i++) {
    index[order[i].charCodeAt(0) - "a".charCodeAt(0)] = i;
  }
  for (let i = 1; i < words.length; i++) {
    let valid = false;
    for (let j = 0; j < words[i - 1].length && j < words[i].length; j++) {
      const prev = index[words[i - 1][j].charCodeAt(0) - "a".charCodeAt(0)];
      const curr = index[words[i][j].charCodeAt(0) - "a".charCodeAt(0)];
      if (prev < curr) {
        valid = true;
        break;
      } else if (prev > curr) {
        return false;
      }
    }
    // 前Math.min(words[i-1].length, words[i].length)个字符都相同
    if (!valid) {
      if (words[i - 1].length > words[i].length) {
        return false;
      }
    }
  }
  return true;
}
// @lc code=end
