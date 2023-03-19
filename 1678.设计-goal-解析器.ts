/*
 * @lc app=leetcode.cn id=1678 lang=typescript
 *
 * [1678] 设计 Goal 解析器
 */

// @lc code=start
// 遍历
function interpret(command: string): string {
  let ret = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i] === "G") {
      ret += "G";
    } else if (command[i] === "(") {
      if (command[i + 1] === ")") {
        ret += "o";
        i++;
      } else {
        ret += "al";
        i += 2;
      }
    }
  }
  return ret;
}

// 正则
/* function interpret(command: string): string {
  return command.replace(/\(\)/g, "o").replace(/\(al\)/g, "al");
} */
// @lc code=end
