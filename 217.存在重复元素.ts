/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/* function containsDuplicate(nums: number[]): boolean {
  const map = new Map<number, boolean>();
  for (const n of nums) {
    if (map.has(n)) {
      return true;
    }
    map.set(n, true);
  }
  return false;
} */

function containsDuplicate(nums: number[]): boolean {
  return new Set([...nums]).size < nums.length;
}
// @lc code=end
