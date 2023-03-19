/*
 * @lc app=leetcode.cn id=171 lang=typescript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
// 从后往前遍历
/* function titleToNumber(columnTitle: string): number {
  let ret = 0;
  for (let i = columnTitle.length - 1, j = 0; i >= 0; i--, j++) {
    const c = columnTitle[i];
    ret += 26 ** j * (c.charCodeAt(0) - "A".charCodeAt(0) + 1);
  }
  return ret;
} */

// 从前往后遍历
function titleToNumber(columnTitle: string): number {
  let ret = 0;
  const CHAR_CODE_A = "A".charCodeAt(0);
  for (let i = 0; i < columnTitle.length; i++) {
    ret = ret * 26 + columnTitle[i].charCodeAt(0) - CHAR_CODE_A + 1;
  }
  return ret;
}
// @lc code=end
