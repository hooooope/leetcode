/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2 的幂
 */

// @lc code=start
/* function isPowerOfTwo(n: number): boolean {
  let i = 0;
  while (Math.pow(2, i) < n) {
    i++;
  }
  return Math.pow(2, i) === n;
} */

/* function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
} */

/* function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & -n) === n;
} */

function isPowerOfTwo(n: number): boolean {
  const BIG = 1 << 30;
  return n > 0 && BIG % n === 0;
}
// @lc code=end
