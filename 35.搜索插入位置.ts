/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/* function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      return i;
    }
  }
  return nums.length;
} */

/* function searchInsert(nums: number[], target: number): number {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  let ans = n;
  while (left <= right) {
    let mid = ((right - left) >> 1) + left;
    if (target <= nums[mid]) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
} */

function searchInsert(nums: number[], target: number): number {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let mid = ((right - left) >> 1) + left;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
// @lc code=end
