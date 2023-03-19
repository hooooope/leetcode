/*
 * @lc app=leetcode.cn id=1534 lang=typescript
 *
 * [1534] 统计好三元组
 */

// @lc code=start
function countGoodTriplets(
  arr: number[],
  a: number,
  b: number,
  c: number
): number {
  let ret = 0;
  const n = arr.length;
  const sum = new Array(1001).fill(0);
  for (let j = 0; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      if (Math.abs(arr[j] - arr[k]) <= b) {
        const lj = arr[j] - a,
          rj = arr[j] + a;
        const lk = arr[k] - c,
          rk = arr[k] + c;
        const l = Math.max(0, lj, lk),
          r = Math.min(1000, rj, rk);
        if (l <= r) {
          if (l === 0) {
            ret += sum[r];
          } else {
            ret += sum[r] - sum[l - 1];
          }
        }
      }
    }
    for (let k = arr[j]; k <= 1000; k++) {
      sum[k]++;
    }
  }
  return ret;
}
// @lc code=end
