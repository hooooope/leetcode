/*
 * @lc app=leetcode.cn id=908 lang=typescript
 *
 * [908] 最小差值 I
 */

// @lc code=start
/* 
  1.最大和最小元素的差值
  2.差值最小
*/
function smallestRangeI(nums: number[], k: number): number {
  let max = nums[0];
  let min = nums[0];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    max = Math.max(max, num);
    min = Math.min(min, num);
  }
  return max - min <= 2 * k ? 0 : max - min - 2 * k;
}
// @lc code=end
