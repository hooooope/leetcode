/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
/* function addStrings(num1: string, num2: string): string {
  let ret: string[] = [];
  let overflow = 0;
  const CHAR_CODE_0 = "0".charCodeAt(0);
  const len = Math.max(num1.length, num2.length);
  num1 = num1.padStart(len, "0");
  num2 = num2.padStart(len, "0");
  for (let i = len - 1; i >= 0; i--) {
    const n =
      num1[i].charCodeAt(0) +
      num2[i].charCodeAt(0) +
      overflow -
      2 * CHAR_CODE_0;
    const charCode = (n % 10) + CHAR_CODE_0;
    overflow = n > 9 ? 1 : 0;
    ret.unshift(String.fromCharCode(charCode));
  }
  if (overflow) {
    ret.unshift("1");
  }
  return ret.join("");
} */

function addStrings(num1: string, num2: string): string {
  const ret: number[] = [];
  let i = num1.length - 1;
  let j = num2.length - 1;
  let overflow = 0;
  while (i >= 0 || j >= 0 || overflow !== 0) {
    const x = i >= 0 ? num1[i].charCodeAt(0) - "0".charCodeAt(0) : 0;
    const y = j >= 0 ? num2[j].charCodeAt(0) - "0".charCodeAt(0) : 0;
    const sum = x + y + overflow;
    ret.unshift(sum % 10);
    overflow = Math.floor(sum / 10);
    i--;
    j--;
  }
  return ret.join("");
}
// @lc code=end
