/*
 * @lc app=leetcode.cn id=2432 lang=typescript
 *
 * [2432] 处理用时最长的那个任务的员工
 */

// @lc code=start
function hardestWorker(n: number, logs: number[][]): number {
  let minId = logs[0][0];
  let maxTime = logs[0][1];
  for (let i = 1; i < logs.length; i++) {
    // 当前任务的员工id
    const currId = logs[i][0];
    // 当前任务的处理用时
    const currTime = logs[i][1] - logs[i - 1][1];
    if (currTime > maxTime || (currTime === maxTime && currId < minId)) {
      minId = currId;
      maxTime = currTime;
    }
  }
  return minId;
}
// @lc code=end
