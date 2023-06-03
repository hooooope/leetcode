/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 */

// @lc code=start
// 组合枚举
function combinationSum3(k: number, n: number): number[][] {
  const process = (i: number, s: number) => {
    if (s > n || buffer.length > k) {
      return;
    }
    if (i === 10) {
      if (s === n && buffer.length === k) {
        ret.push([...buffer]);
      }
      return;
    }
    buffer.push(i);
    process(i + 1, s + i);
    buffer.pop();
    process(i + 1, s);
  };
  const ret: number[][] = [];
  const buffer: number[] = [];
  process(1, 0);
  return ret;
}

// 二进制（子集）枚举
/* function combinationSum3(k: number, n: number): number[][] {
  const check = (mask: number, k: number, n: number): boolean => {
    buffer = [];
    for (let i = 0; i < 9; i++) {
      if ((1 << i) & mask) {
        buffer.push(i + 1);
      }
    }
    return (
      buffer.length === k && buffer.reduce((pre, cur) => pre + cur, 0) === n
    );
  };
  const ret: number[][] = [];
  let buffer: number[] = [];
  for (let mask = 0; mask < 1 << 9; mask++) {
    if (check(mask, k, n)) {
      ret.push(buffer);
    }
  }
  return ret;
} */
// @lc code=end
