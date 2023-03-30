/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 */

// @lc code=start
// 动态规划
function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;
  // dp[i][j]表示将前缀长度为i的word2转化为前缀长度为j的word2所需要的最少操作数
  const dp: number[][] = new Array(m + 1)
    .fill(0)
    .map(() => new Array(n + 1).fill(0));
  // 将前缀长度为i的word1转化为空串最少需要i次操作
  for (let i = 1; i < m + 1; i++) {
    dp[i][0] = i;
  }
  // 将前缀长度为j的word2转化为空串最少需要j次操作
  for (let j = 1; j < n + 1; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // 若当前字符相等，则当前的最少操作数为前缀长度为i-1的word1转化为前缀长度为j-1的word2所需要的最少操作数
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 若当前字符不相等，则当前的最少操作数为
        // 将前缀长度为i-1的word1转化为前缀长度为j-1的word2所需要的最少操作数，再加上一次替换操作
        dp[i][j] = dp[i - 1][j - 1] + 1;
        // 将前缀长度为i-1的word1转化为前缀长度为j的word2所需要的最少操作数，再加上一次删除操作
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
        // 将前缀长度为i的word1转化为前缀长度为j-1的word2所需要的最少操作数，再加上一次插入操作
        dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
        // 将以上三种情况所需的操作数取最小值
      }
    }
  }
  return dp[m][n];
}
// @lc code=end
