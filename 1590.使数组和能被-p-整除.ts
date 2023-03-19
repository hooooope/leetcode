/*
 * @lc app=leetcode.cn id=1590 lang=typescript
 *
 * [1590] 使数组和能被 P 整除
 */

// @lc code=start
function minSubarray(nums: number[], p: number): number {
  let x = 0;
  for (const num of nums) {
    x = (x + num) % p;
  }
  if (x === 0) {
    return 0;
  }
  const index = new Map<number, number>();
  let y = 0;
  let ret = nums.length;
  for (let i = 0; i < nums.length; i++) {
    index.set(y, i);
    y = (y + nums[i]) % p;
    if (index.has((y - x + p) % p)) {
      ret = Math.min(ret, i - index.get((y - x + p) % p)! + 1);
    }
  }
  return ret === nums.length ? -1 : ret;
}
// @lc code=end
