/*
 * @lc app=leetcode.cn id=342 lang=typescript
 *
 * [342] 4的幂
 */

// @lc code=start
/* function isPowerOfFour(n: number): boolean {
  let i = 1;
  while (i < n) {
    i *= 4;
  }
  return i === n;
} */

/* 
  如果n是4的幂，那么n一定也是2的幂
  (n & (n - 1)) === 0 证明n是2的幂
  (n & 0xaaaaaaaa) === 0 在上一步的基础上，证明n是4的幂
  oXaaaaaaaa = 1010 1010 1010 1010 1010 1010 1010 1010
  如果n是4的幂，那么n的二进制表示中有且仅有一个1，
  并且这个1出现在从低位开始的第偶数个二进制位上
*/
/* function isPowerOfFour(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0;
} */

function isPowerOfFour(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;
}
// @lc code=end
