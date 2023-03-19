/*
 * @lc app=leetcode.cn id=268 lang=typescript
 *
 * [268] 丢失的数字
 */

// @lc code=start
// 排序
/* function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return n;
} */

// 哈希集合
/* function missingNumber(nums: number[]): number {
  const n = nums.length;
  let ret = n;
  const set = new Set<number>();
  for (const n of nums) {
    set.add(n);
  }
  for (let i = 0; i < n; i++) {
    if (!set.has(i)) {
      ret = i;
      break;
    }
  }
  return ret;
} */

// 异或
/* function missingNumber(nums: number[]): number {
  let ret = 0;
  for (const n of nums) {
    ret ^= n;
  }
  for (let i = 0; i <= nums.length; i++) {
    ret ^= i;
  }
  return ret;
} */

// 数学
/* function missingNumber(nums: number[]): number {
  const n = nums.length;
  const total = Math.floor((n * (n + 1)) / 2); // 0~n的和
  let arrSum = 0;
  for (let i = 0; i < n; i++) {
    arrSum += nums[i];
  }
  return total - arrSum;
} */

// 数学（优化）
function missingNumber(nums: number[]): number {
  const n = nums.length;
  let ret = n;
  for (let i = 0; i < n; i++) {
    ret += i - nums[i];
  }
  return ret;
}
// @lc code=end
