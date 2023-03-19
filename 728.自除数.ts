/*
 * @lc app=leetcode.cn id=728 lang=typescript
 *
 * [728] 自除数
 */

// @lc code=start
function selfDividingNumbers(left: number, right: number): number[] {
  const ret: number[] = [];
  for (let i = left; i <= right; i++) {
    let num = i;
    while (num) {
      const remainder = num % 10;
      // 非自除数
      if (remainder === 0 || i % remainder !== 0) {
        break;
      }
      num = Math.floor(num / 10);
    }
    if (!num) {
      ret.push(i);
    }
  }
  return ret;
}
// @lc code=end
