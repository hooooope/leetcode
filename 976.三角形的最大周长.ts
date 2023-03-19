/*
 * @lc app=leetcode.cn id=976 lang=typescript
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
// 贪心+排序
function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => a - b);
  for (let i = nums.length - 1; i >= 2; i--) {
    if (nums[i - 2] + nums[i - 1] > nums[i]) {
      return nums[i - 2] + nums[i - 1] + nums[i];
    }
  }
  return 0;
}
// @lc code=end
