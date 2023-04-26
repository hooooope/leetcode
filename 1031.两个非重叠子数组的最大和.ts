/*
 * @lc app=leetcode.cn id=1031 lang=typescript
 *
 * [1031] 两个非重叠子数组的最大和
 */

// @lc code=start
// 动态规划+滑动窗口
function maxSumTwoNoOverlap(
  nums: number[],
  firstLen: number,
  secondLen: number
): number {
  const help = (nums: number[], firstLen: number, secondLen: number) => {
    let suml = nums.slice(0, firstLen).reduce((acc, val) => acc + val, 0);
    // maxSuml为dp[i]的滚动数组
    // dp[i]表示nums[0,i-1]中长度为firstLen的最大子数组和
    let maxSuml = suml;
    let sumr = nums
      .slice(firstLen, firstLen + secondLen)
      .reduce((acc, val) => acc + val, 0);
    let ret = maxSuml + sumr;
    // 通过移动第一个窗口来更新dp值
    // 通过第二个窗口来计算此时的最大和，并记录移动过程中的最大值即可
    for (
      let i = firstLen, j = firstLen + secondLen;
      j < nums.length;
      i++, j++
    ) {
      suml += nums[i] - nums[i - firstLen];
      maxSuml = Math.max(maxSuml, suml);
      sumr += nums[j] - nums[j - secondLen];
      ret = Math.max(ret, maxSuml + sumr);
    }
    return ret;
  };
  // Math.max(当firstLen的子数组在长度为secondLen的子数组前两段子数组的最大和, 当secondLen的子数组在长度为firstLen的子数组前两段子数组的最大和)
  return Math.max(
    help(nums, firstLen, secondLen),
    help(nums, secondLen, firstLen)
  );
}
// @lc code=end
