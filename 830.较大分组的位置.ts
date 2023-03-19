/*
 * @lc app=leetcode.cn id=830 lang=typescript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
function largeGroupPositions(s: string): number[][] {
  let ret: number[][] = [];
  let acc = 1;
  const n = s.length;
  for (let i = 1; i < n; i++) {
    if (s[i] === s[i - 1]) {
      acc++;
    } else {
      if (acc >= 3) {
        ret.push([i - acc, i - 1]);
      }
      acc = 1;
    }
  }
  if (acc >= 3) {
    ret.push([n - acc, n - 1]);
  }
  return ret;
}
// @lc code=end
