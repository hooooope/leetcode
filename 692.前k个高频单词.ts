/*
 * @lc app=leetcode.cn id=692 lang=typescript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
// 哈希表+排序
/* function topKFrequent(words: string[], k: number): string[] {
  const map = new Map<string, number>();
  for (const word of words) {
    map.set(word, (map.get(word) ?? 0) + 1);
  }
  const ret: string[] = [];
  for (const word of map.keys()) {
    ret.push(word);
  }
  ret.sort((word1, word2) => {
    return map.get(word1) === map.get(word2)
      ? word1.localeCompare(word2)
      : map.get(word2)! - map.get(word1)!;
  });
  return ret.slice(0, k);
} */
// @lc code=end
