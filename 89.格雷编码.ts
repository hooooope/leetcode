/*
 * @lc app=leetcode.cn id=89 lang=typescript
 *
 * [89] 格雷编码
 */

// @lc code=start
// 归纳法
/* function grayCode(n: number): number[] {
  const ret = [0];
  for (let i = 1; i <= n; i++) {
    const m = ret.length;
    for (let j = m - 1; j >= 0; j--) {
      ret.push(ret[j] | (1 << (i - 1)));
    }
  }
  return ret;
} */

// 公式法
function grayCode(n: number): number[] {
  const ret: number[] = [];
  for (let i = 0; i < 1 << n; i++) {
    ret.push((i >> 1) ^ i);
  }
  return ret;
}
// @lc code=end
