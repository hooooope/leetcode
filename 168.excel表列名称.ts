/*
 * @lc app=leetcode.cn id=168 lang=typescript
 *
 * [168] Excel表列名称
 */

// @lc code=start
// 形参范围是[1, 26]，不是[0, 25]，不能直接视为26进制
/* function convertToTitle(columnNumber: number): string {
  let ret = "";
  const CHAR_CODE_A = "A".charCodeAt(0);
  while (columnNumber) {
    const n = (columnNumber - 1) % 26;
    ret = String.fromCharCode(n + CHAR_CODE_A) + ret;
    columnNumber = Math.floor((columnNumber + 1 - n) / 26);
  }
  return ret;
} */

function convertToTitle(columnNumber: number): string {
  let ret: string[] = [];
  const CHAR_CODE_A = "A".charCodeAt(0);
  while (columnNumber) {
    columnNumber--;
    ret.unshift(String.fromCharCode((columnNumber % 26) + CHAR_CODE_A));
    columnNumber = Math.floor(columnNumber / 26);
  }
  return ret.join("");
}
// @lc code=end
