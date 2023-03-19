/*
 * @lc app=leetcode.cn id=771 lang=typescript
 *
 * [771] 宝石与石头
 */

// @lc code=start
function numJewelsInStones(jewels: string, stones: string): number {
  let ret = 0;
  const map = new Map();
  for (const jewel of jewels) {
    map.set(jewel, true);
  }
  for (const stone of stones) {
    map.has(stone) && ret++;
  }
  return ret;
}
// @lc code=end
