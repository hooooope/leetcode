/*
 * @lc app=leetcode.cn id=2011 lang=typescript
 *
 * [2011] 执行操作后的变量值
 */

// @lc code=start
function finalValueAfterOperations(operations: string[]): number {
  let ret = 0;
  for (const operation of operations) {
    if (operation === "--X" || operation === "X--") {
      ret--;
    } else {
      ret++;
    }
  }
  return ret;
}
// @lc code=end
