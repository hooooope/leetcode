/*
 * @lc app=leetcode.cn id=2315 lang=typescript
 *
 * [2315] 统计星号
 */

// @lc code=start
function countAsterisks(s: string): number {
  let ret = 0;
  let range = false;
  for (const c of s) {
    if (c === "|") {
      range = !range;
    } else if (!range && c === "*") {
      ret++;
    }
  }
  return ret;
}
// @lc code=end
