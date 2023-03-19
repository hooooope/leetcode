/*
 * @lc app=leetcode.cn id=1662 lang=typescript
 *
 * [1662] 检查两个字符串数组是否相等
 */

// @lc code=start
/* function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  return word1.join("") === word2.join("");
} */

function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  let i1 = 0,
    j1 = 0,
    i2 = 0,
    j2 = 0,
    n1 = word1.length,
    n2 = word2.length;
  while (i1 < n1 && i2 < n2) {
    if (word1[i1][j1] !== word2[i2][j2]) return false;
    j1++;
    if (j1 === word1[i1].length) {
      i1++;
      j1 = 0;
    }
    j2++;
    if (j2 === word2[i2].length) {
      i2++;
      j2 = 0;
    }
  }
  return i1 === n1 && i2 === n2;
}
// @lc code=end
