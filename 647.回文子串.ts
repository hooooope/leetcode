/*
 * @lc app=leetcode.cn id=647 lang=typescript
 *
 * [647] 回文子串
 */

// @lc code=start
// 中心拓展
/* function countSubstrings(s: string): number {
  let ret = 0;
  const n = s.length;
  // 如何有序地枚举所有可能的回文中心，
  // 我们需要考虑回文长度是奇数和回文长度是偶数的两种情况。
  // 如果回文长度是奇数，那么回文中心是一个字符；
  // 如果回文长度是偶数，那么中心是两个字符。
  // 长度为n的字符串会生成2n-1组回文中心[l,r]，
  // 其中回文左中心=i/2，
  // 回文右中心=i/2 + i%2，
  // 这样我们只要从0到2n-1遍历i，就可以得到所有可能的回文中心，
  // 这样就把奇数长度和偶数长度两种情况统一起来了。
  for (let i = 0; i < 2 * n - 1; i++) {
    let l = Math.floor(i / 2);
    let r = l + (i % 2);
    while (l >= 0 && r < n && s[l] === s[r]) {
      l--;
      r++;
      ret++;
    }
  }
  return ret;
} */

// 动态规划
/* function countSubstrings(s: string): number {
  const n = s.length;
  const dp: boolean[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(false));
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    dp[i][i + 1] = s[i] === s[i + 1];
  }
  for (let i = n - 3; i >= 0; i--) {
    for (let j = i + 2; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1];
      } else {
        dp[i][j] = false;
      }
    }
  }
  let ret = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] && ret++;
    }
  }
  return ret;
} */

// Manacher
function countSubstrings(s: string): number {
  let ret = 0;
  const manacherString = (s: string) => {
    const ret: string[] = new Array(s.length * 2 + 1);
    for (let i = 0, j = 0; i < ret.length; i++) {
      ret[i] = (i & 1) === 0 ? "#" : s[j++];
    }
    return ret.join("");
  };
  s = manacherString(s);
  const radiusArr: number[] = new Array(s.length).fill(0);
  let c = -1;
  let r = -1;
  for (let i = 0; i < s.length; i++) {
    radiusArr[i] = r > i ? Math.min(radiusArr[2 * c - i], r - i) : 1;
    while (i + radiusArr[i] < s.length && i - radiusArr[i] > -1) {
      if (s[i + radiusArr[i]] === s[i - radiusArr[i]]) {
        radiusArr[i]++;
      } else {
        break;
      }
    }
    if (i + radiusArr[i] > r) {
      c = i;
      r = i + radiusArr[i];
    }
    ret += Math.floor(radiusArr[i] / 2);
  }
  return ret;
}
// @lc code=end
