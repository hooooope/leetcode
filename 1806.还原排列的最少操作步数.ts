/*
 * @lc app=leetcode.cn id=1806 lang=typescript
 *
 * [1806] 还原排列的最少操作步数
 */

// @lc code=start
function reinitializePermutation(n: number): number {
  let ret = 0;
  let perm = new Array(n).fill(0).map((_, i) => i);
  const target = perm.slice();
  while (true) {
    const arr = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        arr[i] = perm[i / 2];
      } else {
        arr[i] = perm[n / 2 + (i - 1) / 2];
      }
    }
    perm = arr;
    ret++;
    if (perm.toString() === target.toString()) {
      break;
    }
  }
  return ret;
}
// @lc code=end
