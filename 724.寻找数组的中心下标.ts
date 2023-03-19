/*
 * @lc app=leetcode.cn id=724 lang=typescript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/* function pivotIndex(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  let leftSum = 0;
  let rightSum = nums[right];
  while (left < right) {
    if (leftSum >= rightSum) {
      rightSum += nums[--right];
    } else {
      leftSum += nums[++left];
    }
  }
} */

function pivotIndex(nums: number[]): number {
  let sum = 0;
  const total = nums.reduce((a, b) => a + b, 0);
  for (let i = 0; i < nums.length; i++) {
    if (sum === total - sum - nums[i]) {
      return i;
    }
    sum += nums[i];
  }
  return -1;
}
// @lc code=end
