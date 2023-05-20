/*
 * @lc app=leetcode.cn id=2215 lang=typescript
 *
 * [2215] 找出两数组的不同
 */

// @lc code=start
function findDifference(nums1: number[], nums2: number[]): number[][] {
  const ret: number[][] = [[], []]
  const s1 = new Set(nums1)
  const s2 = new Set(nums2)
  for (const num of s1) {
    if (!s2.has(num)) {
      ret[0].push(num)
    }
  }
  for (const num of s2) {
    if (!s1.has(num)) {
      ret[1].push(num)
    }
  }
  return ret
};
// @lc code=end

