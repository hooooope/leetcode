/*
 * @lc app=leetcode.cn id=812 lang=typescript
 *
 * [812] 最大三角形面积
 */

// @lc code=start
/* 
  [0,0]
  [0,2]
  [2,0]
*/
function largestTriangleArea(points: number[][]): number {
  const triangleArea = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number
  ) => {
    return (
      0.5 * Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2)
    );
  };
  let ret = 0;
  const n = points.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        ret = Math.max(
          ret,
          triangleArea(
            points[i][0],
            points[i][1],
            points[j][0],
            points[j][1],
            points[k][0],
            points[k][1]
          )
        );
      }
    }
  }
  return ret;
}
// @lc code=end
