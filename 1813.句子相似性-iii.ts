/*
 * @lc app=leetcode.cn id=1813 lang=typescript
 *
 * [1813] 句子相似性 III
 */

// @lc code=start
// 双指针
function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  const word1 = sentence1.split(" ");
  const word2 = sentence2.split(" ");
  let i = 0;
  let j = 0;
  // 从左到右比较，直到出现第一个不同的单词，或其中一个数组遍历结束
  while (i < word1.length && i < word2.length && word1[i] === word2[i]) {
    i++;
  }
  // 从右到左比较，直到出现第一个不同的单词，或其中一个数组遍历结束
  // 左边比较过的部分不用再次比较，故j < word.length - i
  while (
    j < word1.length - i &&
    j < word2.length - i &&
    word1[word1.length - 1 - j] === word2[word2.length - 1 - j]
  ) {
    j++;
  }
  // 较短的句子遍历完成，说明两个句子相似
  return i + j === Math.min(word1.length, word2.length);
}
// @lc code=end
