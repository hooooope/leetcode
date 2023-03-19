/*
 * @lc app=leetcode.cn id=678 lang=typescript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
// 动态规划
/* function checkValidString(s: string): boolean {
  const n = s.length;
  const dp: boolean[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(false));
  for (let i = 0; i < n; i++) {
    if (s[i] === "*") {
      dp[i][i] = true;
    }
  }
  for (let i = 1; i < n; i++) {
    const c1 = s[i - 1];
    const c2 = s[i];
    if ((c1 === "(" || c1 === "*") && (c2 === ")" || c2 === "*")) {
      dp[i - 1][i] = true;
    }
  }
  for (let i = n - 3; i >= 0; i--) {
    const c1 = s[i];
    for (let j = i + 2; j < n; j++) {
      const c2 = s[j];
      if ((c1 === "(" || c1 === "*") && (c2 === ")" || c2 === "*")) {
        dp[i][j] = dp[i + 1][j - 1];
      }
      for (let k = i; k < j && !dp[i][j]; k++) {
        dp[i][j] = dp[i][k] && dp[k + 1][j];
      }
    }
  }
  return dp[0][n - 1];
} */

// 栈
/* function checkValidString(s: string): boolean {
  const n = s.length;
  // 存放左括号的索引
  const leftStack: number[] = [];
  // 存放星号的索引
  const asteriskStack: number[] = [];
  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (c === "(") {
      leftStack.push(i);
    } else if (c === "*") {
      asteriskStack.push(i);
    } else {
      if (leftStack.length) {
        leftStack.pop();
      } else if (asteriskStack.length) {
        asteriskStack.pop();
      } else {
        return false;
      }
    }
  }
  while (leftStack.length && asteriskStack.length) {
    if (leftStack.pop()! > asteriskStack.pop()!) {
      return false;
    }
  }
  return leftStack.length === 0;
} */

// 贪心
function checkValidString(s: string): boolean {
  const n = s.length;
  let minCount = 0; // 未匹配左括号的最小值
  let maxCount = 0; // 未匹配右括号的最大值
  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (c === "(") {
      minCount++;
      maxCount++;
    } else if (c === ")") {
      minCount = Math.max(minCount - 1, 0);
      maxCount--;
      if (maxCount < 0) {
        return false;
      }
    } else {
      minCount = Math.max(minCount - 1, 0);
      maxCount++;
    }
  }
  return minCount === 0;
}
// @lc code=end
