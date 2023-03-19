/*
 * @lc app=leetcode.cn id=1790 lang=typescript
 *
 * [1790] 仅执行一次字符串交换能否使两个字符串相等
 */

// @lc code=start
/* 
  0 b
  1 k
  2 k
  3 b
*/
function areAlmostEqual(s1: string, s2: string): boolean {
  const diff: number[] = [];
  for (let i = 0; i < s1.length; i++) {
    const c1 = s1[i];
    const c2 = s2[i];
    if (c1 !== c2) {
      if (diff.length >= 2) {
        return false;
      }
      diff.push(i);
    }
  }
  if (diff.length === 0) {
    return true;
  }
  if (diff.length !== 2) {
    return false;
  }
  return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]];
}
// @lc code=end
