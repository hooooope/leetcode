/*
 * @lc app=leetcode.cn id=1822 lang=typescript
 *
 * [1822] 数组元素积的符号
 */

// @lc code=start
/* function arraySign(nums: number[]): number {
  let negative = 0;
  for (const n of nums) {
    if (n === 0) return 0;
    n < 0 && negative++;
  }
  return negative % 2 ? -1 : 1;
} */

function arraySign(nums: number[]): number {
  let negative = 1;
  for (const n of nums) {
    if (n === 0) return 0;
    if (n < 0) {
      negative = -negative;
    }
  }
  return negative;
}
// @lc code=end
