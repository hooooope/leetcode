/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
/* function removeElement(nums: number[], val: number): number {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const n = nums[i];
    if (n === val) {
      nums[i] = nums[nums.length - 1];
      nums.length--;
      i--;
    }
  }
  return nums.length;
} */

// 双指针
/* function removeElement(nums: number[], val: number): number {
  const length = nums.length;
  let left = 0;
  let right = 0;
  while (right < length) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }
  return left;
} */

// 双指针优化
function removeElement(nums: number[], val: number): number {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1];
      right--;
    } else {
      left++;
    }
  }
  return left;
}
// @lc code=end
