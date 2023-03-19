/*
 * @lc app=leetcode.cn id=2363 lang=typescript
 *
 * [2363] 合并相似的物品
 */

// @lc code=start
function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  const map = new Map<number, number>();
  for (const [value, weight] of items1) {
    map.set(value, (map.get(value) ?? 0) + weight);
  }
  for (const [value, weight] of items2) {
    map.set(value, (map.get(value) ?? 0) + weight);
  }
  const ret: number[][] = [];
  for (const [value, weight] of map) {
    ret.push([value, weight]);
  }
  return ret.sort((a, b) => a[0] - b[0]);
}
// @lc code=end
