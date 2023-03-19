/*
 * @lc app=leetcode.cn id=2180 lang=typescript
 *
 * [2180] 统计各位数字之和为偶数的整数个数
 */

// @lc code=start
function countEven(num: number): number {
  let ret = 0;
  for (let i = 2; i <= num; i++) {
    let acc = 0;
    let num = i;
    while (num) {
      acc += num % 10;
      num = Math.floor(num / 10);
    }
    if (acc % 2 === 0) {
      ret++;
    }
  }
  return ret;
}
// @lc code=end
