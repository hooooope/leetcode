/*
 * @lc app=leetcode.cn id=91 lang=typescript
 *
 * [91] 解码方法
 */

// @lc code=start
// time limit exceeded
/* 
  a1
  b2
  c3
  d4
  e5
  f6
  g7
  h8
  i9
  j10
  k11
  l12
  m13
  n14
  o15
  p16
  q17
  r18
  s19
  t20
  u21
  v22
  w23
  x24
  y25
  z26
*/
// 暴力递归法
/* function numDecodings(s: string): number {
  const process = (s: string, i: number): number => {
    const n = s.length;
    if (i === n) {
      return 1;
    }
    if (s[i] === "0") {
      return 0;
    }
    let ret = process(s, i + 1);
    if (
      i + 1 < n &&
      (s[i].charCodeAt(0) - "0".charCodeAt(0)) * 10 +
        (s[i + 1].charCodeAt(0) - "0".charCodeAt(0)) <=
        26
    ) {
      ret += process(s, i + 2);
    }
    return ret;
  };
  return process(s, 0);
} */

// 记忆化搜索法
/* function numDecodings(s: string): number {
  const process = (s: string, i: number, dp: number[]): number => {
    const n = s.length;
    if (dp[i] !== -1) {
      return dp[i];
    }
    if (i === n) {
      dp[i] = 1;
    } else if (s[i] === "0") {
      dp[i] = 0;
    } else {
      dp[i] = process(s, i + 1, dp);
      if (
        i + 1 < n &&
        (s[i].charCodeAt(0) - "0".charCodeAt(0)) * 10 +
          (s[i + 1].charCodeAt(0) - "0".charCodeAt(0)) <=
          26
      ) {
        dp[i] += process(s, i + 2, dp);
      }
    }
    return dp[i];
  };
  const n = s.length;
  const dp: number[] = new Array(n + 1).fill(-1);
  return process(s, 0, dp);
} */

// 严格表结构法
/* function numDecodings(s: string): number {
  const n = s.length;
  const dp: number[] = new Array(n + 1).fill(0);
  dp[n] = 1;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "0") {
      dp[i] = 0;
    } else {
      dp[i] = dp[i + 1];
      if (
        i + 1 < n &&
        (s[i].charCodeAt(0) - "0".charCodeAt(0)) * 10 +
          (s[i + 1].charCodeAt(0) - "0".charCodeAt(0)) <=
          26
      ) {
        dp[i] += dp[i + 2];
      }
    }
  }
  return dp[0];
} */

// 严格表结构法（空间压缩）
function numDecodings(s: string): number {
  const n = s.length;
  // dp[i + 2]
  let a = 0;
  // dp[i + 1]
  let b = 1;
  // dp[i]
  let c = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "0") {
      c = 0;
    } else {
      c = b;
      if (
        i + 1 < n &&
        (s[i].charCodeAt(0) - "0".charCodeAt(0)) * 10 +
          (s[i + 1].charCodeAt(0) - "0".charCodeAt(0)) <=
          26
      ) {
        c += a;
      }
    }
    a = b;
    b = c;
  }
  return c;
}
// @lc code=end
