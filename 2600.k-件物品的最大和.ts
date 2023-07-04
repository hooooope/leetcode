/*
 * @lc app=leetcode.cn id=2600 lang=typescript
 *
 * [2600] K 件物品的最大和
 */

// @lc code=start
/* function kItemsWithMaximumSum(
  numOnes: number,
  numZeros: number,
  numNegOnes: number,
  k: number
): number {
  let ret = 0;
  if (k <= numOnes) {
    return k;
  } else {
    k -= numOnes;
    ret += numOnes;
  }
  if (k <= numZeros) {
    return ret;
  } else {
    k -= numZeros;
  }
  ret -= k;
  return ret;
} */

// 贪心
function kItemsWithMaximumSum(
  numOnes: number,
  numZeros: number,
  numNegOnes: number,
  k: number
): number {
  if (k <= numOnes) {
    return k;
  } else if (k <= numOnes + numZeros) {
    return numOnes;
  } else {
    return numOnes - (k - numOnes - numZeros);
  }
}
// @lc code=end
