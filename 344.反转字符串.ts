/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
/* function reverseString(s: string[]): void {
  const n = s.length;
  const half = s.length >> 1;
  for (let i = 0; i < half; i++) {
    let temp = s[i];
    s[i] = s[n - i - 1];
    s[n - i - 1] = temp;
  }
} */

function reverseString(s: string[]): void {
  const n = s.length;
  for (let l = 0, r = n - 1; l < r; l++, r--) {
    [s[l], s[r]] = [s[r], s[l]];
  }
}
// @lc code=end
