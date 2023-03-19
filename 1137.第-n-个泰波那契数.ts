/*
 * @lc app=leetcode.cn id=1137 lang=typescript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
// time limit exceeded
/* function tribonacci(n: number): number {
  if (n === 0 || n === 1) {
    return n;
  }
  if (n === 2) {
    return 1;
  }
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
} */

// 动态规划（滚动数组）
function tribonacci(n: number): number {
  if (n === 0 || n === 1) {
    return n;
  }
  if (n === 2) {
    return 1;
  }
  let p = 0;
  let q = 0;
  let r = 1;
  let s = 1;
  for (let i = 3; i <= n; i++) {
    p = q;
    q = r;
    r = s;
    s = p + q + r;
  }
  return s;
}
// @lc code=end
