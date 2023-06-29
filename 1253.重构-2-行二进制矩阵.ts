/*
 * @lc app=leetcode.cn id=1253 lang=typescript
 *
 * [1253] 重构 2 行二进制矩阵
 */

// @lc code=start
function reconstructMatrix(
  upper: number,
  lower: number,
  colsum: number[]
): number[][] {
  const n = colsum.length;
  let sum = 0;
  let twoSum = 0;
  for (let i = 0; i < n; i++) {
    sum += colsum[i];
    if (colsum[i] === 2) {
      twoSum++;
    }
  }
  if (sum !== upper + lower || twoSum > Math.min(upper, lower)) {
    return [];
  }
  upper -= twoSum;
  lower -= twoSum;
  const ret = new Array(2).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    if (colsum[i] === 2) {
      ret[0][i] = 1;
      ret[1][i] = 1;
    } else if (colsum[i] === 1) {
      if (upper > 0) {
        ret[0][i] = 1;
        upper--;
      } else {
        ret[1][i] = 1;
      }
    }
  }
  return ret;
}
// @lc code=end
