/*
 * @lc app=leetcode.cn id=1009 lang=typescript
 *
 * [1009] 十进制整数的反码
 */

// @lc code=start
/* function bitwiseComplement(n: number): number {
  if (n === 0) {
    return 1;
  }
  let i = 0;
  let ret = 0;
  while (n) {
    if ((n & 1) === 0) {
      ret += 1 << i;
    }
    n >>= 1;
    i++;
  }
  return ret;
} */

function bitwiseComplement(n: number): number {
  let hightbit = 0; // 最高位1的位置
  for (let i = 1; i <= 30; i++) {
    if (n >= 1 << i) {
      hightbit = i;
    } else {
      break;
    }
  }
  /* 
    (1 << 31) - 1会发生溢出，需要做特殊处理
    1 << 31 = 1000 0000 0000 0000 0000 0000 0000 0000（补码）
    负数在内存中已补码形式存储，将其转化为原码：
    0000 0000 0000 0000 0000 0000 0000 0000（原码）
    再减一：
    1111 1111 1111 1111 1111 1111 1111 1111（原码）
    该数字为整型能表示的最小负数（产生溢出）
  */
  const mask = hightbit === 30 ? 0x7fffffff : (1 << (hightbit + 1)) - 1;
  return n ^ mask;
}
// @lc code=end
