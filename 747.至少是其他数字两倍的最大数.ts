/*
 * @lc app=leetcode.cn id=747 lang=typescript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
function dominantIndex(nums: number[]): number {
  let max1 = 0;
  let max2 = 0;
  let maxIdx1 = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > max1) {
      maxIdx1 = i;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }
  return max1 >= max2 * 2 ? maxIdx1 : -1;
}
// dominantIndex([1, 0]);
// @lc code=end
