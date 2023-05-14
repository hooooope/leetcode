/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
/* function sortColors(nums: number[]): void {
  const counts: number[] = new Array(3).fill(0);
  for (const num of nums) {
    counts[num]++;
  }
  let k = 0;
  for (let i = 0; i < counts.length; i++) {
    const count = counts[i];
    for (let j = 0; j < count; j++) {
      nums[k] = i;
      k++;
    }
  }
} */

// 单指针
/* function sortColors(nums: number[]): void {
  let ptr = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      const temp = nums[i];
      nums[i] = nums[ptr];
      nums[ptr] = temp;
      ptr++;
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      const temp = nums[i];
      nums[i] = nums[ptr];
      nums[ptr] = temp;
      ptr++;
    }
  }
} */

// 双指针
/* function sortColors(nums: number[]): void {
  const n = nums.length;
  let p0 = 0;
  let p1 = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      const temp = nums[i];
      nums[i] = nums[p0];
      nums[p0] = temp;
      if (p0 < p1) {
        const temp = nums[i];
        nums[i] = nums[p1];
        nums[p1] = temp;
      }
      p0++;
      p1++;
    } else if (nums[i] === 1) {
      const temp = nums[i];
      nums[i] = nums[p1];
      nums[p1] = temp;
      p1++;
    }
  }
} */

// 双指针
function sortColors(nums: number[]): void {
  const n = nums.length;
  let p0 = 0;
  let p2 = n - 1;
  for (let i = 0; i <= p2; i++) {
    if (nums[i] === 0) {
      const temp = nums[i];
      nums[i] = nums[p0];
      nums[p0] = temp;
      p0++;
    } else if (nums[i] === 2) {
      const temp = nums[i];
      nums[i] = nums[p2];
      nums[p2] = temp;
      p2--;
      i--;
    }
  }
}
// @lc code=end
