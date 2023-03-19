/*
 * @lc app=leetcode.cn id=1817 lang=typescript
 *
 * [1817] 查找用户活跃分钟数
 */

// @lc code=start
function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
  const ret = new Array(k).fill(0);
  const map = new Map<number, Set<number>>();
  for (const [id, time] of logs) {
    if (!map.has(id)) {
      map.set(id, new Set());
    }
    map.get(id)!.add(time);
  }
  for (const times of map.values()) {
    ret[times.size - 1]++;
  }
  return ret;
}
// @lc code=end
