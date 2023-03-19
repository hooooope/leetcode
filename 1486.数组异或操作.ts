/*
 * @lc app=leetcode.cn id=1486 lang=typescript
 *
 * [1486] 数组异或操作
 */

// @lc code=start
/* function xorOperation(n: number, start: number): number {
  let ret = 0;
  for (let i = 0; i < n; i++) {
    ret ^= start + 2 * i;
  }
  return ret;
} */

/**
 * 设长度 = n，结果的最低位 = e
 * 式一：start ^ (start+2) ^ (start+4) ^ ... ^ (start+2*(n-1))
 * 当n和start为奇数时 e = 1, 否则 e = 0
 * 将式一各项左移一位(相当于 * 2)掩去最后一位, 单独处理求得 e
 *
 * 式二：(s ^ s+1 ^ s+2 ^ ... ^ s+n-1) * 2 + e
 * s = start / 2
 * sumXor(x) = 0 ^ 1 ^ 2 ^ ... ^ x
 *
 * 公式：4i ^ 4i+1 ^ 4i+2 ^ 4i+3 = 0
 * 当 n = 4i, sumXor(x) = x
 * 当 n = 4i + 1, sumXor(x) = 1
 * 当 n = 4i + 2, sumXor(x) = 4i ^ 4i+1 ^ 4i+2 = 1 ^ 4i+2 = x+1（补充：对于 1 ^ x, 当 x 为奇数时相当于 x - 1, 当 x 为偶数时相当于 x + 1）
 * 当n = 4i + 3,sumXor(x) = 0
 *
 * 公式: x^y^y=x
 * sumXor(s-1) ^ sumXor(s+n-1)
 * = sumXor(s-1) ^ sumXor(s-1) ^ s ^ s+1 ^ ... ^ s+n-1
 * = s ^ s+1 ^ ... ^ s+n-1
 * 把s ^ s+1 ^ ... ^ s+n-1看作x
 * 把sumXor(s-1)看作y
 *
 * ret = (sumXor(s-1) ^ sumXor(s+n-1)) * 2 + e
 */
function xorOperation(n: number, start: number): number {
  const s = start >> 1; // 如果直接除以2会存在小数
  const e = n & start & 1; // 若n与start都为奇数，结果为1，否则为0
  let ret = sumXor(s - 1) ^ sumXor(s + n - 1); // 公式：x^y^y=x
  return (ret << 1) | e; // 右移一位后加上最低位e
}
function sumXor(x: number): number {
  switch (x % 4) {
    case 0:
      return x;
    case 1:
      return 1;
    case 2:
      return x + 1;
    default:
      return 0;
  }
}
// @lc code=end
