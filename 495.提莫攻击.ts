/*
 * @lc app=leetcode.cn id=495 lang=typescript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/* function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let ret = 0;
  for (let i = 1; i < timeSeries.length; i++) {
    if (timeSeries[i] - timeSeries[i - 1] >= duration) {
      ret += duration;
    } else {
      ret += timeSeries[i] - timeSeries[i - 1];
    }
  }
  return ret + duration;
} */

function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let ret = 0;
  let expired = 0; // 解毒时间
  for (const time of timeSeries) {
    if (time >= expired) {
      ret += duration;
    } else {
      ret += time + duration - expired;
    }
    expired = time + duration;
  }
  return ret;
}
// @lc code=end
