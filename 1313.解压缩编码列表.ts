/*
 * @lc app=leetcode.cn id=1313 lang=typescript
 *
 * [1313] 解压缩编码列表
 */

// @lc code=start
function decompressRLElist(nums: number[]): number[] {
  const ret = [];
  const n = nums.length;
  for (let i = 0; i < n; i += 2) {
    const freq = nums[i];
    const val = nums[i + 1];
    for (let j = 0; j < freq; j++) {
      ret.push(val);
    }
  }
  return ret;
}
// @lc code=end
