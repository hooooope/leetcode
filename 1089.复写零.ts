/*
 * @lc app=leetcode.cn id=1089 lang=typescript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  let i = -1;
  let top = 0;
  const n = arr.length;
  while (top < n) {
    i++;
    if (arr[i] === 0) {
      top += 2;
    } else {
      top++;
    }
  }
  let j = n - 1;
  if (top === n + 1) {
    arr[j] = 0;
    j--;
    i--;
  }
  while (j >= 0) {
    arr[j] = arr[i];
    j--;
    if (arr[i] === 0) {
      arr[j] = 0;
      j--;
    }
    i--;
  }
}
// @lc code=end
