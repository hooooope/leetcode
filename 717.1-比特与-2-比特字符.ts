/*
 * @lc app=leetcode.cn id=717 lang=typescript
 *
 * [717] 1 比特与 2 比特字符
 */

// @lc code=start
/* 
  00
  01
  10
  11
*/
// 正序遍历
/* function isOneBitCharacter(bits: number[]): boolean {
  let i = 0;
  const n = bits.length;
  while (i < n - 1) {
    i += bits[i] + 1;
  }
  return i === n - 1;
} */

// 倒序遍历
function isOneBitCharacter(bits: number[]): boolean {
  const n = bits.length;
  let i = n - 2;
  while (i >= 0 && bits[i]) {
    i--;
  }
  return (n - i) % 2 === 0;
}
// @lc code=end
