/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
// 二分查找
function twoSum(numbers: number[], target: number): number[] {
  const n = numbers.length;
  for (let i = 0; i < n; i++) {
    let l = i + 1;
    let r = n - 1;
    while (l <= r) {
      const m = ((r - l) >> 1) + l;
      if (numbers[m] === target - numbers[i]) {
        return [i + 1, m + 1];
      } else if (numbers[m] > target - numbers[i]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }
  return [-1, -1];
}

// 双指针
/* function twoSum(numbers: number[], target: number): number[] {
  const n = numbers.length;
  let l = 0;
  let r = n - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) {
      return [l + 1, r + 1];
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
  return [-1, -1];
} */
// @lc code=end
