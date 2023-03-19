/*
 * @lc app=leetcode.cn id=1945 lang=typescript
 *
 * [1945] 字符串转化后的各位数字之和
 */

// @lc code=start
function getLucky(s: string, k: number): number {
  const addDigit = (n: number) => {
    let ret = 0;
    while (n) {
      ret += n % 10;
      n = Math.floor(n / 10);
    }
    return ret;
  };
  let ret = 0;
  for (const c of s) {
    ret += addDigit(c.charCodeAt(0) - "a".charCodeAt(0) + 1);
  }
  for (let i = 1; i < k; i++) {
    ret = addDigit(ret);
  }
  return ret;
}
// @lc code=end
