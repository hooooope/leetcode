/*
 * @lc app=leetcode.cn id=918 lang=typescript
 *
 * [918] 环形子数组的最大和
 */

// @lc code=start
/* function maxSubarraySumCircular(nums: number[]): number {
  const n = nums.length;
  let ret = nums[0];
  let pre = nums[0];
  let leftSum = nums[0];
  let leftMax = new Array(n).fill(0);
  leftMax[0] = nums[0];
  for (let i = 1; i < n; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    ret = Math.max(ret, pre);
    leftSum += nums[i];
    leftMax[i] = Math.max(leftMax[i - 1], leftSum);
  }
  let rightSum = 0;
  for (let i = n - 1; i > 0; i--) {
    rightSum += nums[i];
    ret = Math.max(ret, rightSum + leftMax[i - 1]);
  }
  return ret;
} */

function maxSubarraySumCircular(nums: number[]): number {
  const n = nums.length;
  let preMax = nums[0];
  let maxRet = nums[0];
  let preMin = nums[0];
  let minRet = nums[0];
  let sum = nums[0];
  for (let i = 1; i < n; i++) {
    preMax = Math.max(preMax + nums[i], nums[i]);
    maxRet = Math.max(maxRet, preMax);
    preMin = Math.min(preMin + nums[i], nums[i]);
    minRet = Math.min(minRet, preMin);
    sum += nums[i];
  }
  if (maxRet < 0) {
    return maxRet;
  } else {
    return Math.max(maxRet, sum - minRet);
  }
}
// @lc code=end
