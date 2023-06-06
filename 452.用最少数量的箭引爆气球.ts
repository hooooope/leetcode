/*
 * @lc app=leetcode.cn id=452 lang=typescript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1]);
  let ret = 1;
  let pos = points[0][1];
  for (const balloon of points) {
    if (balloon[0] > pos) {
      ret++;
      pos = balloon[1];
    }
  }
  return ret;
}
// @lc code=end
