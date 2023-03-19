/*
 * @lc app=leetcode.cn id=1832 lang=typescript
 *
 * [1832] 判断句子是否为全字母句
 */

// @lc code=start
// 哈希表
/* function checkIfPangram(sentence: string): boolean {
  const set = new Set<String>();
  for (const letter of sentence) {
    set.add(letter);
    if (set.size === 26) {
      return true;
    }
  }
  return false;
} */

// 二进制
function checkIfPangram(sentence: string): boolean {
  let state = 0;
  for (const letter of sentence) {
    state |= 1 << (letter.charCodeAt(0) - "a".charCodeAt(0));
  }
  return state === (1 << 26) - 1;
}
// @lc code=end
