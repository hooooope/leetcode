/*
 * @lc app=leetcode.cn id=1672 lang=typescript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
function maximumWealth(accounts: number[][]): number {
  let ret = 0;
  for (let i = 0; i < accounts.length; i++) {
    let acc = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      acc += accounts[i][j];
    }
    ret = acc > ret ? acc : ret;
  }
  return ret;
}
// @lc code=end
