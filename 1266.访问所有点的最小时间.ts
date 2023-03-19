/*
 * @lc app=leetcode.cn id=1266 lang=typescript
 *
 * [1266] 访问所有点的最小时间
 */

// @lc code=start
/* 
[x1, y1] [x2, y2]

abs(x2 - x1) > abs(y2 - y1)
ret += abs(x2 - x1)

abs(x2 - x1) = abs(y2 - y1)
ret += abs(x2 - x1)

abs(x2 - x1) < abs(y2 - y1)
ret += abs(y2 - y1)
*/
function minTimeToVisitAllPoints(points: number[][]): number {
  let ret = 0;
  for (let i = 1; i < points.length; i++) {
    const x = Math.abs(points[i][0] - points[i - 1][0]);
    const y = Math.abs(points[i][1] - points[i - 1][1]);
    ret += Math.max(x, y);
  }
  return ret;
}
// @lc code=end
