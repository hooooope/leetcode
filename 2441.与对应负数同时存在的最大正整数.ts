/*
 * @lc app=leetcode.cn id=2441 lang=typescript
 *
 * [2441] 与对应负数同时存在的最大正整数
 */

// @lc code=start
// 哈希表
/* function findMaxK(nums: number[]): number {
  let ret = -1;
  const set = new Set<number>(nums);
  for (const num of nums) {
    if (set.has(-num)) {
      ret = Math.max(ret, num);
    }
  }
  return ret;
} */

// 排序+双指针
function findMaxK(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    while (i < j && nums[i] < -nums[j]) {
      i++;
    }
    if (-nums[i] === nums[j]) {
      return nums[j];
    }
    j--;
  }
  return -1;
}
// @lc code=end
