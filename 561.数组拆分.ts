/*
 * @lc app=leetcode.cn id=561 lang=typescript
 *
 * [561] 数组拆分
 */

// @lc code=start
/* 
  n = 2
  2n = 4
  1,4,3,2
  1,2,3,4
  (1,2)
  (3,4)

  n = 3
  2n = 6
  1,2,2,5,6,6
  (1,2)
  (2,5)
  (6,6)
*/
function arrayPairSum(nums: number[]): number {
  let ret = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    ret += nums[i];
  }
  return ret;
}
// @lc code=end
