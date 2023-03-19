/*
 * @lc app=leetcode.cn id=1342 lang=typescript
 *
 * [1342] 将数字变成 0 的操作次数
 */

// @lc code=start
/* function numberOfSteps(num: number): number {
  let ret = 0;
  while (num) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    ret++;
  }
  return ret;
} */

/* function numberOfSteps(num: number): number {
  let ret = 0;
  while (num) {
    num & 1 ? (num -= 1) : (num /= 2);
    ret++;
  }
  return ret;
} */

/*
  14 7 6 3 2 1 0
  14 7 3 1 0
  偶数+1 num/2
  奇数+2 num/2
  1  +1 num/2
*/
var numberOfSteps = function (num: number) {
  let ret = 0;
  while (num > 0) {
    ret += (num > 1 ? 1 : 0) + (num & 0x01);
    num >>= 1;
  }
  return ret;
};
// @lc code=end
