/*
 * @lc app=leetcode.cn id=693 lang=typescript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/* function hasAlternatingBits(n: number): boolean {
  let pre = 2; // 最低位的bit
  while (n) {
    const cur = n & 1;
    if (cur === pre) {
      return false;
    }
    pre = cur;
    n >>= 1;
  }
  return true;
} */

function hasAlternatingBits(n: number): boolean {
  const a = n ^ (n >> 1); // 当n的二进制表示交替时，a为全1（不包含前导0）
  return (a & (a + 1)) === 0; // 当且仅当a的二进制表示全为1时，结果为0
}
// @lc code=end
