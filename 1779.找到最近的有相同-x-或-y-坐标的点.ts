/*
 * @lc app=leetcode.cn id=1779 lang=typescript
 *
 * [1779] 找到最近的有相同 X 或 Y 坐标的点
 */

// @lc code=start
/* function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let ret = -1;
  let minDistance = Number.MAX_VALUE;
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    // 有效点
    if (point[0] === x || point[1] === y) {
      const distance = Math.abs(point[0] - x) + Math.abs(point[1] - y);
      if (distance < minDistance) {
        minDistance = distance;
        ret = i;
      }
    }
  }
  return ret;
} */

/* 
  优化
  如果px=x，那么这两个点有相同的x坐标，可以用距离|py-y|更新答案；
  如果py=y，那么这两个点有相同的y坐标，可以用距离|px-x|更新答案；
*/
function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let ret = -1;
  let minDist = Number.MAX_VALUE;
  for (let i = 0; i < points.length; i++) {
    const [px, py] = points[i];
    if (px === x) {
      const dist = Math.abs(py - y);
      if (dist < minDist) {
        minDist = dist;
        ret = i;
      }
    } else if (py === y) {
      const dist = Math.abs(px - x);
      if (dist < minDist) {
        minDist = dist;
        ret = i;
      }
    }
  }
  return ret;
}
// @lc code=end
