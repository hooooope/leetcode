/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
/* function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = 0,
    p2 = 0,
    cur = 0;
  const sorted = new Array(m + n).fill(0);
  while (p1 < m && p2 < n) {
    if (nums1[p1] <= nums2[p2]) {
      cur = nums1[p1++];
    } else {
      cur = nums2[p2++];
    }
    sorted[p1 + p2 - 1] = cur;
  }
  while (p1 < m) {
    sorted[p1 + p2] = nums1[p1];
    p1++;
  }
  while (p2 < n) {
    sorted[p1 + p2] = nums2[p2];
    p2++;
  }
  for (let i = 0; i < m + n; i++) {
    nums1[i] = sorted[i];
  }
} */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let cur = 0;
  let p1 = m - 1;
  let p2 = n - 1;
  let tail = m + n - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      cur = nums2[p2--];
    } else if (p2 === -1) {
      cur = nums1[p1--];
    } else if (nums1[p1] >= nums2[p2]) {
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--];
    }
    nums1[tail--] = cur;
  }
}
// @lc code=end
