/*
 * @lc app=leetcode.cn id=1170 lang=typescript
 *
 * [1170] 比较字符串最小字母出现频次
 */

// @lc code=start
// 后缀和
function numSmallerByFrequency(queries: string[], words: string[]): number[] {
  function f(s: string) {
    let ret = 0;
    let max = "z";
    for (const c of s) {
      if (c < max) {
        max = c;
        ret = 1;
      } else if (c === max) {
        ret++;
      }
    }
    return ret;
  }
  const n = queries.length;
  const ret: number[] = new Array(n).fill(0);
  const count: number[] = new Array(12).fill(0);
  for (const word of words) {
    count[f(word)]++;
  }
  for (let i = 9; i >= 0; i--) {
    count[i] += count[i + 1];
  }
  for (let i = 0; i < n; i++) {
    const query = queries[i];
    ret[i] = count[f(query) + 1];
  }
  return ret;
}
// @lc code=end
