/*
 * @lc app=leetcode.cn id=628 lang=typescript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/* function maximumProduct(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  return Math.max(
    nums[0] * nums[1] * nums[n - 1],
    nums[n - 1] * nums[n - 2] * nums[n - 3]
  );
} */

function maximumProduct(nums: number[]): number {
  let max1 = -Number.MAX_SAFE_INTEGER;
  let max2 = -Number.MAX_SAFE_INTEGER;
  let max3 = -Number.MAX_SAFE_INTEGER;
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;
  for (const num of nums) {
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }
  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
}
// @lc code=end
