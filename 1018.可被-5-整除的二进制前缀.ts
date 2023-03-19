/*
 * @lc app=leetcode.cn id=1018 lang=typescript
 *
 * [1018] 可被 5 整除的二进制前缀
 */

// @lc code=start
function prefixesDivBy5(nums: number[]): boolean[] {
  let remain = 0;
  const n = nums.length;
  const ret: boolean[] = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    remain = ((remain << 1) | nums[i]) % 5;
    if (remain === 0) {
      ret[i] = true;
    }
  }
  return ret;
}
// @lc code=end
