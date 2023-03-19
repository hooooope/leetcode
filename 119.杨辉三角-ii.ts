/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/* function getRow(rowIndex: number): number[] {
  const rows: number[][] = [];
  for (let i = 0; i <= rowIndex; i++) {
    const row: number[] = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      row[j] = rows[i - 1][j - 1] + rows[i - 1][j];
    }
    rows.push(row);
  }
  return rows[rowIndex];
} */

// 滚动数组优化空间复杂度
/* function getRow(rowIndex: number): number[] {
  let pre: number[] = [];
  let cur: number[] = [];
  for (let i = 0; i <= rowIndex; i++) {
    cur = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      cur[j] = pre[j - 1] + pre[j];
    }
    pre = cur;
  }
  return cur;
} */

// 进一步优化空间复杂度
function getRow(rowIndex: number): number[] {
  const row = new Array(rowIndex + 1).fill(0);
  row[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      row[j] += row[j - 1];
    }
  }
  return row;
}
// @lc code=end
