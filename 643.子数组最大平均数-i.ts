/*
 * @lc app=leetcode.cn id=643 lang=typescript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
// 前缀和数组
/* function findMaxAverage(nums: number[], k: number): number {
  const n = nums.length;
  const preSums: number[] = [nums[0]];
  for (let i = 1; i < n; i++) {
    preSums.push(nums[i] + preSums[i - 1]);
  }
  let max = preSums[k - 1];
  for (let i = k; i < n; i++) {
    max = Math.max(max, preSums[i] - preSums[i - k]);
  }
  return max / k;
} */

// 滑动窗口
function findMaxAverage(nums: number[], k: number): number {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxSum = sum;
  const n = nums.length;
  for (let i = k; i < n; i++) {
    sum = sum + nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum / k;
}
// @lc code=end
