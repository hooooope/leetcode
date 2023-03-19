/*
 * @lc app=leetcode.cn id=1071 lang=typescript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
// 枚举
/* function gcdOfStrings(str1: string, str2: string): string {
  // 判断str1是不是str2的因子
  const check = (str1: string, str2: string): boolean => {
    const cnt = str2.length / str1.length;
    return str1.repeat(cnt) === str2;
  };
  const n = str1.length;
  const m = str2.length;
  let i = Math.min(n, m);
  while (i) {
    if (n % i === 0 && m % i === 0) {
      const s = str1.slice(0, i);
      if (check(s, str1) && check(s, str2)) {
        return s;
      }
    }
    i--;
  }
  return "";
} */

// 枚举优化
/* function gcdOfStrings(str1: string, str2: string): string {
  const gcd = (a: number, b: number) => {
    let remainder = a % b;
    while (remainder) {
      a = b;
      b = remainder;
      remainder = a % b;
    }
    return b;
  };
  const check = (t: string, s: string) => {
    const len = s.length / t.length;
    let ret = "";
    for (let i = 0; i < len; i++) {
      ret += t;
    }
    return ret === s;
  };
  const n = str1.length;
  const m = str2.length;
  const t = str1.slice(0, gcd(n, m));
  if (check(t, str1) && check(t, str2)) {
    return t;
  }
  return "";
} */

// 数学法
function gcdOfStrings(str1: string, str2: string): string {
  const gcd = (a: number, b: number) => {
    let remainder = a % b;
    while (remainder) {
      a = b;
      b = remainder;
      remainder = a % b;
    }
    return b;
  };
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  return str1.slice(0, gcd(str1.length, str2.length));
}

// @lc code=end
