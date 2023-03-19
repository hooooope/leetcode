/*
 * @lc app=leetcode.cn id=374 lang=typescript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
  let left = 1;
  let right = n;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    const flag = guess(mid);
    if (flag > 0) {
      left = mid + 1;
    } else if (flag < 0) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
}
// @lc code=end
