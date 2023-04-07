/*
 * @lc app=leetcode.cn id=1040 lang=typescript
 *
 * [1040] 移动石子直到连续 II
 */

// @lc code=start
function numMovesStonesII(stones: number[]): number[] {
  const n = stones.length;
  stones.sort((a, b) => a - b);
  if (stones[n - 1] - stones[0] + 1 === n) {
    return [0, 0];
  }
  // 最大操作数
  const max =
    Math.max(stones[n - 2] - stones[0] + 1, stones[n - 1] - stones[1] + 1) -
    (n - 1);
  // 最小操作数：最终全部石子连续等价于全部的石子最终都移动到了一个长度为n的窗口中
  let min = n;
  for (let i = 0, j = 0; i < n; i++) {
    while (j + 1 < n && stones[j + 1] - stones[i] + 1 <= n) {
      j++;
    }
    if (j - i + 1 === n - 1 && stones[j] - stones[i] + 1 === n - 1) {
      // 1.若窗口中有连续的n-1个石子，若剩下一个石子与窗口中与之最近的石子之间的空位数为1，则只需需要一次操作即可使n个石子连续，否则我们需要进行两步操作
      min = Math.min(min, 2);
    } else {
      // 2.否则我们选择包含石子最多的窗口即可，不妨设有k个石子，则此时需要n-k次操作将窗口中的空位填满
      min = Math.min(min, n - (j - i + 1));
    }
  }
  return [min, max];
}
// @lc code=end
