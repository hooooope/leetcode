/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
/* function mySqrt(x: number): number {
  let i = 0;
  while (i * i <= x) {
    i++;
  }
  return i - 1;
} */

// 根号x = x^(1/2) = e^(1/2 * lnx)
/* function mySqrt(x: number): number {
  const ret = Math.floor(Math.exp(0.5 * Math.log(x)));
  return (ret + 1) * (ret + 1) <= x ? ret + 1 : ret;
} */

// 二分查找
function mySqrt(x: number): number {
  let l = 0;
  let r = x;
  let ret = 0;
  while (l <= r) {
    const mid = ((r - l) >> 1) + l;
    if (mid * mid <= x) {
      l = mid + 1;
      ret = mid;
    } else {
      r = mid - 1;
    }
  }
  return ret;
}

/* function mySqrt(x: number): number {
  let l = 0;
  let r = x;
  while (l < r) {
    const mid = Math.floor((r + l + 1) / 2);
    if (mid * mid <= x) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  return l;
} */
// @lc code=end
