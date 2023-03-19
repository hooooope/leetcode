/*
 * @lc app=leetcode.cn id=1021 lang=typescript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
// 栈
// pop-拼接-push：此判断顺序保证每个原语字符串最外层括号不会被拼接
/* function removeOuterParentheses(s: string): string {
  let ret = "";
  const stack: string[] = [];
  for (const c of s) {
    if (c === ")") {
      stack.pop();
    }
    if (stack.length) {
      ret += c;
    }
    if (c === "(") {
      stack.push(c);
    }
  }
  return ret;
} */

// 计数
// 由于栈在本例中只用来判断是否为空，因此可用一个计数变量来代替栈
function removeOuterParentheses(s: string): string {
  let ret = "";
  let level = 0;
  for (const c of s) {
    if (c === ")") {
      level--;
    }
    if (level) {
      ret += c;
    }
    if (c === "(") {
      level++;
    }
  }
  return ret;
}
// @lc code=end
