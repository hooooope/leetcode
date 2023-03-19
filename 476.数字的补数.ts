/*
 * @lc app=leetcode.cn id=476 lang=typescript
 *
 * [476] 数字的补数
 */

// @lc code=start
/* 
  1100 12
  0011  3
  1110 14
  0001  1
*/
/* function findComplement(num: number): number {
  let i = 0;
  let ret = 0;
  while (num) {
    ret |= Number(!(num & 1)) << i;
    num >>= 1;
    i++;
  }
  return ret;
} */

function findComplement(num: number): number {
  let highbit = 0;
  for (let i = 1; i <= 30; i++) {
    if (num >= 1 << i) {
      highbit = i;
    } else {
      break;
    }
  }
  const mask = highbit === 30 ? 0x7fffffff : (1 << (highbit + 1)) - 1;
  return num ^ mask;
}
// @lc code=end
