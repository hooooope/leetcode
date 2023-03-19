/*
 * @lc app=leetcode.cn id=941 lang=typescript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/* function validMountainArray(arr: number[]): boolean {
  const n = arr.length;
  let i = 1;
  let asc = false;
  let desc = false;
  while (arr[i] - arr[i - 1] > 0) {
    i++;
    asc = true;
  }
  while (arr[i] - arr[i - 1] < 0) {
    i++;
    desc = true;
  }
  return i === n && asc && desc;
} */

function validMountainArray(arr: number[]): boolean {
  const n = arr.length;
  let i = 0;
  // 递增扫描
  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
  }
  // 最高点不能是数组的第一个位置或最后一个位置
  if (i === 0 || i === n - 1) {
    return false;
  }
  // 递减扫描
  while (i + 1 < n && arr[i] > arr[i + 1]) {
    i++;
  }
  return i === n - 1;
}
// @lc code=end
