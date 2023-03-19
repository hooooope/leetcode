/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
// 双指针
/* function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  let j = 0;
  while (j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
} */

// 动态规划
function isSubsequence(s: string, t: string): boolean {
  const n = s.length;
  const m = t.length;
  // f[i][j]：表示从 t[i] 往后字符 j(0~25) 第一次出现的位置
  const f = new Array(m + 1).fill(0).map((_) => new Array(26));
  for (let i = 0; i < 26; i++) {
    f[m][i] = m;
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < 26; j++) {
      if (t[i].charCodeAt(0) === "a".charCodeAt(0) + j) {
        f[i][j] = i;
      } else {
        f[i][j] = f[i + 1][j];
      }
    }
  }
  let add = 0;
  for (let i = 0; i < n; i++) {
    if (f[add][s[i].charCodeAt(0) - "a".charCodeAt(0)] === m) {
      return false;
    }
    add = f[add][s[i].charCodeAt(0) - "a".charCodeAt(0)] + 1;
  }
  return true;
}
// @lc code=end
