/*
 * @lc app=leetcode.cn id=1207 lang=typescript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map<number, number>();
  for (const n of arr) {
    map.set(n, (map.get(n) ?? 0) + 1);
  }
  const set = new Set<number>();
  for (const n of map.values()) {
    if (set.has(n)) {
      return false;
    }
    set.add(n);
  }
  return true;
}
// @lc code=end
