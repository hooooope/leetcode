/*
 * @lc app=leetcode.cn id=326 lang=typescript
 *
 * [326] 3 的幂
 */

// @lc code=start
/* function isPowerOfThree(n: number): boolean {
  let pow = 1;
  while (pow < n) {
    pow *= 3;
  }
  return pow === n;
} */

/* function isPowerOfThree(n: number): boolean {
  while (n !== 0 && n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
} */

function isPowerOfThree(n: number): boolean {
  return n > 0 && 1162261467 % n === 0;
}
// @lc code=end
