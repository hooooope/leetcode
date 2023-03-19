/*
 * @lc app=leetcode.cn id=1013 lang=typescript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/* function canThreePartsEqualSum(arr: number[]): boolean {
  let sum = arr.reduce((a, b) => a + b, 0);
  const target = sum / 3;
  let i = 0;
  let cnt = 0;
  let cur = 0;
  const n = arr.length;
  while (i < n) {
    cur += arr[i];
    if (cur === target) {
      cur = 0;
      cnt++;
      if (cnt === 3) {
        break;
      }
    }
    i++;
  }
  sum = 0;
  for (i = i + 1; i < n; i++) {
    sum += arr[i];
  }
  return i === n && sum === 0 && cnt === 3;
} */

function canThreePartsEqualSum(arr: number[]): boolean {
  const sum = arr.reduce((a, b) => a + b, 0);
  const target = sum / 3;
  let i = 0;
  let cur = 0;
  const n = arr.length;
  while (i < n) {
    cur += arr[i];
    if (cur === target) {
      break;
    }
    i++;
  }
  if (cur !== target) {
    return false;
  }
  let j = i + 1;
  // 需要满足最后一个数组非空
  while (j + 1 < n) {
    cur += arr[j];
    if (cur === target * 2) {
      return true;
    }
    j++;
  }
  return false;
}
// @lc code=end
