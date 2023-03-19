/*
 * @lc app=leetcode.cn id=806 lang=typescript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
function numberOfLines(widths: number[], s: string): number[] {
  let row = 1;
  let col = 0;
  const MAX_WIDTH = 100;
  for (const c of s) {
    const width = widths[c.charCodeAt(0) - "a".charCodeAt(0)];
    if (col + width > MAX_WIDTH) {
      row++;
      col = 0;
    }
    col += width;
  }
  return [row, col];
}
// @lc code=end
