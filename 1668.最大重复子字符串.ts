/*
 * @lc app=leetcode.cn id=1668 lang=typescript
 *
 * [1668] 最大重复子字符串
 */

// @lc code=start
/* function maxRepeating(sequence: string, word: string): number {
  let ret = 0;
  let parrern = word;
  while (sequence.match(parrern)) {
    ret++;
    parrern += word;
  }
  return ret;
} */

// 简单枚举 + 动态规划
function maxRepeating(sequence: string, word: string): number {
  const n = sequence.length;
  const m = word.length;
  if (n < m) {
    return 0;
  }
  const f = new Array(n).fill(0);
  for (let i = m - 1; i < n; i++) {
    let valid = true;
    for (let j = 0; j < m; j++) {
      if (sequence[i - m + 1 + j] !== word[j]) {
        valid = false;
        break;
      }
    }
    if (valid) {
      f[i] = (i === m - 1 ? 0 : f[i - m]) + 1;
    }
  }
  return Math.max(...f);
}

// KMP + 动态规划
/* function maxRepeating(sequence: string, word: string): number {} */
// @lc code=end
