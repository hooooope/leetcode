/*
 * @lc app=leetcode.cn id=2475 lang=typescript
 *
 * [2475] 数组中不等三元组的数目
 */

// @lc code=start
// 枚举
/* function unequalTriplets(nums: number[]): number {
  let ret = 0;
  const set = new Set<number>();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    set.add(nums[i]);
    for (let j = i + 1; j < n; j++) {
      if (set.has(nums[j])) {
        continue;
      }
      set.add(nums[j]);
      for (let k = j + 1; k < n; k++) {
        if (set.has(nums[k])) {
          continue;
        }
        ret++;
      }
      set.delete(nums[j]);
    }
    set.delete(nums[i]);
  }
  return ret;
} */

// 排序
/* function unequalTriplets(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let ret = 0;
  const n = nums.length;
  // 以某一堆相同的数[i,j)作为三元组的中间元素
  for (let i = 0, j = 0; i < n; i = j) {
    while (j < n && nums[i] === nums[j]) {
      j++;
    }
    ret += i * (j - i) * (n - j);
  }
  return ret;
} */

// 哈希表
function unequalTriplets(nums: number[]): number {
  let ret = 0;
  const n = nums.length;
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  let prev = 0;
  for (const curr of map.values()) {
    ret += prev * curr * (n - prev - curr);
    prev += curr;
  }
  return ret;
}
// @lc code=end
