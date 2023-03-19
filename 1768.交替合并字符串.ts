/*
 * @lc app=leetcode.cn id=1768 lang=typescript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
function mergeAlternately(word1: string, word2: string): string {
  let i = 0;
  let ret = "";
  const n1 = word1.length;
  const n2 = word2.length;
  while (i < n1 && i < n2) {
    ret += word1[i];
    ret += word2[i];
    i++;
  }
  while (i < n1) {
    ret += word1[i];
    i++;
  }
  while (i < n2) {
    ret += word2[i];
    i++;
  }
  return ret;
}
// @lc code=end
