/*
 * @lc app=leetcode.cn id=1528 lang=typescript
 *
 * [1528] 重新排列字符串
 */

// @lc code=start
function restoreString(s: string, indices: number[]): string {
  const ret: string[] = [];
  for (let i = 0; i < s.length; i++) {
    ret[indices[i]] = s[i];
  }
  return ret.join("");
}
// @lc code=end
