/*
 * @lc app=leetcode.cn id=1281 lang=typescript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
function subtractProductAndSum(n: number): number {
  let sum = 0;
  let product = 1;
  let remainder = 0;
  while (n) {
    remainder = n % 10;
    sum += remainder;
    product *= remainder;
    n = Math.floor(n / 10);
  }
  return product - sum;
}
// @lc code=end
