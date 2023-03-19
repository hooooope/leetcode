/*
 * @lc app=leetcode.cn id=459 lang=typescript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
// 暴力枚举
/* function repeatedSubstringPattern(s: string): boolean {
  const n = s.length;
  // 子串长度范围[1 ~ n/2]
  for (let i = 1; i <= n >> 1; i++) {
    // 父串的长度是子串长度的倍数
    if (n % i === 0) {
      let match = true;
      for (let j = i; j < n; j++) {
        // 子串是父串的前缀
        if (s[j] !== s[j - i]) {
          match = false;
          break;
        }
      }
      if (match) {
        return true;
      }
    }
  }
  return false;
} */

// 字符串匹配
/* function repeatedSubstringPattern(s: string): boolean {
  return (s + s).indexOf(s, 1) !== s.length;
} */

// kmp
function repeatedSubstringPattern(s: string): boolean {
  const getNext = (s: string) => {
    const next: number[] = new Array(s.length);
    next[0] = -1;
    next[1] = 0;
    let i = 2;
    let cn = 0;
    while (i < s.length) {
      if (s[i - 1] === s[cn]) {
        next[i++] = ++cn;
      } else if (cn > 0) {
        cn = next[cn];
      } else {
        next[i++] = 0;
      }
    }
    return next;
  };
  const kmp = (s1: string, s2: string) => {
    const next = getNext(s2);
    let i1 = 0;
    let i2 = 0;
    while (i1 < s1.length && i2 < s2.length) {
      if (s1[i1] === s2[i2]) {
        i1++;
        i2++;
      } else if (next[i2] === -1) {
        i1++;
      } else {
        i2 = next[i2];
      }
    }
    return i2 === s2.length ? i1 - s2.length : -1;
  };
  const index = kmp((s + s).slice(1), s);
  // 匹配成功且索引不为第二个字符串的开始索引
  return index > -1 && index !== s.length - 1;
}
// @lc code=end
