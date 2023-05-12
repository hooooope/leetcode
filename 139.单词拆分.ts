/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start
// 暴力递归
/* function wordBreak(s: string, wordDict: string[]): boolean {
  const process = (i: number): boolean => {
    if (i === 0) {
      return true;
    }
    for (let j = 0; j < i; j++) {
      if (process(j) && wordDictSet.has(s.slice(j, i))) {
        return true;
      }
    }
    return false;
  };
  const n = s.length;
  const wordDictSet = new Set<string>(wordDict);
  return process(n);
} */

// 严格表结构
function wordBreak(s: string, wordDict: string[]): boolean {
  const n = s.length;
  const wordDictSet = new Set<string>(wordDict);
  // dp[i]表示s[0...i-1]能否由wordDict中的单词组成
  const dp: boolean[] = new Array(n + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      // 若s[0...j)能由wordDict中的单词组成
      // 则判断wordDict中是否存在单词s[j...i)
      if (dp[j] && wordDictSet.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
}
// @lc code=end
