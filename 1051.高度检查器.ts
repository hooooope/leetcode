/*
 * @lc app=leetcode.cn id=1051 lang=typescript
 *
 * [1051] 高度检查器
 */

// @lc code=start
// 直接排序
/* function heightChecker(heights: number[]): number {
  let ret = 0;
  const expected = [...heights].sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      ret++;
    }
  }
  return ret;
} */

// 计数排序
function heightChecker(heights: number[]): number {
  const m = Math.max(...heights);
  const cnt = new Array(m + 1).fill(0);
  for (const height of heights) {
    cnt[height]++;
  }
  let ret = 0;
  let idx = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= cnt[i]; j++) {
      if (heights[idx] !== i) {
        ret++;
      }
      idx++;
    }
  }
  return ret;
}
// @lc code=end
