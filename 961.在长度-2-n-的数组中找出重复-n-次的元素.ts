/*
 * @lc app=leetcode.cn id=961 lang=typescript
 *
 * [961] 在长度 2N 的数组中找出重复 N 次的元素
 */

// @lc code=start
// 哈希表
/* function repeatedNTimes(nums: number[]): number {
  let ret = -1;
  const set = new Set<number>();
  for (const num of nums) {
    if (set.has(num)) {
      ret = num;
      break;
    }
    set.add(num);
  }
  return ret;
} */

// 数学
/* function repeatedNTimes(nums: number[]): number {
  for (let gap = 1; gap <= 3; gap++) {
    for (let i = 0; i + gap < nums.length; i++) {
      if (nums[i] === nums[i + gap]) {
        return nums[i];
      }
    }
  }
  return -1;
} */

// 随机
function repeatedNTimes(nums: number[]): number {
  const n = nums.length;
  while (true) {
    const x = Math.floor(Math.random() * n);
    const y = Math.floor(Math.random() * n);
    if (x !== y && nums[x] === nums[y]) {
      return nums[x];
    }
  }
}
// @lc code=end
