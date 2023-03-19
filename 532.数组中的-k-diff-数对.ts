/*
 * @lc app=leetcode.cn id=532 lang=typescript
 *
 * [532] 数组中的 k-diff 数对
 */

// @lc code=start
// 哈希表
/* function findPairs(nums: number[], k: number): number {
  // 存放数对的较小值
  const ret = new Set<number>();
  // 存放访问过的数字
  const visited = new Set<number>();
  for (const num of nums) {
    if (visited.has(num - k)) {
      ret.add(num - k);
    }
    if (visited.has(num + k)) {
      ret.add(num);
    }
    visited.add(num);
  }
  return ret.size;
} */

// 排序+双指针
function findPairs(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let ret = 0;
  let y = 0;
  const n = nums.length;
  for (let x = 0; x < n; x++) {
    if (x === 0 || nums[x] !== nums[x - 1]) {
      // 寻找特定的y，满足nums[y] === nums[x] + k
      // 条件y <= x，处理当k = 0的情况，保证数对中x < y
      while (y < n && (nums[y] < nums[x] + k || y <= x)) {
        y++;
      }
      if (y < n && nums[y] === nums[x] + k) {
        ret++;
      }
    }
  }
  return ret;
}
// @lc code=end
