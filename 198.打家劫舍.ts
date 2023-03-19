/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
// ----------思路1----------
// 暴力递归（超时）
/* function rob(nums: number[]): number {
  const process = (nums: number[], i: number) => {
    if (i >= nums.length) {
      return 0;
    }
    let yes = nums[i];
    let no = 0;
    yes += process(nums, i + 2);
    no += process(nums, i + 1);
    return Math.max(yes, no);
  };
  return process(nums, 0);
} */

// 记忆化搜索
/* function rob(nums: number[]): number {
  const process = (
    nums: number[],
    i: number,
    yesDp: number[],
    noDp: number[]
  ) => {
    if (i >= nums.length) {
      return 0;
    }
    if (yesDp[i] !== -1 && noDp[i] !== -1) {
      return Math.max(yesDp[i], noDp[i]);
    }
    let yes = nums[i];
    let no = 0;
    yes += process(nums, i + 2, yesDp, noDp);
    no += process(nums, i + 1, yesDp, noDp);
    yesDp[i] = yes;
    noDp[i] = no;
    return Math.max(yes, no);
  };
  const yesDp: number[] = new Array(nums.length + 1).fill(-1);
  const noDp: number[] = new Array(nums.length + 1).fill(-1);
  return process(nums, 0, yesDp, noDp);
} */

// 严格表结构
/* function rob(nums: number[]): number {
  const n = nums.length;
  const yesDp: number[] = new Array(n + 1).fill(0);
  const noDp: number[] = new Array(n + 1).fill(0);
  yesDp[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    yesDp[i] = nums[i] + Math.max(yesDp[i + 2], noDp[i + 2]);
    noDp[i] = Math.max(yesDp[i + 1], noDp[i + 1]);
  }
  return Math.max(yesDp[0], noDp[0]);
} */

// 严格表结构（空间压缩）
/* function rob(nums: number[]): number {
  const n = nums.length;
  let yes0 = nums[0];
  let no0 = 0;
  let yes1 = nums[n - 1];
  let yes2 = 0;
  let no1 = 0;
  let no2 = 0;
  for (let i = n - 2; i >= 0; i--) {
    yes0 = nums[i] + Math.max(yes2, no2);
    no0 = Math.max(yes1, no1);
    yes2 = yes1;
    yes1 = yes0;
    no2 = no1;
    no1 = no0;
  }
  return Math.max(yes0, no0);
} */

// ----------思路2----------
// 严格表结构
/* function rob(nums: number[]): number {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return nums[0];
  }
  const dp: number[] = new Array(n);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[n - 1];
} */

// 严格表结构（空间压缩）
function rob(nums: number[]): number {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return nums[0];
  }
  let first = nums[0];
  let second = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; i++) {
    const temp = second;
    second = Math.max(nums[i] + first, second);
    first = temp;
  }
  return second;
}
// @lc code=end
