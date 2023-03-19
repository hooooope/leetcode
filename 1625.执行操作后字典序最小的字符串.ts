/*
 * @lc app=leetcode.cn id=1625 lang=typescript
 *
 * [1625] 执行操作后字典序最小的字符串
 */

// @lc code=start
// 枚举
function findLexSmallestString(s: string, a: number, b: number): string {
  const n = s.length;
  // vis[i]表示是否轮转过以s[i]开头的字符串
  const vis: boolean[] = new Array(n).fill(false);
  let ret = s;
  // 将s延长一倍，方便截取轮转后的字符串t
  s = s + s;
  // 1.先轮转
  for (let i = 0; !vis[i]; i = (i + b) % n) {
    vis[i] = true;
    // 2.再累加
    // 2.1.奇数位置累加j次a
    for (let j = 0; j < 10; j++) {
      // 条件中s的长度是偶数，因此如果b是偶数，那么无论轮转多少次，我们都只能给s中奇数位的元素做累加操作。但是如果b是奇数的话，我们可以给s中奇数位和偶数位的元素都做加法，并且可以做不同的次数
      let kLimit = b % 2 === 0 ? 0 : 9;
      // 2.2.偶数位置累加k次a
      for (let k = 0; k <= kLimit; k++) {
        // 每次进行累加之前，重新截取t
        const t = [...s.slice(i, i + n)];
        // 2.1.1.遍历奇数位置
        for (let p = 1; p < n; p += 2) {
          t[p] = String.fromCharCode(
            "0".charCodeAt(0) +
              ((t[p].charCodeAt(0) - "0".charCodeAt(0) + j * a) % 10)
          );
        }
        // 2.2.1.遍历偶数位置
        for (let p = 0; p < n; p += 2) {
          t[p] = String.fromCharCode(
            "0".charCodeAt(0) +
              ((t[p].charCodeAt(0) - "0".charCodeAt(0) + k * a) % 10)
          );
        }
        const tStr = t.join("");
        // 若当前字典序更小，则更新答案
        if (tStr < ret) {
          ret = tStr;
        }
      }
    }
  }
  return ret;
}
// @lc code=end
