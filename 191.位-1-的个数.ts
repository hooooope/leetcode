/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */

// @lc code=start
// 循环检查
/* function hammingWeight(n: number): number {
  let ret = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & (1 << i)) !== 0) {
      ret++;
    }
  }
  return ret;
} */

// 位运算
// n & (n-1)，其运算结果恰为把n的二进制位中的最低位的1变为0
function hammingWeight(n: number): number {
  let ret = 0;
  while (n) {
    n &= n - 1;
    ret++;
  }
  return ret;
}
// @lc code=end
