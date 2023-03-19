/*
 * @lc app=leetcode.cn id=2357 lang=typescript
 *
 * [2357] 使数组中所有元素都等于零
 */

// @lc code=start
// 排序+模拟
function minimumOperations(nums: number[]): number {
  let ret = 0;
  const n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      const x = nums[i];
      for (let j = i; j < n; j++) {
        nums[j] -= x;
      }
      ret++;
    }
  }
  return ret;
}

// 哈希集合
/* function minimumOperations(nums: number[]): number {
  const set = new Set<number>();
  for (const n of nums) {
    if (n > 0) {
      set.add(n);
    }
  }
  return set.size;
} */
// @lc code=end
