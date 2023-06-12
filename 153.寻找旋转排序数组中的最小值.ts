/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
function findMin(nums: number[]): number {
  const n = nums.length;
  let low = 0;
  let high = n - 1;
  while (low < high) {
    const pivot = low + ((high - low) >> 1);
    if (nums[pivot] < nums[high]) {
      high = pivot;
    } else {
      low = pivot + 1;
    }
  }
  return nums[low];
}
// @lc code=end
