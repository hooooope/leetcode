/*
 * @lc app=leetcode.cn id=334 lang=typescript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/* 
  双向遍历
  如果数组nums中存在一个下标i满足1<=i<n-1，使得在nums[i]的左边存在一个元素小于nums[i]且在nums[i]的右边存在一个元素大于nums[i],则数组nums中存在递增的三元子序列
*/
/* function increasingTriplet(nums: number[]): boolean {
  const n = nums.length
  if (n < 3) {
    return false
  }
  const leftMin = new Array(n).fill(0)
  leftMin[0] = nums[0]
  for (let i = 1; i < n; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i])
  }
  const rightMax = new Array(n).fill(0)
  rightMax[n - 1] = nums[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], nums[i])
  }
  for (let i = 1; i < n - 1; i++) {
    if (leftMin[i] < nums[i] && nums[i] < rightMax[i]) {
      return true
    }
  }
  return false
}; */

// 贪心
function increasingTriplet(nums: number[]): boolean {
  const n = nums.length
  if (n < 3) {
    return false
  }
  let first = nums[0]
  let second = Number.MAX_VALUE
  for (let i = 1; i < n; i++) {
    if (nums[i] > second) {
      return true
    } else if (nums[i] > first) {
      second = nums[i]
    } else {
      first = nums[i]
    }
  }
  return false
};
// @lc code=end

