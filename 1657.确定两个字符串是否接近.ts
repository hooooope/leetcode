/*
 * @lc app=leetcode.cn id=1657 lang=typescript
 *
 * [1657] 确定两个字符串是否接近
 */

// @lc code=start
function closeStrings(word1: string, word2: string): boolean {
  const n1 = word1.length
  const n2 = word2.length
  if (n1 !== n2) {
    return false
  }
  const map1: number[] = new Array(26).fill(0)
  const map2: number[] = new Array(26).fill(0)
  for (let i = 0; i < n1; i++) {
    map1[word1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    map2[word2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  for (let i = 0; i < 26; i++) {
    if (Number(map1[i] === 0) ^ Number(map2[i] === 0)) {
      return false
    }
  }
  map1.sort((a, b) => a - b)
  map2.sort((a, b) => a - b)
  for (let i = 0; i < 26; i++) {
    if (map1[i] !== map2[i]) {
      return false
    }
  }
  return true
};
// @lc code=end

