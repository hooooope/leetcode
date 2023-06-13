/*
 * @lc app=leetcode.cn id=1375 lang=typescript
 *
 * [1375] 二进制字符串前缀一致的次数
 */

// @lc code=start
/* function numTimesAllBlue(flips: number[]): number {
  let ret = 0;
  const n = flips.length;
  const buffer: number[] = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const flip = flips[i];
    buffer[flip - 1] ^= 1;
    let flag = true;
    for (let j = 0; j <= i; j++) {
      if (buffer[j] === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      ret++;
    }
  }
  return ret;
} */

function numTimesAllBlue(flips: number[]): number {
  let ret = 0;
  let right = 0;
  const n = flips.length;
  for (let i = 0; i < n; i++) {
    right = Math.max(right, flips[i]);
    if (right === i + 1) {
      ret++;
    }
  }
  return ret;
}
// @lc code=end
