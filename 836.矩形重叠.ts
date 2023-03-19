/*
 * @lc app=leetcode.cn id=836 lang=typescript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/* function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  // rec1或rec2的面积为0
  if (
    rec1[0] === rec1[2] ||
    rec1[1] === rec1[3] ||
    rec2[0] === rec2[2] ||
    rec2[1] === rec2[3]
  ) {
    return false;
  }
  return !(
    rec1[2] <= rec2[0] || // rec1在rec2的左侧
    // rec1在rec2的下侧
    rec1[3] <= rec2[1] ||
    // rec1在rec2的上侧
    rec1[0] >= rec2[2] ||
    // rec1在rec2的右侧
    rec1[1] >= rec2[3]
  );
} */

function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  return (
    Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]) &&
    Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1])
  );
}
// @lc code=end
