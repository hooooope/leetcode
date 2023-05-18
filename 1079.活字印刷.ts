/*
 * @lc app=leetcode.cn id=1079 lang=typescript
 *
 * [1079] 活字印刷
 */

// @lc code=start
function numTilePossibilities(tiles: string): number {
  const n = tiles.length
  const set = new Set(tiles)
  const map = new Map<string, number>()
  for (const tile of tiles) {
    map.set(tile, (map.get(tile) ?? 0) + 1)
  }
  const process = (i: number): number => {
    if (i === n) {
      return 1
    }
    let ret = 1
    for (const item of set) {
      if (map.get(item)! > 0) {
        map.set(item, map.get(item)! - 1)
        ret += process(i + 1)
        map.set(item, map.get(item)! + 1)
      }
    }
    return ret
  }
  return process(0) - 1
};
// @lc code=end

