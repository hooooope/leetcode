/*
 * @lc app=leetcode.cn id=1187 lang=typescript
 *
 * [1187] 使数组严格递增
 */

// @lc code=start
function makeArrayIncreasing(arr1: number[], arr2: number[]): number {
  const binarySearch = (list: number[], low: number, target: number) => {
    let high = list.length;
    while (low < high) {
      const mid = low + Math.floor((high - low) / 2);
      if (list[mid] > target) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
  };
  const INF = 0x3f3f3f3f;
  // 由于要求数组严格递增，因此数组中不可能存在相同的元素
  // 对于数组arr2来说，可以不需要考虑数组中的重复元素，可以预处理去除arr2的重复元素
  arr2.sort((a, b) => a - b);
  const list: number[] = [];
  let prev = -1;
  for (const num of arr2) {
    if (num !== prev) {
      list.push(num);
      prev = num;
    }
  }
  // 数组arr1的长度为n，数组arr2的长度为m
  // 此时可以知道最多可以替换的次数为min(n, m)
  const n = arr1.length;
  const m = list.length;
  // dp[i][j]表示数组arr1中前i个元素进行了j次替换后组成严格递增子数组末尾元素的最小值
  const dp = new Array(n + 1)
    .fill(0)
    .map(() => new Array(Math.min(n, m) + 1).fill(INF));
  dp[0][0] = -1;
  // 当我们遍历arr1的第i个元素时，此时arr1[i]要么进行替换，要么进行保留
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= Math.min(i, m); j++) {
      // 如果arr1[i]需要进行保留，则arr1[i]一定严格大于前i-1个元素替换后组成的严格递增子数组最末尾的元素
      if (arr1[i - 1] > dp[i - 1][j]) {
        dp[i][j] = arr1[i - 1];
      }
      // 如果arr1[i]需要进行替换，则替换后的元素一定严格大于前i-1个元素替换后组成的严格递增子数组最末尾的元素
      if (j > 0 && dp[i - 1][j - 1] !== INF) {
        // 前i-1个元素经过了j-1次变换后得到的递增子数组的末尾元素的最小值为dp[i-1][j-1]
        // 此时从arr2找到严格大于dp[i-1][j-1]的最小元素arr2[k]
        // 则此时将arr2[k]加入到该子数组中且构成数组严格递增
        const idx = binarySearch(list, j - 1, dp[i - 1][j - 1]);
        if (idx !== list.length) {
          dp[i][j] = Math.min(dp[i][j], list[idx]);
        }
      }
      if (i === n && dp[i][j] !== INF) {
        return j;
      }
    }
  }
  return -1;
}
// @lc code=end
