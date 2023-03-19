/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 */

// @lc code=start
/* function countBits(n: number): number[] {
  const ret: number[] = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    ret[i] = countOnes(i);
  }
  return ret;
}
const countOnes = (n: number): number => {
  let ones = 0;
  while (n) {
    n &= n - 1;
    ones++;
  }
  return ones;
}; */

function countBits(n: number): number[] {
  const ret: number[] = new Array(n + 1).fill(0);
  let highBit = 0;
  for (let i = 1; i <= n; i++) {
    if ((i & (i - 1)) === 0) {
      highBit = i;
    }
    ret[i] = ret[i - highBit] + 1;
  }
  return ret;
}
// @lc code=end
