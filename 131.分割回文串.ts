/*
 * @lc app=leetcode.cn id=131 lang=typescript
 *
 * [131] 分割回文串
 */

// @lc code=start
// 动态规划
function partition(s: string): string[][] {
  const n = s.length;
  // dp[i][j]表示s[i...j]是否为回文子串
  const dp: boolean[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(true));
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
    }
  }
  const ret: string[][] = [];
  const ans: string[] = [];
  // s[0...i-1]上的字符串已完成回文串分割
  // 接下来在s[i...n-1]上的字符串进行回文串分割
  const dfs = (i: number) => {
    if (i === n) {
      ret.push(ans.slice());
      return;
    }
    for (let j = i; j < n; j++) {
      if (dp[i][j]) {
        ans.push(s.slice(i, j + 1));
        dfs(j + 1);
        ans.pop();
      }
    }
  };
  dfs(0);
  return ret;
}
// @lc code=end
