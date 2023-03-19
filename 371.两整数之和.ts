/*
 * @lc app=leetcode.cn id=371 lang=typescript
 *
 * [371] 两整数之和
 */

// @lc code=start
/* function getSum(a: number, b: number): number {
  while (b !== 0) {
    // 进位信息
    const carry = (a & b) << 1;
    // 无进位相加
    a = a ^ b;
    // 保存进位信息
    b = carry;
  }
  return a;
} */

function getSum(a: number, b: number): number {
  return a + b;
}
// @lc code=end
