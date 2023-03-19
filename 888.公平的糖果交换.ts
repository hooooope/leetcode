/*
 * @lc app=leetcode.cn id=888 lang=typescript
 *
 * [888] 公平的糖果交换
 */

// @lc code=start
/* 
  SumA - x + y = SumB + x - y
  x = (SumA - SumB / 2) + y
*/
function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  const ret: number[] = [];
  const aliceTotal = aliceSizes.reduce((a, b) => a + b, 0);
  const bobTotal = bobSizes.reduce((a, b) => a + b, 0);
  const delta = Math.floor((aliceTotal - bobTotal) / 2);
  const set = new Set(aliceSizes);
  for (const y of bobSizes) {
    const x = y + delta;
    if (set.has(x)) {
      ret[0] = x;
      ret[1] = y;
      break;
    }
  }
  return ret;
}
// @lc code=end
