/*
 * @lc app=leetcode.cn id=1144 lang=typescript
 *
 * [1144] 递减元素使数组呈锯齿状
 */

// @lc code=start
// 贪心
function movesToMakeZigzag(nums: number[]): number {
  const help = (nums: number[], pos: number) => {
    let ret = 0;
    const n = nums.length;
    for (let i = pos; i < n; i += 2) {
      let a = 0;
      if (i - 1 >= 0) {
        a = Math.max(a, nums[i] - nums[i - 1] + 1);
      }
      if (i + 1 < n) {
        a = Math.max(a, nums[i] - nums[i + 1] + 1);
      }
      ret += a;
    }
    return ret;
  };
  return Math.min(help(nums, 0), help(nums, 1));
}
// @lc code=end
