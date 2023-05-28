/*
 * @lc app=leetcode.cn id=2455 lang=typescript
 *
 * [2455] 可被三整除的偶数的平均值
 */

// @lc code=start
function averageValue(nums: number[]): number {
  let sum = 0;
  let cnt = 0;
  for (const num of nums) {
    if (num % 3 === 0 && num % 2 === 0) {
      sum += num;
      cnt++;
    }
  }
  return cnt === 0 ? 0 : Math.floor(sum / cnt);
}
// @lc code=end
