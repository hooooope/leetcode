/*
 * @lc app=leetcode.cn id=1003 lang=typescript
 *
 * [1003] 检查替换后的词是否有效
 */

// @lc code=start
function isValid(s: string): boolean {
  const stack: string[] = [];
  for (const c of s) {
    stack.push(c);
    if (stack.length >= 3 && stack.slice(-3).join("") === "abc") {
      stack.splice(-3, 3);
    }
  }
  return stack.length === 0;
}
// @lc code=end
