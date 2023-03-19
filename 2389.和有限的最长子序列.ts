/*
 * @lc app=leetcode.cn id=2389 lang=typescript
 *
 * [2389] 和有限的最长子序列
 */

// @lc code=start
function answerQueries(nums: number[], queries: number[]): number[] {
  // 在nums中寻找大于target最小的数
  const binarySearch = (arr: number[], target: number) => {
    let low = 1;
    let hight = arr.length;
    while (low < hight) {
      const mid = low + ((hight - low) >> 1);
      if (arr[mid] > target) {
        hight = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
  };
  const n = nums.length;
  const m = queries.length;
  // sum[i]表示长度为i的子数组前缀和
  const sum: number[] = new Array(n + 1).fill(0);
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + nums[i];
  }
  const ret: number[] = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    ret[i] = binarySearch(sum, queries[i]) - 1;
  }
  return ret;
}
// @lc code=end
