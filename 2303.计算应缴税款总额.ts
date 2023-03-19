/*
 * @lc app=leetcode.cn id=2303 lang=typescript
 *
 * [2303] 计算应缴税款总额
 */

// @lc code=start
/* function calculateTax(brackets: number[][], income: number): number {
  let ret = Math.min(income, brackets[0][0]) * (brackets[0][1] / 100);
  for (let i = 1; i < brackets.length; i++) {
    const [preUpper, prePercent] = brackets[i - 1];
    const [upper, percent] = brackets[i];
    if (income > preUpper) {
      ret += (Math.min(income, upper) - preUpper) * (percent / 100);
    } else {
      break;
    }
  }
  return ret;
} */

function calculateTax(brackets: number[][], income: number): number {
  let ret = 0;
  let lower = 0;
  for (const [upper, percent] of brackets) {
    const tax = (Math.min(income, upper) - lower) * percent;
    ret += tax;
    if (income <= upper) {
      break;
    }
    lower = upper;
  }
  return ret / 100;
}
// @lc code=end
