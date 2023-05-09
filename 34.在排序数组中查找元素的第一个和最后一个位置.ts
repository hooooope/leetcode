/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  const ret: number[] = [-1, -1];
  // lower: true, 表示返回第一个大于等于target的位置
  // lower: fasle, 表示返回第一个大于target的位置
  const binarySearch = (
    nums: number[],
    target: number,
    lower: boolean
  ): number => {
    let ret = nums.length;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] > target || (lower && nums[mid] === target)) {
        ret = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return ret;
  };
  const left = binarySearch(nums, target, true);
  const right = binarySearch(nums, target, false) - 1;
  if (
    left <= right &&
    right < nums.length &&
    nums[left] === target &&
    nums[right] === target
  ) {
    ret[0] = left;
    ret[1] = right;
  }
  return ret;
}
// @lc code=end
