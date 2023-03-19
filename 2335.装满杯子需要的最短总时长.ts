/*
 * @lc app=leetcode.cn id=2335 lang=typescript
 *
 * [2335] 装满杯子需要的最短总时长
 */

// @lc code=start
/* 
  1 2 3
*/
function fillCups(amount: number[]): number {
  amount.sort((a, b) => a - b);
  if (amount[2] > amount[1] + amount[0]) {
    return amount[2];
  }
  return Math.ceil((amount[0] + amount[1] + amount[2]) / 2);
}
// @lc code=end
