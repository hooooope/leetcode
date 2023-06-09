/*
 * @lc app=leetcode.cn id=41 lang=typescript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
// 哈希表（空间复杂度On）
/* function firstMissingPositive(nums: number[]): number {
  let max = -Infinity;
  const seen = new Set<number>();
  for (const num of nums) {
    max = Math.max(max, num);
    seen.add(num);
  }
  let ret = 0;
  let finded = false;
  for (let i = 1; i <= max; i++) {
    if (!seen.has(i)) {
      ret = i;
      finded = true;
      break;
    }
  }
  return finded ? ret : Math.max(1, max + 1);
} */

// 哈希表（空间复杂度O1）
/* function firstMissingPositive(nums: number[]): number {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0) {
      nums[i] = n + 1;
    }
  }
  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i]);
    if (num <= n) {
      nums[num - 1] = -Math.abs(nums[num - 1]);
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return n + 1;
} */

// 置换
function firstMissingPositive(nums: number[]): number {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
      const temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return n + 1;
}
// @lc code=end
