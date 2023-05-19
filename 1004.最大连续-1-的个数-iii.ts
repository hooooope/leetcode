/*
 * @lc app=leetcode.cn id=1004 lang=typescript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
// 二分查找
/* function longestOnes(nums: number[], k: number): number {
  const n = nums.length
  // P[i]表示nums{0:i-1}中0的个数
  const P: number[] = new Array(n + 1).fill(0)
  P[0] = 0
  for (let i = 1; i <= n; i++) {
    P[i] = P[i - 1] + (1 - nums[i - 1])
  }
  const binarySearch = (arr: number[], target: number) => {
    let low = 0
    let high = arr.length - 1
    while (low < high) {
      const mid = Math.floor((high - low) / 2) + low
      if (P[mid] < target) {
        low = mid + 1
      } else {
        high = mid
      }
    }
    return low
  }
  let ret = 0;
  for (let right = 0; right < n; right++) {
    const left = binarySearch(P, P[right + 1] - k)
    ret = Math.max(ret, right - left + 1)
  }
  return ret;
}; */

// 滑动窗口
function longestOnes(nums: number[], k: number): number {
  const n = nums.length
  let ret = 0;
  let left = 0
  let lSum = 0;
  let rSum = 0
  for (let right = 0; right < n; right++) {
    rSum += 1 - nums[right]
    while (lSum < rSum - k) {
      lSum += 1 - nums[left]
      left++
    }
    ret = Math.max(ret, right - left + 1)
  }
  return ret;
};
// @lc code=end

