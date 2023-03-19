/*
 * @lc app=leetcode.cn id=650 lang=typescript
 *
 * [650] 只有两个键的键盘
 */

// @lc code=start
// 动态规划
/* function minSteps(n: number): number {
  // dp[i]表示打印出i个‘A’的最少操作次数
  // dp[1]默认为0
  const dp: number[] = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++) {
    dp[i] = Number.MAX_VALUE;
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        dp[i] = Math.min(dp[i], dp[j] + i / j);
        dp[i] = Math.min(dp[i], dp[i / j] + j);
      }
    }
  }
  return dp[n];
}
 */

// 分解质因数
function minSteps(n: number): number {
  let ret = 0;
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      n /= i;
      ret += i;
    }
  }
  if (n > 1) {
    ret += n;
  }
  return ret;
}

/* 
  增加字符只有两种方式：
  1.copy all + paste（消耗两次操作）
    m = s, s += s
  2.paste（消耗一次操作）
    s += m
*/
/* function minSteps(n: number): number {
  const isPrime = (n: number) => {
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  if (n < 2) {
    return 0;
  }
  if (isPrime(n)) {
    // 一开始时剪切板为空，需要进行一次copy all操作
    // return n - 1 + 1;
    return n;
  }
  let factorSum = 0;
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      factorSum += i;
      n /= i;
    }
  }
  // 一开始时剪切板为空，每个因子都需要进行一次copy all操作
  // return factorSum - factorCnt + factorCnt;
  return factorSum;
} */
// @lc code=end
