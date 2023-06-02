/*
 * @lc app=leetcode.cn id=162 lang=typescript
 *
 * [162] 寻找峰值
 */

// @lc code=start
// 暴力
/* function findPeakElement(nums: number[]): number {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (
      (i === 0 || nums[i - 1] < nums[i]) &&
      (i === n - 1 || nums[i] > nums[i + 1])
    ) {
      return i;
    }
  }
  return -1;
} */

// 暴力
/* function findPeakElement(nums: number[]): number {
  let ret = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[ret]) {
      ret = i;
    }
  }
  return ret;
} */

// 迭代爬坡
/* function findPeakElement(nums: number[]): number {
  const get = (nums: number[], idx: number) => {
    if (idx === -1 || idx === nums.length) {
      return [0, 0];
    }
    return [1, nums[idx]];
  };
  const compare = (nums: number[], idx1: number, idx2: number) => {
    const num1 = get(nums, idx1);
    const num2 = get(nums, idx2);
    if (num1[0] !== num2[0]) {
      return num1[0] > num2[0] ? 1 : -1;
    }
    return num1[1] > num2[1] ? 1 : -1;
  };
  const n = nums.length;
  let idx = Math.floor(Math.random() * n);
  while (
    !(compare(nums, idx - 1, idx) < 0 && compare(nums, idx, idx + 1) > 0)
  ) {
    if (compare(nums, idx, idx + 1) < 0) {
      idx += 1;
    } else {
      idx -= 1;
    }
  }
  return idx;
} */

// 二分查找
function findPeakElement(nums: number[]): number {
  const get = (nums: number[], idx: number) => {
    if (idx === -1 || idx === nums.length) {
      return [0, 0];
    }
    return [1, nums[idx]];
  };
  const compare = (nums: number[], idx1: number, idx2: number) => {
    const num1 = get(nums, idx1);
    const num2 = get(nums, idx2);
    if (num1[0] !== num2[0]) {
      return num1[0] > num2[0] ? 1 : -1;
    }
    return num1[1] > num2[1] ? 1 : -1;
  };

  const n = nums.length;
  let left = 0;
  let right = n - 1;
  let ret = -1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (compare(nums, mid - 1, mid) < 0 && compare(nums, mid, mid + 1) > 0) {
      ret = mid;
      break;
    }
    if (compare(nums, mid, mid + 1) < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ret;
}
// @lc code=end
