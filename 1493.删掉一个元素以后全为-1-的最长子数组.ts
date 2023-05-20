/*
 * @lc app=leetcode.cn id=1493 lang=typescript
 *
 * [1493] 删掉一个元素以后全为 1 的最长子数组
 */

// @lc code=start
// 递推
/* function longestSubarray(nums: number[]): number {
  const n = nums.length
  const pre: number[] = new Array(n)
  pre[0] = nums[0]
  for (let i = 1; i < n; i++) {
    pre[i] = nums[i] === 0 ? 0 : pre[i - 1] + 1
  }
  const suf: number[] = new Array(n)
  suf[n - 1] = nums[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    suf[i] = nums[i] === 0 ? 0 : suf[i + 1] + 1
  }
  let ret = 0
  for (let i = 0; i < n; i++) {
    const preSum = i === 0 ? 0 : pre[i - 1]
    const sufSum = i === n - 1 ? 0 : suf[i + 1]
    ret = Math.max(ret, preSum + sufSum)
  }
  return ret
}; */

// 递推优化（滑动窗口）
function longestSubarray(nums: number[]): number {
  let ret = 0
  // p0为以第i位结尾的最长连续全1子数组
  let p0 = 0;
  // p1为以第i位结尾，并且可以在某个位置删除一个0的最长连续全1子数组
  // 注意这里我们规定了只删除0，而不是任意一个元素，这是因为只要数组中的元素不全为1，那么删除1就没有任何意义
  let p1 = 0
  for (const num of nums) {
    if (num === 0) {
      p1 = p0
      p0 = 0
    } else {
      p0++
      p1++
    }
    ret = Math.max(ret, p1)
  }
  // 当遇到数组中的元素全为1的特殊情况时，我们需要将答案减去1，这是因为在这种情况下，我们不得不删除一个1
  if (ret === nums.length) {
    ret--
  }
  return ret
};
// @lc code=end

