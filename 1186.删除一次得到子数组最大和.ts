/*
 * @lc app=leetcode.cn id=1186 lang=typescript
 *
 * [1186] 删除一次得到子数组最大和
 */

// @lc code=start
// 动态规划
/* function maximumSum(arr: number[]): number {
  const n = arr.length;
  // dp[i][j]表示以arr[i]结尾的子数组删除j次得到的最大和
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(2).fill(0));
  // 以arr[0]结尾的子数组删除0次得到的最大和
  dp[0][0] = arr[0];
  // 以arr[0]结尾的子数组删除1次得到的最大和
  // 由于删除一个元素后，子数组不能为空，因此该值不计入结果
  dp[0][1] = 0;
  let ret = arr[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0] + arr[i], arr[i]);
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1] + arr[i]);
    ret = Math.max(ret, dp[i][0], dp[i][1]);
  }
  return ret;
} */

// 动态规划（空间压缩）
function maximumSum(arr: number[]): number {
  const n = arr.length;
  let dp0 = arr[0];
  let dp1 = 0;
  let ret = arr[0];
  for (let i = 1; i < n; i++) {
    dp1 = Math.max(dp0, dp1 + arr[i]);
    dp0 = Math.max(dp0 + arr[i], arr[i]);
    ret = Math.max(ret, dp0, dp1);
  }
  return ret;
}
// @lc code=end
