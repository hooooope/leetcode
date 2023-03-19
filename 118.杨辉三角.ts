/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/* function generate(numRows: number): number[][] {
  const ret: number[][] = [];
  ret.push([1]);
  for (let i = 1; i < numRows; i++) {
    const row: number[] = [];
    const preRow: number[] = ret[i - 1];
    row.push(1);
    for (let j = 1; j < i; j++) {
      row.push(preRow[j - 1] + preRow[j]);
      ret[i - 1];
    }
    row.push(1);
    ret.push(row);
  }
  return ret;
} */

function generate(numRows: number): number[][] {
  const ret: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
    }
    ret.push(row);
  }
  return ret;
}
// @lc code=end
