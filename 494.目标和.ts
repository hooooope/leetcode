/*
 * @lc app=leetcode.cn id=494 lang=typescript
 *
 * [494] 目标和
 */

// @lc code=start
// 回溯
/* function findTargetSumWays(nums: number[], target: number): number {
  let ret = 0;
  const backtrack = (
    nums: number[],
    target: number,
    index: number,
    sum: number
  ) => {
    if (index === nums.length) {
      if (sum === target) {
        ret++;
      }
    } else {
      backtrack(nums, target, index + 1, sum - nums[index]);
      backtrack(nums, target, index + 1, sum + nums[index]);
    }
  };
  backtrack(nums, target, 0, 0);
  return ret;
} */

// 动态规划
/* function findTargetSumWays(nums: number[], target: number): number {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  // 记数组的元素和为sum，添加-号的元素和为neg，添加+号的元素和为sum-neg
  // 可得表达式，(sum - neg) - neg = sum - 2 * neg = target
  // 即，neg = (sum - target) / 2
  // 将问题转化为在nums中挑选数字组成neg的方案数
  const diff = sum - target;
  // 由于数组nums中的元素都是非负整数，neg也必须是非负整数，所以上式成立的前提是sum - target是非负偶数，若不符合该条件可直接返回0。
  if (diff < 0 || diff % 2 !== 0) {
    return 0;
  }
  const n = nums.length;
  const neg = diff / 2;
  // dp[i][j]表示在数组nums的前i个数（不包括第i个数）中选取元素，使得这些元素之和等于j的方案数。
  const dp = new Array(n + 1).fill(0).map(() => new Array(neg + 1).fill(0));
  // 当没有任何元素可以选取时，元素和只能是0，对应的方案数是1。
  dp[0][0] = 1;
  for (let i = 1; i <= n; i++) {
    const num = nums[i - 1];
    for (let j = 0; j <= neg; j++) {
      // 不选取num
      dp[i][j] = dp[i - 1][j];
      // 选取num
      if (j >= num) {
        dp[i][j] += dp[i - 1][j - num];
      }
    }
  }
  return dp[n][neg];
} */

// 动态规划（空间压缩）
function findTargetSumWays(nums: number[], target: number): number {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  const diff = sum - target;
  if (diff < 0 || diff % 2 !== 0) {
    return 0;
  }
  const neg = Math.floor(diff / 2);
  const dp = new Array(neg + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = neg; j >= 0; j--) {
      if (j >= nums[i]) {
        dp[j] += dp[j - nums[i]];
      }
    }
  }
  return dp[neg];
}
// @lc code=end
