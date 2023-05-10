/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
// 基于快速排序的选择方法
/* function findKthLargest(nums: number[], k: number): number {
  const partition = (nums: number[], left: number, right: number) => {
    const x = nums[right];
    let less = left - 1;
    for (; left < right; left++) {
      if (nums[left] <= x) {
        swap(nums, left, less + 1);
        less++;
      }
    }
    swap(nums, less + 1, right);
    return less + 1;
  };
  const swap = (nums: number[], left: number, right: number) => {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
  };
  const quickSelect = (
    nums: number[],
    left: number,
    right: number,
    index: number
  ) => {
    const random = left + Math.floor(Math.random() * (right - left + 1));
    swap(nums, random, right);
    const q = partition(nums, left, right);
    if (q === index) {
      return nums[q];
    } else {
      return q < index
        ? quickSelect(nums, q + 1, right, index)
        : quickSelect(nums, left, q - 1, index);
    }
  };
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
} */

// 基于堆排序的选择方法
function findKthLargest(nums: number[], k: number): number {
  const swap = (nums: number[], left: number, right: number) => {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
  };
  const maxHeapify = (nums: number[], i: number, heapSize: number) => {
    let left = i * 2;
    let right = i * 2 + 1;
    let largest = i;
    if (left < heapSize && nums[left] > nums[largest]) {
      largest = left;
    }
    if (right < heapSize && nums[right] > nums[largest]) {
      largest = right;
    }
    if (largest !== i) {
      swap(nums, i, largest);
      maxHeapify(nums, largest, heapSize);
    }
  };
  const buildMaxHeap = (nums: number[], heapSize: number) => {
    for (let i = heapSize >> 1; i >= 0; i--) {
      maxHeapify(nums, i, heapSize);
    }
  };
  let heapSize = nums.length;
  buildMaxHeap(nums, heapSize);
  for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
    swap(nums, 0, i);
    heapSize--;
    maxHeapify(nums, 0, heapSize);
  }
  return nums[0];
}
// @lc code=end
