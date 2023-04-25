/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  // 讲列表中的区间按照左端点升序排序
  intervals.sort((a, b) => a[0] - b[0]);
  const n = intervals.length;
  const ret: number[][] = [intervals[0]];
  for (let i = 1; i < n; i++) {
    const pre = ret[ret.length - 1];
    const cur = intervals[i];
    if (cur[0] > pre[1]) {
      // 如果当前区间的左端点在数组ret中最后一个区间的右端点之后
      // 那么它们不会重合，我们可以直接将这个区间加入数组ret的末尾
      ret.push(cur);
    } else {
      // 否则，它们重合，我们需要用当前区间的右端点更新ret中最后一个区间的右端点，将其置为二者的较大值
      pre[1] = Math.max(pre[1], cur[1]);
    }
  }
  return ret;
}
// @lc code=end
