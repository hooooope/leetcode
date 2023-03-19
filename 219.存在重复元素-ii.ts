/*
 * @lc app=leetcode.cn id=219 lang=typescript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
// 哈希表
/* function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (map.has(n) && i - map.get(n)! <= k) {
      return true;
    } else {
      map.set(n, i);
    }
  }
  return false;
} */

// 滑动窗口
/* 
  k = 5
  length <= k + 1 = 6
  nums = [0, 1, 2, 3, 4, 5]
  对于任意的i和j, i > j, i - j <= k
*/
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const set = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      set.delete(nums[i - k - 1]);
    }
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
}
// @lc code=end
