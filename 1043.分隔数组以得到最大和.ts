/*
 * @lc app=leetcode.cn id=1043 lang=typescript
 *
 * [1043] 分隔数组以得到最大和
 */

// @lc code=start
// 动态规划
function maxSumAfterPartitioning(arr: number[], k: number): number {
  const n = arr.length;
  // dp[i]表示以arr[i-1]结尾分割的最大和
  const dp = new Array(n + 1).fill(0);
  // 遍历计算以每个数字结尾分割的最大和
  for (let i = 1; i <= n; i++) {
    // 初始化当前区间的最后一个数字为最大值
    let maxValue = arr[i - 1];
    // 枚举每一个区间[j, i - 1]，j = [i - k, i - 1]
    for (let j = i - 1; j >= Math.max(0, i - k); j--) {
      // 以arr[i-1]结尾分割的最大和为
      // 以arr[j-1]结尾分割的最大和 + (当前区间 * 最大值)
      dp[i] = Math.max(dp[i], dp[j] + maxValue * (i - j));
      // 进入一下轮枚举前更新区间的最大值
      maxValue = Math.max(maxValue, arr[j - 1]);
    }
  }
  return dp[n];
}
// @lc code=end
