/*
 * @lc app=leetcode.cn id=2352 lang=typescript
 *
 * [2352] 相等行列对
 */

// @lc code=start
function equalPairs(grid: number[][]): number {
  const n = grid.length;
  const map = new Map<string, number>();
  const sb: number[] = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sb[j] = grid[i][j];
    }
    const k = sb.join(",");
    const v = (map.get(k) ?? 0) + 1;
    map.set(k, v);
  }
  let ret = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sb[j] = grid[j][i];
    }
    const k = sb.join(",");
    ret += map.get(k) ?? 0;
  }
  return ret;
}
// @lc code=end
