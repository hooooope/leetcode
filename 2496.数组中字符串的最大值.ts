/*
 * @lc app=leetcode.cn id=2496 lang=typescript
 *
 * [2496] 数组中字符串的最大值
 */

// @lc code=start
/* function maximumValue(strs: string[]): number {
  let ret = 0;
  for (const str of strs) {
    if (isNaN(Number(str))) {
      ret = Math.max(ret, str.length);
    } else {
      ret = Math.max(ret, Number(str));
    }
  }
  return ret;
} */

function maximumValue(strs: string[]): number {
  let ret = 0;
  for (const str of strs) {
    let isDigits = true;
    for (const char of str) {
      isDigits = isDigits && "0" <= char && char <= "9";
    }
    ret = Math.max(ret, isDigits ? Number(str) : str.length);
  }
  return ret;
}
// @lc code=end
