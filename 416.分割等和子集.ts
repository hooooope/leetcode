/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 */

// @lc code=start
// 暴力递归
/* function canPartition(nums: number[]): boolean {
  const n = nums.length;
  let n1 = 0;
  let n2 = 0;
  const process = (i: number): boolean => {
    if (i === n) {
      return n1 === n2;
    }
    n1 += nums[i];
    const p1 = process(i + 1);
    n1 -= nums[i];
    n2 += nums[i];
    const p2 = process(i + 1);
    n2 -= nums[i];
    return p1 || p2;
  };
  return process(0);
} */

// 动态规划
/* function canPartition(nums: number[]): boolean {
  const n = nums.length;
  // 如果n < 2，则不可能将数组分割成元素和相等的两个子集
  if (n < 2) {
    return false;
  }
  let sum = 0;
  let max = 0;
  for (const num of nums) {
    sum += num;
    max = Math.max(max, num);
  }
  // 如果sum是奇数，则不可能将数组分割成元素和相等的两个子集
  if (sum & 1) {
    return false;
  }
  const target = sum >> 1;
  // 如果max > target，则除了max以外的所有元素之和一定小于target
  // 因此不可能将数组分割成元素和相等的两个子集
  if (max > target) {
    return false;
  }
  // dp[i][j]表示从数组的[0,i]下标范围内选取若干个正整数（可以是0个），是否存在一种选取方案使得被选取的正整数的和等于j
  const dp: boolean[][] = new Array(n)
    .fill(0)
    .map(() => new Array(target + 1).fill(false));
  // 如果不选取任何正整数，则被选取的正整数等于0
  // 因此对于所有0<=i<n，都有dp[i][0]=true
  for (let i = 0; i < n; i++) {
    dp[i][0] = true;
  }
  // 当i==0时，只有一个正整数nums[0]可以被选取，因此dp[0][nums[0]]=true
  dp[0][nums[0]] = true;
  for (let i = 1; i < n; i++) {
    const num = nums[i];
    for (let j = 1; j <= target; j++) {
      if (num > j) {
        // 在选择的数字的和等于j的情况下无法选取当前数字
        dp[i][j] = dp[i - 1][j];
      } else {
        // 对于当前数组，可以选取也可以不选取
        // 两种情况只要有一个为true即可
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num];
      }
    }
  }
  return dp[n - 1][target];
} */

// 空间压缩
function canPartition(nums: number[]): boolean {
  const n = nums.length;
  if (n < 2) {
    return false;
  }
  let sum = 0;
  let max = 0;
  for (const num of nums) {
    sum += num;
    max = Math.max(max, num);
  }
  if (sum & 1) {
    return false;
  }
  const target = sum >> 1;
  if (max > target) {
    return false;
  }
  const dp: boolean[] = new Array(target + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i < n; i++) {
    const num = nums[i];
    // 需要注意的是第二层的循环我们需要从大到小计算，因为如果我们从小到大更新dp值，那么在计算dp[j]值的时候，dp[j-nums[i]]已经是被更新过的状态，不再是上一行的dp值
    for (let j = target; j >= num; j--) {
      dp[j] ||= dp[j - num];
    }
  }
  return dp[target];
}
// @lc code=end
