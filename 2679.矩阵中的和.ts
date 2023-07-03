/*
 * @lc app=leetcode.cn id=2679 lang=typescript
 *
 * [2679] 矩阵中的和
 */

// @lc code=start
function matrixSum(nums: number[][]): number {
  const n = nums.length;
  const m = nums[0].length;
  for (let i = 0; i < n; i++) {
    nums[i].sort((a, b) => a - b);
  }
  let ret = 0;
  for (let j = 0; j < m; j++) {
    let temp = 0;
    for (let i = 0; i < n; i++) {
      temp = Math.max(temp, nums[i].pop()!);
    }
    ret += temp;
  }
  return ret;
}
// @lc code=end
