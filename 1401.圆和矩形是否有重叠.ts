/*
 * @lc app=leetcode.cn id=1401 lang=typescript
 *
 * [1401] 圆和矩形是否有重叠
 */

// @lc code=start
function checkOverlap(
  radius: number,
  xCenter: number,
  yCenter: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): boolean {
  let dist = 0;
  if (xCenter < x1 || xCenter > x2) {
    dist += Math.min(Math.pow(xCenter - x1, 2), Math.pow(xCenter - x2, 2));
  }
  if (yCenter < y1 || yCenter > y2) {
    dist += Math.min(Math.pow(yCenter - y1, 2), Math.pow(yCenter - y2, 2));
  }
  return dist <= radius ** 2;
}
// @lc code=end
