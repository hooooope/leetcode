/*
 * @lc app=leetcode.cn id=152 lang=typescript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
// 动态规划
/* function maxProduct(nums: number[]): number {
  const n = nums.length;
  // maxF[i]表示以第i个元素结尾的乘积最大子数组的乘积
  const maxF: number[] = new Array(n).fill(nums[0]);
  const minF: number[] = new Array(n).fill(nums[0]);
  for (let i = 1; i < n; i++) {
    maxF[i] = Math.max(maxF[i - 1] * nums[i], minF[i - 1] * nums[i], nums[i]);
    minF[i] = Math.min(maxF[i - 1] * nums[i], minF[i - 1] * nums[i], nums[i]);
  }
  let ret = maxF[0];
  for (let i = 1; i < n; i++) {
    ret = Math.max(ret, maxF[i]);
  }
  return ret;
} */

// 滚动数组
function maxProduct(nums: number[]): number {
  const n = nums.length;
  let maxF = nums[0];
  let minF = nums[0];
  let ret = nums[0];
  for (let i = 1; i < n; i++) {
    const mx = maxF;
    const mn = minF;
    maxF = Math.max(mx * nums[i], mn * nums[i], nums[i]);
    minF = Math.min(mx * nums[i], mn * nums[i], nums[i]);
    ret = Math.max(ret, maxF);
  }
  return ret;
}
// @lc code=end
