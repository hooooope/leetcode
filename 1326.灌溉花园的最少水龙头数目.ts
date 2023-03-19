/*
 * @lc app=leetcode.cn id=1326 lang=typescript
 *
 * [1326] 灌溉花园的最少水龙头数目
 */

// @lc code=start
// 动态规划
/* function minTaps(n: number, ranges: number[]): number {
  const intervals: number[][] = new Array(n + 1)
    .fill(0)
    .map(() => new Array().fill(0));
  for (let i = 0; i <= n; i++) {
    const start = Math.max(i - ranges[i], 0);
    const end = Math.min(i + ranges[i], n);
    intervals[i] = [start, end];
  }
  intervals.sort((a, b) => a[0] - b[0]);
  // dp[i]表示覆盖区间[0, i]所需要的最少区间数量
  const dp: number[] = new Array(n + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (const [start, end] of intervals) {
    // 区间[0...start]无法覆盖
    if (dp[start] === Number.MAX_VALUE) {
      return -1;
    }
    for (let j = start; j <= end; j++) {
      dp[j] = Math.min(dp[j], dp[start] + 1);
    }
  }
  return dp[n];
} */

// 贪心
function minTaps(n: number, ranges: number[]): number {
  // rightMost[i]表示以i为左端点的子区间中最远的右端点
  const rightMost = new Array(n + 1).fill(0).map((_, i) => i);
  for (let i = 0; i <= n; i++) {
    const start = Math.max(i - ranges[i], 0);
    const end = Math.min(i + ranges[i], n);
    rightMost[start] = Math.max(rightMost[start], end);
  }
  let ret = 0;
  let pre = 0; // 上一个被使用的子区间的结束位置
  let last = 0; // 枚举到位置i时，左端点不大于i的所有子区间的最远右端点
  for (let i = 0; i < n; i++) {
    last = Math.max(last, rightMost[i]);
    // 当前能覆盖到的最远的右端点，只能到达当前位置
    if (i === last) {
      return -1;
    }
    // 用完了一个子区间
    if (i === pre) {
      ret++;
      pre = last;
    }
  }
  return ret;
}
// @lc code=end
