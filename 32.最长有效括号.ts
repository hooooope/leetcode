/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */

// @lc code=start
// 动态规划
/* function longestValidParentheses(s: string): number {
  let ret = 0;
  const n = s.length;
  // dp[i]表示以i结尾的最长有效括号长度
  const dp: number[] = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    if (s[i] === ")") {
      const left = i - dp[i - 1] - 1;
      if (left >= 0 && s[left] === "(") {
        dp[i] = dp[i - 1] + 2 + (left > 0 ? dp[left - 1] : 0);
      }
      ret = Math.max(ret, dp[i]);
    }
  }
  return ret;
} */

// 栈
/* function longestValidParentheses(s: string): number {
  let ret = 0;
  const n = s.length;
  // 保持栈底元素为当前已经遍历的元素中最后一个没有被匹配的右括号
  const stack: number[] = [-1];
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        ret = Math.max(ret, i - stack[stack.length - 1]);
      }
    }
  }
  return ret;
} */

// 贪心
function longestValidParentheses(s: string): number {
  let ret = 0;
  const n = s.length;
  let left = 0;
  let right = 0;
  // ())
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      ret = Math.max(ret, 2 * left);
    } else if (right > left) {
      left = 0;
      right = 0;
    }
  }
  left = right = 0;
  // (()
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "(") {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      ret = Math.max(ret, 2 * left);
    } else if (left > right) {
      left = 0;
      right = 0;
    }
  }
  return ret;
}
// @lc code=end
