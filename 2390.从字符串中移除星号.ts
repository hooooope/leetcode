/*
 * @lc app=leetcode.cn id=2390 lang=typescript
 *
 * [2390] 从字符串中移除星号
 */

// @lc code=start
function removeStars(s: string): string {
  const stack: string[] = [];
  for (const c of s) {
    if (c === "*") {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join("");
}
// @lc code=end
