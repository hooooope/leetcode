/*
 * @lc app=leetcode.cn id=874 lang=typescript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
function robotSim(commands: number[], obstacles: number[][]): number {
  let ret = 0;
  let x = 0;
  let y = 0;
  let di = 0;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const obstacleSet = new Set<string>();
  for (const obstacle of obstacles) {
    obstacleSet.add(`${obstacle[0]},${obstacle[1]}`);
  }
  for (const command of commands) {
    switch (command) {
      case -1:
        di = (di + 1) % 4;
        break;
      case -2:
        di = (di - 1 + 4) % 4;
        break;
      default:
        for (let i = 0; i < command; i++) {
          if (obstacleSet.has(`${x + dx[di]},${y + dy[di]}`)) {
            break;
          }
          x += dx[di];
          y += dy[di];
        }
        ret = Math.max(ret, x * x + y * y);
    }
  }
  return ret;
}
// @lc code=end
