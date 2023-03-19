/*
 * @lc app=leetcode.cn id=1238 lang=typescript
 *
 * [1238] 循环码排列
 */

// @lc code=start
// 归纳法
/* function circularPermutation(n: number, start: number): number[] {
  const ret = [start];
  for (let i = 1; i <= n; i++) {
    const m = ret.length;
    for (let j = m - 1; j >= 0; j--) {
      ret.push(((ret[j] ^ start) | (1 << (i - 1))) ^ start);
    }
  }
  return ret;
} */

// 公式法
function circularPermutation(n: number, start: number): number[] {
  const ret: number[] = [];
  for (let i = 0; i < 1 << n; i++) {
    ret.push((i >> 1) ^ i ^ start);
  }
  return ret;
}
// @lc code=end
