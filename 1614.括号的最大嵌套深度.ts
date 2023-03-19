/*
 * @lc app=leetcode.cn id=1614 lang=typescript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/* function maxDepth(s: string): number {
  let ret = 0;
  let acc = 0;
  for (const c of s) {
    c === "(" && acc++;
    c === ")" && acc--;
    ret = Math.max(ret, acc);
  }
  return ret;
} */

function maxDepth(s: string): number {
  let ret = 0;
  let acc = 0;
  for (const c of s) {
    if (c === "(") {
      acc++;
      ret = Math.max(ret, acc);
    } else if (c === ")") {
      acc--;
    }
  }
  return ret;
}
// @lc code=end
