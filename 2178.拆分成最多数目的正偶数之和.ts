/*
 * @lc app=leetcode.cn id=2178 lang=typescript
 *
 * [2178] 拆分成最多数目的正偶数之和
 */

// @lc code=start
// 贪心
function maximumEvenSplit(finalSum: number): number[] {
  if (finalSum % 2 !== 0) {
    return [];
  }
  const ret: number[] = [];
  for (let i = 2; i <= finalSum; i += 2) {
    ret.push(i);
    finalSum -= i;
  }
  ret[ret.length - 1] += finalSum;
  return ret;
}
// @lc code=end
