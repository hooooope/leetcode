/*
 * @lc app=leetcode.cn id=1684 lang=typescript
 *
 * [1684] 统计一致字符串的数目
 */

// @lc code=start
/* function countConsistentStrings(allowed: string, words: string[]): number {
  let ret = 0;
  const counter = new Array(26).fill(0);
  for (const c of allowed) {
    counter[c.charCodeAt(0) - 97] = true;
  }
  for (let i = 0; i < words.length; i++) {
    let consistent = true;
    for (let j = 0; j < words[i].length; j++) {
      if (!counter[words[i][j].charCodeAt(0) - 97]) {
        consistent = false;
        break;
      }
    }
    consistent && ret++;
  }
  return ret;
} */

function countConsistentStrings(allowed: string, words: string[]): number {
  let ret = 0;
  const allowedBinary = word2binary(allowed);
  for (const word of words) {
    const wordBinary = word2binary(word);
    if ((wordBinary & allowedBinary) === wordBinary) {
      ret++;
    }
  }
  return ret;
}

function word2binary(s: string): number {
  let ret = 0;
  for (const c of s) {
    const x = c.charCodeAt(0) - 97;
    ret |= 1 << x;
  }
  return ret;
}
// @lc code=end
