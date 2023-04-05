/*
 * @lc app=leetcode.cn id=2427 lang=typescript
 *
 * [2427] 公因子的数目
 */

// @lc code=start
// 枚举到较小值
/* function commonFactors(a: number, b: number): number {
  let ret = 0;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      ret++;
    }
  }
  return ret;
} */

// 枚举到最大公约数
function commonFactors(a: number, b: number): number {
  const gcd = (a: number, b: number) => {
    while (b !== 0) {
      a %= b;
      a ^= b;
      b ^= a;
      a ^= b;
    }
    return a;
  };
  let ret = 0;
  // x是a和b的公因子，当且仅当x是a和b的最大公约数的因子
  const c = gcd(a, b);
  // 可以使用类似方法一中的遍历，对于[1,c]中的整数依次进行枚举，时间复杂度为O(c)
  // 我们也可以进行一些优化，因子一定是成对出现的：
  // 如果x是c的因子，那么c/x一定也是c的因子
  // 因此我们可以仅对[1,√c]中的整数依次进行枚举
  // 如果枚举到x是c的因子，并且x≠c/x(即x^2≠c)，那么答案额外增加1
  // 这样一来，时间复杂度可以降低至O(√c)
  for (let x = 1; x * x <= c; x++) {
    if (c % x === 0) {
      ret++;
      if (x * x !== c) {
        ret++;
      }
    }
  }
  return ret;
}
// @lc code=end
