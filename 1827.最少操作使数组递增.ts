/*
 * @lc app=leetcode.cn id=1827 lang=typescript
 *
 * [1827] 最少操作使数组递增
 */

// @lc code=start
/* function minOperations(nums: number[]): number {
  let ret = 0;
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    const pre = nums[i - 1];
    if (cur <= pre) {
      const diff = pre - cur + 1;
      nums[i] += diff;
      ret += diff;
    }
  }
  return ret;
} */

/* function minOperations(nums: number[]): number {
  let ret = 0;
  let pre = nums[0];
  let cur = 0;
  let diff = 0;
  for (let i = 1; i < nums.length; i++) {
    cur = nums[i];
    if (cur <= pre) {
      diff = pre - cur + 1;
      pre = cur + diff;
      ret += diff;
    } else {
      pre = cur;
    }
  }
  return ret;
} */

function minOperations(nums: number[]): number {
  let ret = 0;
  let pre = nums[0] - 1;
  for (const num of nums) {
    pre = Math.max(pre + 1, num);
    ret += pre - num;
  }
  return ret;
}
// @lc code=end
