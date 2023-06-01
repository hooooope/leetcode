/*
 * @lc app=leetcode.cn id=2559 lang=typescript
 *
 * [2559] 统计范围内的元音字符串数
 */

// @lc code=start
function vowelStrings(words: string[], queries: number[][]): number[] {
  const n = words.length;
  const set = new Set(["a", "e", "i", "o", "u"]);
  const sum: number[] = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    const word = words[i - 1];
    sum[i] =
      sum[i - 1] + (set.has(word[0]) && set.has(word[word.length - 1]) ? 1 : 0);
  }
  const m = queries.length;
  const ret: number[] = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    const [l, r] = queries[i];
    ret[i] = sum[r + 1] - sum[l];
  }
  return ret;
}
// @lc code=end
