/*
 * @lc app=leetcode.cn id=414 lang=typescript
 *
 * [414] 第三大的数
 */

// @lc code=start
// 排序
/* function thirdMax(nums: number[]): number {
  nums.sort((a, b) => b - a);
  for (let i = 1, diff = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] && ++diff === 3) {
      return nums[i];
    }
  }
  return nums[0];
} */

// 有序集合
/* function thirdMax(nums: number[]): number {
  const sortedList: number[] = [];
  for (const n of nums) {
    if (sortedList.includes(n)) {
      continue;
    }
    sortedList.push(n);
    for (let i = sortedList.length - 1; i > 0; i--) {
      if (sortedList[i] < sortedList[i - 1]) {
        let temp = sortedList[i];
        sortedList[i] = sortedList[i - 1];
        sortedList[i - 1] = temp;
      }
    }
    if (sortedList.length > 3) {
      sortedList.shift();
    }
  }
  return sortedList.length >= 3
    ? sortedList[0]
    : sortedList[sortedList.length - 1];
} */

// 一次遍历
function thirdMax(nums: number[]): number {
  let a = -Number.MAX_VALUE;
  let b = -Number.MAX_VALUE;
  let c = -Number.MAX_VALUE;
  for (const n of nums) {
    if (n > a) {
      c = b;
      b = a;
      a = n;
    } else if (n < a && n > b) {
      c = b;
      b = n;
    } else if (n < b && n > c) {
      c = n;
    }
  }
  return c === -Number.MAX_VALUE ? a : c;
}
// @lc code=end
