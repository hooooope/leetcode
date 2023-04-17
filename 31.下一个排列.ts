/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  const swap = (nums: number[], i: number, j: number) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };
  const reverse = (nums: number[], start: number) => {
    let left = start;
    let right = nums.length - 1;
    while (left < right) {
      swap(nums, left, right);
      left++;
      right--;
    }
  };
  // 下一个排列总是比当前排列要大，除非该排列已经是最大的排列
  // 寻找一个大于当前序列的新序列，且变大的幅度尽可能小
  // 将一个左边的较小数与一个右边的较大数交换，以能够让当前排列变大，从而得到下一个排列
  let i = nums.length - 2;
  // 同时让这个较小数尽量靠右
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  // 而较大数尽可能小
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    // 交换较小数与较大数
    // 此时可以证明区间[i+1,n)必为降序
    // 可以直接使用双指针反转区间[i+1,n)使其变为升序，而无需对该区间进行排序
    swap(nums, i, j);
  }
  // 当交换完成后，较大数右边的数需要按照升序重新排列
  // 保证新排列大于原来排列的情况下，使变大的幅度尽可能小
  reverse(nums, i + 1);
}
// @lc code=end
