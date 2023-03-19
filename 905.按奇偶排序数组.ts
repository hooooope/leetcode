/*
 * @lc app=leetcode.cn id=905 lang=typescript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
// 两次遍历
/* function sortArrayByParity(nums: number[]): number[] {
  let index = 0;
  const n = nums.length;
  const ret: number[] = new Array(n).fill(0);
  for (const num of nums) {
    if ((num & 1) === 0) {
      ret[index++] = num;
    }
  }
  for (const num of nums) {
    if ((num & 1) === 1) {
      ret[index++] = num;
    }
  }
  return ret;
} */

// 双指针+一次遍历
/* function sortArrayByParity(nums: number[]): number[] {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  const ret: number[] = new Array(n).fill(0);
  for (const num of nums) {
    if ((num & 1) === 0) {
      // 偶数
      ret[left++] = num;
    } else {
      // 奇数
      ret[right--] = num;
    }
  }
  return ret;
} */

// 原地交换
function sortArrayByParity(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    while (left < right && nums[left] % 2 === 0) {
      left++;
    }
    while (left < right && nums[right] % 2 === 1) {
      right--;
    }
    if (left < right) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  }
  return nums;
}
// @lc code=end
