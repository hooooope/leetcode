/*
 * @lc app=leetcode.cn id=1200 lang=typescript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
function minimumAbsDifference(arr: number[]): number[][] {
  let ret: number[][] = [];
  let min = Number.MAX_VALUE;
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];
    if (diff < min) {
      min = diff;
      ret = [];
    }
    if (diff === min) {
      ret.push([arr[i - 1], arr[i]]);
    }
  }
  return ret;
}
// @lc code=end
