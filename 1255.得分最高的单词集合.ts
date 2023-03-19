/*
 * @lc app=leetcode.cn id=1255 lang=typescript
 *
 * [1255] 得分最高的单词集合
 */

// @lc code=start
/* 
  单词1  单词2  单词3
  子集1：单词1
  子集2：单词2
  子集3：单词3
  子集4：单词1  单词2
  子集5：单词1  单词3
  子集6：单词2  单词3
  子集7：单词1. 单词2  单词3
  N个单词存在(2**n)-1个子集

  子集1：单词1
  001&001
  001&010
  001&100
  子集2：单词2
  010&001
  010&010
  010&100
  子集3：单词1&单词2
  011&001
  011&010
  011&100
  子集4：单词3
  100&001
  100&010
  100&100
  子集5：单词1&单词3
  101&001
  101&010
  101&100
  子集6：单词2&单词3
  110&001
  110&010
  110&100
  子集7：单词1&单词2&单词3
  111&001
  111&010
  111&100
*/
function maxScoreWords(
  words: string[],
  letters: string[],
  score: number[]
): number {
  let ret = 0;
  const n = words.length;
  const count: number[] = new Array(26).fill(0);
  for (const c of letters) {
    count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  // n个单词可以组成(2**n)-1个子集（不包括空集）
  for (let i = 1; i < 1 << n; i++) {
    // 统计子集i所有单词的字母数目
    const wordCount = new Array(26).fill(0);
    for (let j = 0; j < n; j++) {
      // word[i]不在子集s中
      if ((i & (1 << j)) === 0) {
        continue;
      }
      for (const c of words[j]) {
        wordCount[c.charCodeAt(0) - "a".charCodeAt(0)]++;
      }
    }
    let sum = 0;
    let ok = true;
    for (let j = 0; j < 26; j++) {
      sum += score[j] * wordCount[j];
      ok = ok && wordCount[j] <= count[j];
    }
    if (ok) {
      ret = Math.max(ret, sum);
    }
  }
  return ret;
}
// @lc code=end
