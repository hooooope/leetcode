/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  const pairs = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const stk: string[] = [];
  for (const c of s) {
    if (pairs.has(c)) {
      if (!stk.length || pairs.get(c) !== stk[stk.length - 1]) {
        return false;
      }
      stk.pop();
    } else {
      stk.push(c);
    }
  }
  return !stk.length;
}
// @lc code=end
