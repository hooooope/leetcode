/*
 * @lc app=leetcode.cn id=521 lang=typescript
 *
 * [521] 最长特殊序列 Ⅰ
 */

// @lc code=start
function findLUSlength(a: string, b: string): number {
  return a === b ? -1 : Math.max(a.length, b.length);
}
// @lc code=end
