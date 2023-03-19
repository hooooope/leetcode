/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
// 动态规划
/* function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  let ret = 1;
  const n = nums.length;
  const dp: number[] = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    ret = Math.max(ret, dp[i]);
  }
  return ret;
} */

// 贪心+二分
function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  // 目前最长递增子序列的长度
  let len = 1;
  // d[i]表示长度为i的最长递增子序列的末尾元素的最小值
  const d: number[] = new Array(n + 1);
  d[len] = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] > d[len]) {
      d[++len] = nums[i];
    } else {
      let l = 1;
      let r = len;
      // 如果找不到说明所有的数都比nums[i]大，此时要更新d[1]，所以这里将pos设为0
      let pos = 0;
      while (l <= r) {
        const mid = (l + r) >> 1;
        if (d[mid] < nums[i]) {
          pos = mid;
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      d[pos + 1] = nums[i];
    }
  }
  return len;
}
// @lc code=end
