/*
 * @lc app=leetcode.cn id=1828 lang=typescript
 *
 * [1828] 统计一个圆中点的数目
 */

// @lc code=start
function countPoints(points: number[][], queries: number[][]): number[] {
  const n = queries.length;
  const ret = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const query = queries[i];
    for (const [x, y] of points) {
      const [x0, y0, r] = query;
      const dx = x - x0;
      const dy = y - y0;
      if (Math.sqrt(dx * dx + dy * dy) <= r) {
        ret[i]++;
      }
    }
  }
  return ret;
}

// @lc code=end
