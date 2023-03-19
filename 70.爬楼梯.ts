/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
// 递归（超时）
/* function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbStairs(n - 1) + climbStairs(n - 2);
} */

// 递归（缓存优化）
/* function climbStairs(n: number): number {
  const memo: number[] = new Array(n + 1).fill(0);
  return climbStairsMemo(n, memo);
}
function climbStairsMemo(n: number, memo: number[]): number {
  if (memo[n] > 0) {
    return memo[n];
  }
  if (n === 1) {
    memo[n] = 1;
  } else if (n === 2) {
    memo[n] = 2;
  } else {
    memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
  }
  return memo[n];
} */

// 动态规划
/* function climbStairs(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
} */

// 动态规划（空间优化）
function climbStairs(n: number): number {
  if (n === 1) {
    return 1;
  }
  // 滚动数组
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
}
// @lc code=end
