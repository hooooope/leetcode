/*
 * @lc app=leetcode.cn id=504 lang=typescript
 *
 * [504] 七进制数
 */

// @lc code=start
function convertToBase7(num: number): string {
  if (num === 0) return "0";
  let ret: string[] = [];
  let negative = num < 0;
  num = Math.abs(num);
  while (num) {
    ret.push(String(num % 7));
    num = Math.floor(num / 7);
  }
  if (negative) {
    ret.push("-");
  }
  return ret.reverse().join("");
}
// @lc code=end
