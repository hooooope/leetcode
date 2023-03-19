/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
// 暴力递归法
/* function canJump(nums: number[]): boolean {
  const process = (nums: number[], index: number) => {
    if (index === nums.length - 1) {
      return true;
    }
    if (nums[index] === 0) {
      return false;
    }
    for (let i = 1; i <= nums[index]; i++) {
      if (process(nums, index + i)) {
        return true;
      }
    }
    return false;
  };
  return process(nums, 0);
} */

// 记忆化搜索法
/* function canJump(nums: number[]): boolean {
  const process = (nums: number[], index: number, dp: boolean[]) => {
    if (dp[index] !== undefined) {
      return dp[index];
    }
    if (index === nums.length - 1) {
      dp[index] = true;
    } else if (nums[index] === 0) {
      dp[index] = false;
    } else {
      let ret = false;
      for (let i = 1; i <= nums[index]; i++) {
        ret ||= process(nums, index + i, dp);
        if (ret) {
          break;
        }
      }
      dp[index] = ret;
    }
    return dp[index];
  };
  const dp: boolean[] = new Array(nums.length);
  process(nums, 0, dp);
  return dp[0];
} */

// 严格表结构法
/* function canJump(nums: number[]): boolean {
  const n = nums.length;
  const dp: boolean[] = new Array(n).fill(false);
  dp[n - 1] = true;
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 1; i + j < n && j <= nums[i]; j++) {
      if (dp[i + j]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[0];
} */

// 贪心
function canJump(nums: number[]): boolean {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      return false;
    }
    k = Math.max(k, i + nums[i]);
  }
  return true;
}
// @lc code=end
