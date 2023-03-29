/*
 * @lc app=leetcode.cn id=1641 lang=typescript
 *
 * [1641] 统计字典序元音字符串的数目
 */

// @lc code=start
// 暴力递归法
/* function countVowelStrings(n: number): number {
  // 返回以vowels[index]结尾，长度为length，组成且按字典序排列的字符串数量
  const process = (index: number, length: number): number => {
    // base case
    if (length <= 0) {
      return 0;
    }
    // base case
    // 以vowels[index]结尾，长度为1的排列只有一种
    if (length === 1) {
      return 1;
    }
    // length > 1
    let ret = 0;
    for (let i = 0; i <= index; i++) {
      // 累加所有结尾字符字典序小于等于当前字符字典序，且长度为length - 1的排列数量
      ret += process(i, length - 1);
    }
    return ret;
  };
  let ret = 0;
  const VOWELS_LENGTH = 5;
  for (let i = 0; i < VOWELS_LENGTH; i++) {
    // 累加以任意字符结尾，且长度为length的排列数量
    ret += process(i, n);
  }
  return ret;
} */

// 记忆化搜索法
/* function countVowelStrings(n: number): number {
  // 返回以vowels[index]结尾，长度为length，组成且按字典序排列的字符串数量
  const process = (index: number, length: number, dp: number[][]): number => {
    // base case
    if (length <= 0) {
      return 0;
    }
    if (dp[index][length] !== -1) {
      return dp[index][length];
    }
    // base case
    // 以vowels[index]结尾，长度为1的排列只有一种
    if (length === 1) {
      dp[index][length] = 1;
    } else {
      // length > 1
      let ret = 0;
      for (let i = 0; i <= index; i++) {
        // 累加所有结尾字符字典序小于等于当前字符字典序，且长度为length - 1的排列数量
        ret += process(i, length - 1, dp);
      }
      dp[index][length] = ret;
    }
    return dp[index][length];
  };
  let ret = 0;
  const VOWELS_LENGTH = 5;
  const dp: number[][] = new Array(VOWELS_LENGTH)
    .fill(0)
    .map(() => new Array(n + 1).fill(-1));
  for (let i = 0; i < VOWELS_LENGTH; i++) {
    // 累加以任意字符结尾，且长度为length的排列数量
    ret += process(i, n, dp);
  }
  return ret;
} */

// 严格表结构法
/* function countVowelStrings(n: number): number {
  const VOWELS_LENGTH = 5;
  const dp: number[][] = new Array(VOWELS_LENGTH)
    .fill(0)
    .map(() => new Array(n + 1).fill(0));
  for (let i = 0; i < VOWELS_LENGTH; i++) {
    dp[i][1] = 1;
  }
  for (let i = 0; i < VOWELS_LENGTH; i++) {
    for (let j = 2; j <= n; j++) {
      for (let k = 0; k <= i; k++) {
        dp[i][j] += dp[k][j - 1];
      }
    }
  }
  let ret = 0;
  for (let i = 0; i < VOWELS_LENGTH; i++) {
    ret += dp[i][n];
  }
  return ret;
} */

// 严格表结构法（行空间压缩）
/* function countVowelStrings(n: number): number {
  const VOWELS_LENGTH = 5;
  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < VOWELS_LENGTH; i++) {
    for (let j = 1; j <= n; j++) {
      dp[j] += dp[j - 1];
    }
  }
  return dp[n];
} */

// 严格表结构法（列空间压缩）
function countVowelStrings(n: number): number {
  const VOWELS_LENGTH = 5;
  const dp: number[] = new Array(VOWELS_LENGTH).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < VOWELS_LENGTH; j++) {
      dp[j] += dp[j - 1];
    }
  }
  let ret = 0;
  for (let i = 0; i < VOWELS_LENGTH; i++) {
    ret += dp[i];
  }
  return ret;
}
// @lc code=end
