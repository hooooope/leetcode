/*
 * @lc app=leetcode.cn id=507 lang=typescript
 *
 * [507] 完美数
 */

// @lc code=start
/* function checkPerfectNumber(num: number): boolean {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
} */
function checkPerfectNumber(num: number): boolean {
  if (num === 1) {
    return false;
  }
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      // 当 i*i=num 时，这两个因子不能重复计算
      if (i * i < num) {
        sum += num / i;
      }
    }
  }
  return sum === num;
}
// @lc code=end
