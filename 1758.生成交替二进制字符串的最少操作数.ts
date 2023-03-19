/*
 * @lc app=leetcode.cn id=1758 lang=typescript
 *
 * [1758] 生成交替二进制字符串的最少操作数
 */

// @lc code=start
/* 
  1100
  1010 = 2
  0101 = 2
*/
function minOperations(s: string): number {
  let cnt = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] !== String.fromCharCode("0".charCodeAt(0) + (i % 2))) {
      cnt++;
    }
  }
  return Math.min(cnt, n - cnt);
}
// @lc code=end
