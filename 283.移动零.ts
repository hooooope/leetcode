/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
// 暴力法
/* function moveZeroes(nums: number[]): void {
  let zero = 0;
  const n = nums.length;
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      for (let j = i; j < n - 1 - zero; j++) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
      zero++;
    }
  }
} */

// 双指针
function moveZeroes(nums: number[]): void {
  let left = 0;
  let right = 0;
  const n = nums.length;
  while (right < n) {
    if (nums[right]) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
    }
    right++;
  }
}
// @lc code=end
