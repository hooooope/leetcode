/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
// 两次二分查找
/* function searchMatrix(matrix: number[][], target: number): boolean {
  const binarySearchFirstColumn = (matrix: number[][], target: number) => {
    let low = -1;
    let high = matrix.length - 1;
    while (low < high) {
      const mid = ((high - low + 1) >> 1) + low;
      if (matrix[mid][0] <= target) {
        low = mid;
      } else {
        high = mid - 1;
      }
    }
    return low;
  };
  const binarySearchRow = (row: number[], target: number) => {
    let low = 0;
    let high = row.length - 1;
    while (low <= high) {
      const mid = ((high - low) >> 1) + low;
      if (row[mid] === target) {
        return true;
      } else if (row[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return false;
  };
  const rowIndex = binarySearchFirstColumn(matrix, target);
  if (rowIndex === -1) {
    return false;
  }
  return binarySearchRow(matrix[rowIndex], target);
} */

// 一次二分查找
function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  let low = 0;
  let high = m * n - 1;
  while (low <= high) {
    const mid = ((high - low) >> 1) + low;
    const x = matrix[Math.floor(mid / n)][mid % n];
    if (x < target) {
      low = mid + 1;
    } else if (x > target) {
      high = mid - 1;
    } else {
      return true;
    }
  }
  return false;
}

/* function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  let i = 0;
  let j = n - 1;
  while (i < m && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    }
    if (matrix[i][j] < target) {
      i++;
    } else if (matrix[i][j] > target) {
      j--;
    }
  }
  return false;
} */
// @lc code=end
