/*
 * @lc app=leetcode.cn id=1177 lang=typescript
 *
 * [1177] 构建回文串检测
 */

// @lc code=start
// 前缀和+位运算
function canMakePaliQueries(s: string, queries: number[][]): boolean[] {
  const n = s.length;
  const count: number[] = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    count[i + 1] = count[i] ^ (1 << (s[i].charCodeAt(0) - "a".charCodeAt(0)));
  }
  const m = queries.length;
  const ret = new Array(m).fill(false);
  for (let i = 0; i < m; i++) {
    const [left, right, k] = queries[i];
    let bits = 0;
    let x = count[right + 1] ^ count[left];
    while (x) {
      x &= x - 1;
      bits++;
    }
    ret[i] = bits <= 2 * k + 1;
  }
  return ret;
}
// @lc code=end
