/*
 * @lc app=leetcode.cn id=1037 lang=typescript
 *
 * [1037] 有效的回旋镖
 */

// @lc code=start
function isBoomerang(points: number[][]): boolean {
  // 向量v1：p0->p1
  const v1 = [points[1][0] - points[0][0], points[1][1] - points[0][1]];
  // 向量v2：p0->p2
  const v2 = [points[2][0] - points[0][0], points[2][1] - points[0][1]];
  // 两个向量交叉相乘结果不为零：三点不在同一条直线上
  return v1[0] * v2[1] - v1[1] * v2[0] !== 0;
}
// @lc code=end
