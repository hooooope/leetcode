/*
 * @lc app=leetcode.cn id=944 lang=typescript
 *
 * [944] 删列造序
 */

// @lc code=start
function minDeletionSize(strs: string[]): number {
  let ret = 0;
  const n = strs.length;
  const m = strs[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (strs[j][i].charCodeAt(0) < strs[j - 1][i].charCodeAt(0)) {
        ret++;
        break;
      }
    }
  }
  return ret;
}
// @lc code=end
