/*
 * @lc app=leetcode.cn id=1637 lang=typescript
 *
 * [1637] 两点之间不包含任何点的最宽垂直面积
 */

// @lc code=start
function maxWidthOfVerticalArea(points: number[][]): number {
  let ret = 0;
  points.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < points.length; i++) {
    ret = Math.max(ret, points[i][0] - points[i - 1][0]);
  }
  return ret;
}
// @lc code=end
