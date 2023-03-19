/*
 * @lc app=leetcode.cn id=896 lang=typescript
 *
 * [896] 单调数列
 */

// @lc code=start
/* function isMonotonic(nums: number[]): boolean {
  let inc = true;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] < 0) {
      inc = false;
      break;
    }
  }
  let dec = true;
  for (let i = nums.length; i > 0; i--) {
    if (nums[i] - nums[i - 1] > 0) {
      dec = false;
      break;
    }
  }
  return inc || dec;
} */

// 思路：由证明数列为单调数列，转变为证明数列不为单调数列
function isMonotonic(nums: number[]): boolean {
  // 默认既是递增也是递增，如[1, 1, 1]
  let inc = true;
  let dec = true;
  for (let i = 1; i < nums.length; i++) {
    // 出现递减的情况，则不是递增数列
    if (nums[i] < nums[i - 1]) {
      inc = false;
    }
    // 出现递增的情况，则不是递减数列
    if (nums[i] > nums[i - 1]) {
      dec = false;
    }
  }
  // 既不是递增数列，也不是递减数列，则不是单调数列
  return inc || dec;
}
// @lc code=end
