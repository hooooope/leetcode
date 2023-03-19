/*
 * @lc app=leetcode.cn id=485 lang=typescript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
  let ret = 0;
  let cnt = 0;
  for (const n of nums) {
    if (n === 1) {
      cnt++;
    } else {
      ret = Math.max(cnt, ret);
      cnt = 0;
    }
  }
  ret = Math.max(cnt, ret);
  return ret;
}
// @lc code=end
