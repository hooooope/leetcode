/*
 * @lc app=leetcode.cn id=1985 lang=typescript
 *
 * [1985] 找出数组中的第 K 大整数
 */

// @lc code=start
function kthLargestNumber(nums: string[], k: number): string {
  nums.sort((a, b) => {
    if (a.length < b.length) {
      return 1;
    } else if (a.length > b.length) {
      return -1;
    } else {
      return a < b ? 1 : -1;
    }
  });
  return nums[k - 1];
}
// @lc code=end
