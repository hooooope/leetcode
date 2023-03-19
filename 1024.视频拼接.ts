/*
 * @lc app=leetcode.cn id=1024 lang=typescript
 *
 * [1024] 视频拼接
 */

// @lc code=start
// 动态规划
/* function videoStitching(clips: number[][], time: number): number {
  clips.sort((a, b) => a[0] - b[0]);
  // dp[i]表示覆盖[0:i]所需片段的最小数目
  const dp = new Array(time + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (const [start, end] of clips) {
    if (dp[start] === Number.MAX_VALUE) {
      return -1;
    }
    for (let i = start; i <= end; i++) {
      dp[i] = Math.min(dp[i], dp[start] + 1);
    }
  }
  return dp[time] === Number.MAX_VALUE ? -1 : dp[time];
} */

// 动态规划
function videoStitching(clips: number[][], time: number): number {
  const dp: number[] = new Array(time + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (let i = 1; i <= time; i++) {
    for (const [start, end] of clips) {
      if (start < i && i <= end) {
        dp[i] = Math.min(dp[i], dp[start] + 1);
      }
    }
  }
  return dp[time] === Number.MAX_VALUE ? -1 : dp[time];
}

// 贪心
/* function videoStitching(clips: number[][], time: number): number {
  // mostRight[i]表示开始时间为i的片段的最晚结束时间
  const mostRight = new Array(time + 1).fill(0).map((_, i) => i);
  for (const [start, end] of clips) {
    mostRight[start] = Math.max(mostRight[start], end);
  }
  let ret = 0;
  let pre = 0; // 上一个片段的结束时间
  let last = 0; // 当前所能到达的最晚结束时间
  for (let i = 0; i < time; i++) {
    last = Math.max(last, mostRight[i]);
    if (i === last) {
      return -1;
    }
    if (i === pre) {
      ret++;
      pre = last;
    }
  }
  return ret;
} */
// @lc code=end
