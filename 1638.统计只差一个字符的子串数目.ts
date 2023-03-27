/*
 * @lc app=leetcode.cn id=1638 lang=typescript
 *
 * [1638] 统计只差一个字符的子串数目
 */

// @lc code=start
// 枚举
/* function countSubstrings(s: string, t: string): number {
  let ret = 0;
  const m = s.length;
  const n = t.length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let diff = 0;
      for (let k = 0; i + k < m && j + k < n; k++) {
        diff += s[i + k] === t[j + k] ? 0 : 1;
        if (diff > 1) {
          break;
        } else if (diff === 1) {
          ret++;
        }
      }
    }
  }
  return ret;
} */

// 动态规划
function countSubstrings(s: string, t: string): number {
  let ret = 0;
  const m = s.length;
  const n = t.length;
  // dpl[i][j]表示s[i]和t[j]左侧连续相等的最大长度
  const dpl = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  // dpr[i][j]表示s[i - 1]和t[j - 1]右侧连续相等的最大长度
  const dpr = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dpl[i + 1][j + 1] = s[i] === t[j] ? dpl[i][j] + 1 : 0;
    }
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      dpr[i][j] = s[i] === t[j] ? dpr[i + 1][j + 1] + 1 : 0;
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (s[i] !== t[j]) {
        ret += (dpl[i][j] + 1) * (dpr[i + 1][j + 1] + 1);
      }
    }
  }
  return ret;
}
// @lc code=end
