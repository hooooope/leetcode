/*
 * @lc app=leetcode.cn id=674 lang=typescript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
// 发生非递增时，更新结果
/* function findLengthOfLCIS(nums: number[]): number {
  let ret = 0;
  let start = 0;
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] <= nums[i - 1]) {
      ret = Math.max(ret, i - start);
      start = i;
    }
  }
  ret = Math.max(ret, n - start);
  return ret;
} */

// 每一次遍历都更新结果
function findLengthOfLCIS(nums: number[]): number {
  let ret = 0;
  let start = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] <= nums[i - 1]) {
      start = i;
    }
    ret = Math.max(ret, i - start + 1);
  }
  return ret;
}
// @lc code=end
