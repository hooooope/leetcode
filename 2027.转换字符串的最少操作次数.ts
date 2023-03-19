/*
 * @lc app=leetcode.cn id=2027 lang=typescript
 *
 * [2027] 转换字符串的最少操作次数
 */

// @lc code=start
/* function minimumMoves(s: string): number {
  const n = s.length;
  let i = 0;
  let ret = 0;
  while (i < n) {
    while (i < n && s[i] === "O") {
      i++;
    }
    if (i < n) {
      i += 3;
      ret++;
    }
  }
  return ret;
} */

function minimumMoves(s: string): number {
  let ret = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] === "X") {
      i += 2;
      ret++;
    }
  }
  return ret;
}
// @lc code=end
