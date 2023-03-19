/*
 * @lc app=leetcode.cn id=1798 lang=typescript
 *
 * [1798] 你能构造出连续值的最大数目
 */

// @lc code=start
function getMaximumConsecutive(coins: number[]): number {
  let x = 0; // 当前可以构造的区间为[0,x]
  coins.sort((a, b) => a - b);
  for (const y of coins) {
    // 如果y<=x+1，则加入整数y后能构造出[0,x+y]区间的整数
    if (y <= x + 1) {
      x += y;
    } else {
      // 由于coins已经按升序排序
      // 若当前整数大于x+1，则数组后面所有整数都大于x+1
      break;
    }
  }
  return x + 1;
}
// @lc code=end
