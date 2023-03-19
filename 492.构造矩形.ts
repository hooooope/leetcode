/*
 * @lc app=leetcode.cn id=492 lang=typescript
 *
 * [492] 构造矩形
 */

// @lc code=start
function constructRectangle(area: number): number[] {
  let n = Math.floor(Math.sqrt(area));
  while (area % n) {
    n--;
  }
  return [area / n, n];
}
// @lc code=end
