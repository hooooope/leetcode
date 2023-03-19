/*
 * @lc app=leetcode.cn id=1720 lang=typescript
 *
 * [1720] 解码异或后的数组
 */

// @lc code=start
/* 
  a ^ b = c
  b = a ^ b
  encoded[i] = arr[i] ^ arr[i + 1]
  arr[i + 1] = encoded[i] ^ arr[i]
*/
function decode(encoded: number[], first: number): number[] {
  const n = encoded.length + 1;
  const ret = new Array(n).fill(0);
  ret[0] = first;
  for (let i = 1; i < n; i++) {
    ret[i] = encoded[i - 1] ^ ret[i - 1];
  }
  return ret;
}
// @lc code=end
