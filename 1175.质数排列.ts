/*
 * @lc app=leetcode.cn id=1175 lang=typescript
 *
 * [1175] 质数排列
 */

// @lc code=start
function numPrimeArrangements(n: number): number {
  const isPrime = (x: number) => {
    if (x < 2) {
      return false;
    }
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  };
  const MOD = 1000000007;
  let prime = 0; // 1~n中质数的数量
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      prime++;
    }
  }
  let ret = 1;
  let m = n - prime; // 1～n中合数的数量
  while (prime) {
    ret %= MOD;
    ret *= prime;
    prime--;
  }
  while (m) {
    ret = ret % MOD;
    ret *= m;
    m--;
  }
  return ret;
}
// @lc code=end
