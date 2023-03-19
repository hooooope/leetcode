/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
// 有限状态自动机
class Automaton {
  public sign = 1;
  public ans = 0;
  private state = "start";
  private table = new Map<string, string[]>([
    // currentState [" ", "+/-", number, other]
    ["start", ["start", "signed", "in_number", "end"]],
    ["signed", ["end", "end", "in_number", "end"]],
    ["in_number", ["end", "end", "in_number", "end"]],
    ["end", ["end", "end", "end", "end"]],
  ]);
  get(c: string) {
    this.state = this.table.get(this.state)![this.get_col(c)];
    if (this.state === "in_number") {
      this.ans = this.ans * 10 + c.charCodeAt(0) - "0".charCodeAt(0);
      this.ans =
        this.sign === 1
          ? Math.min(this.ans, 2 ** 31 - 1)
          : Math.min(this.ans, 2 ** 31);
    } else if (this.state === "signed") {
      this.sign = c === "+" ? 1 : -1;
    }
  }
  get_col(c: string) {
    if (c === " ") {
      return 0;
    }
    if (c === "+" || c === "-") {
      return 1;
    }
    if (c >= "0" && c <= "9") {
      return 2;
    }
    return 3;
  }
}
function myAtoi(s: string): number {
  const automaton = new Automaton();
  for (const c of s) {
    automaton.get(c);
  }
  return automaton.sign * automaton.ans;
}
// @lc code=end
