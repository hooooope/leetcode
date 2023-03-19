/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let y = 0;
  while (x > y) {
    y = y * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === y || x === Math.floor(y / 10);
}
// @lc code=end
