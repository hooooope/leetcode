/*
 * @lc app=leetcode.cn id=367 lang=typescript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/* function isPerfectSquare(num: number): boolean {
  let i = 1;
  while (i * i < num) {
    i++;
  }
  return i * i === num;
} */

function isPerfectSquare(num: number): boolean {
  let left = 1;
  let right = num;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    const square = mid * mid;
    if (square > num) {
      right = mid - 1;
    } else if (square < num) {
      left = mid + 1;
    } else {
      return true;
    }
  }
  return false;
}
// @lc code=end
