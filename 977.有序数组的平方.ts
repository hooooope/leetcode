/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
// 直接排序
/* function sortedSquares(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  nums.sort((a, b) => a - b);
  return nums;
} */

// 双指针（归并排序）
/* function sortedSquares(nums: number[]): number[] {
  const n = nums.length;
  let negative = -1;
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      negative = i;
    } else {
      break;
    }
  }
  const ret = new Array<number>(n);
  let index = 0;
  let i = negative;
  let j = negative + 1;
  while (i >= 0 || j < n) {
    if (i < 0) {
      // 左边越界
      ret[index] = nums[j] * nums[j];
      j++;
    } else if (j === n) {
      // 右边越界
      ret[index] = nums[i] * nums[i];
      i--;
    } else if (nums[i] * nums[i] <= nums[j] * nums[j]) {
      ret[index] = nums[i] * nums[i];
      i--;
    } else {
      ret[index] = nums[j] * nums[j];
      j++;
    }
    index++;
  }
  return ret;
} */

// 双指针（逆向归并排序）
function sortedSquares(nums: number[]): number[] {
  const n = nums.length;
  const ret = new Array<number>(n);
  let i = 0;
  let j = n - 1;
  let index = n - 1;
  while (i <= j) {
    if (nums[i] * nums[i] >= nums[j] * nums[j]) {
      ret[index] = nums[i] * nums[i];
      i++;
    } else {
      ret[index] = nums[j] * nums[j];
      j--;
    }
    index--;
  }
  return ret;
}
// @lc code=end
