/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
// 动态规划
function longestPalindrome(s: string): string {
  const len = s.length;
  if (len < 2) {
    return s;
  }
  let maxLen = 1;
  let begin = 0;
  // dp[i][j]表示s[i...j]是否为回文串
  const dp: boolean[][] = new Array(len)
    .fill(0)
    .map(() => new Array(len).fill(false));
  // 初始化：所有长度为1的子串都是回文串
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }
  // 递推开始
  // 先枚举子串长度
  for (let L = 2; L <= len; L++) {
    // 枚举左边界，左边界的上限设置可以宽松一些
    for (let i = 0; i < len; i++) {
      // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
      const j = L + i - 1;
      // 如果右边界越界，就可以退出当前循环
      if (j >= len) {
        break;
      }
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        // 长度为2或3的子串只需要判断两端字符是否相等
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      // 只要dp[i][j] === true成立，就表示子串s[i...j]是回文，
      // 此时记录回文长度和起始位置
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  return s.substr(begin, maxLen);
}

// 中心扩展
/* function longestPalindrome(s: string): string {
  const expandAroundCenter = (s: string, left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      --left;
      ++right;
    }
    return [left + 1, right - 1];
  };
  if (s.length === 0) {
    return "";
  }
  let start = 0; // 最长回文子串的开始索引
  let end = 0; // 最长回文子串的结束索引
  for (let i = 0; i < s.length; i++) {
    // 处理回文子串长度为奇数的情况
    const [left1, right1] = expandAroundCenter(s, i, i);
    // 处理回文子串长度为偶数的情况
    const [left2, right2] = expandAroundCenter(s, i, i + 1);
    if (right1 - left1 > end - start) {
      start = left1;
      end = right1;
    }
    if (right2 - left2 > end - start) {
      start = left2;
      end = right2;
    }
  }
  return s.slice(start, end + 1);
} */

// Manacher算法
/* function longestPalindrome(s: string): string {
  const manacherString = (s: string) => {
    const ret: string[] = new Array(s.length * 2 + 1);
    for (let i = 0, j = 0; i < ret.length; i++) {
      ret[i] = (i & 1) === 0 ? "#" : s[j++];
    }
    return ret.join("");
  };
  if (s.length === 0) {
    return "";
  }
  let c = -1; // 最右回文半径的中心点
  let r = -1; // 最右回文半径的右边界
  let start = 0; // 最长回文的开始索引
  let end = -1; // 最长回文的结束索引
  s = manacherString(s); // 处理回文子串为偶数长度的情况
  // radiusArr[i]表示以i为中心的最长回文半径
  const radiusArr: number[] = new Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    // 2*c-i表示i以c为中心的对称点，即i'的索引
    radiusArr[i] = r > i ? Math.min(radiusArr[2 * c - i], r - i) : 1;
    // 在索引不越界的前提下，尝试向外扩散
    while (i + radiusArr[i] < s.length && i - radiusArr[i] > -1) {
      if (s[i + radiusArr[i]] === s[i - radiusArr[i]]) {
        radiusArr[i]++;
      } else {
        break;
      }
    }
    // 更新最右回文半径的中心点和最右回文半径的右边界
    if (i + radiusArr[i] > r) {
      c = i;
      r = i + radiusArr[i];
    }
    // 更新最长回文的开始索引和最长回文的结束索引
    if (radiusArr[i] * 2 - 1 > end - start) {
      start = i - radiusArr[i] + 1;
      end = i + radiusArr[i];
    }
  }
  // 排除占位字符#，构建最长回文子串
  const ret: string[] = [];
  for (let i = start; i < end; i++) {
    if (s[i] !== "#") {
      ret.push(s[i]);
    }
  }
  return ret.join("");
} */
// @lc code=end
