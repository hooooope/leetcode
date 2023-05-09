/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
  const n = nums.length;
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    const m = (l + r) >> 1;
    if (nums[m] === target) {
      return m;
    }
    if (nums[0] <= nums[m]) {
      if (nums[0] <= target && target < nums[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (nums[m] < target && target <= nums[n - 1]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return -1;
}
// @lc code=end
