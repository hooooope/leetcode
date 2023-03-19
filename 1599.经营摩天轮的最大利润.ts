/*
 * @lc app=leetcode.cn id=1599 lang=typescript
 *
 * [1599] 经营摩天轮的最大利润
 */

// @lc code=start
function minOperationsMaxProfit(
  customers: number[],
  boardingCost: number,
  runningCost: number
): number {
  let preCustomer = 0;
  let curCustomer = 0;
  let curProfit = 0;
  let curRotate = 0;
  let maxProfit = 0;
  let minRotate = -1;
  // phase 1
  for (const customer of customers) {
    preCustomer += customer;
    curCustomer = Math.min(4, preCustomer);
    preCustomer -= curCustomer;
    curProfit += curCustomer * boardingCost - runningCost;
    curRotate++;
    if (curProfit > maxProfit) {
      maxProfit = curProfit;
      minRotate = curRotate;
    }
  }
  // phase 2
  curProfit +=
    Math.floor(preCustomer / 4) * 4 * boardingCost -
    Math.floor(preCustomer / 4) * runningCost;
  curRotate += Math.floor(preCustomer / 4);
  if (curProfit > maxProfit) {
    maxProfit = curProfit;
    minRotate = curRotate;
  }
  // phase 3
  if (preCustomer % 4 > 0) {
    curProfit += (preCustomer % 4) * boardingCost - runningCost;
    curRotate++;
    if (curProfit > maxProfit) {
      maxProfit = curProfit;
      minRotate = curRotate;
    }
  }
  return minRotate;
}
// @lc code=end
