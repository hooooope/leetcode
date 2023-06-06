/*
 * @lc app=leetcode.cn id=435 lang=typescript
 *
 * [435] 无重叠区间
 */

// @lc code=start
// 动态规划（Time Limit Exceeded）
/* function eraseOverlapIntervals(intervals: number[][]): number {
  const n = intervals.length;
  const dp: number[] = new Array(n).fill(1);
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (intervals[j][1] <= intervals[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return n - Math.max(...dp);
} */

// 贪心
function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);
  let ret = 1;
  const n = intervals.length;
  let right = intervals[0][1];
  for (let i = 1; i < n; i++) {
    if (intervals[i][0] >= right) {
      ret++;
      right = intervals[i][1];
    }
  }
  return n - ret;
}
// @lc code=end
