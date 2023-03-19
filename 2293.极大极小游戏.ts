/*
 * @lc app=leetcode.cn id=2293 lang=typescript
 *
 * [2293] 极大极小游戏
 */

// @lc code=start
// 递归
function minMaxGame(nums: number[]): number {
  let n = nums.length;
  if (n === 1) {
    return nums[0];
  }
  const newNums: number[] = new Array(n >> 1).fill(0);
  for (let i = 0; i < newNums.length; i++) {
    if (i % 2 === 0) {
      newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
    } else {
      newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
    }
  }
  return minMaxGame(newNums);
}

// 原地修改
/* function minMaxGame(nums: number[]): number {
  let n = nums.length;
  while (n > 1) {
    for (let i = 0; i < n >> 1; i++) {
      if (i % 2 === 0) {
        nums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
      } else {
        nums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
      }
    }
    n >>= 1;
  }
  return nums[0];
} */
// @lc code=end
