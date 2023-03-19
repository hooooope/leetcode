/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/* function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  const dp = new Array(n + 1);
  dp[0] = dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[n];
} */

function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  let prev = 0;
  let curr = 0;
  for (let i = 2; i <= n; i++) {
    const next = Math.min(curr + cost[i - 1], prev + cost[i - 2]);
    prev = curr;
    curr = next;
  }
  return curr;
}
// @lc code=end
