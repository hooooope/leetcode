/*
 * @lc app=leetcode.cn id=2418 lang=typescript
 *
 * [2418] 按身高排序
 */

// @lc code=start
function sortPeople(names: string[], heights: number[]): string[] {
  const n = names.length;
  const indices = Array.from({ length: n }).map((_, i) => i);
  indices.sort((a, b) => heights[b] - heights[a]);
  const ret = new Array(n);
  for (let i = 0; i < n; i++) {
    ret[i] = names[indices[i]];
  }
  return ret;
}
// @lc code=end
