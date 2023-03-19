/*
 * @lc app=leetcode.cn id=258 lang=typescript
 *
 * [258] 各位相加
 */

// @lc code=start
function addDigits(num: number): number {
  const _addDigits = (n: number): number => {
    let ret = 0;
    while (n) {
      ret += n % 10;
      n = Math.floor(n / 10);
    }
    return ret;
  };
  while (num >= 10) {
    num = _addDigits(num);
  }
  return num;
}
// @lc code=end
