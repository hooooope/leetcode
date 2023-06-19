/*
 * @lc app=leetcode.cn id=1262 lang=typescript
 *
 * [1262] 可被三整除的最大和
 */

// @lc code=start
/* function maxSumDivThree(nums: number[]): number {
  const process = (i: number, s: number) => {
    if (i === nums.length) {
      if (s % 3 === 0) {
        ret = Math.max(ret, s);
      }
      return;
    }
    process(i + 1, s + nums[i]);
    process(i + 1, s);
  };
  let ret = 0;
  process(0, 0);
  return ret;
} */

// 动态规划
function maxSumDivThree(nums: number[]): number {
  let f = [0, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  for (const num of nums) {
    const g = [...f];
    for (let i = 0; i < 3; i++) {
      g[(i + num) % 3] = Math.max(g[(i + num) % 3], f[i] + num);
    }
    f = g;
  }
  return f[0];
}
// @lc code=end
