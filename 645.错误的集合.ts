/*
 * @lc app=leetcode.cn id=645 lang=typescript
 *
 * [645] 错误的集合
 */

// @lc code=start
/* 
  [1,2,2,4]
  [1,3,3,4]
  [2,2,3,4] edge case
  [1,2,3,3] edge case
*/
// 排序
/* function findErrorNums(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  const ret: number[] = [];
  const n = nums.length;
  let pre = 0; // 考虑到丢失的数字可能是1
  for (let i = 0; i < n; i++) {
    const cur = nums[i];
    if (cur === pre) {
      ret[0] = cur;
    } else if (cur - pre > 1) {
      ret[1] = pre + 1;
    }
    pre = cur;
  }
  // 考虑到丢失的数字可能是n
  if (nums[n - 1] !== n) {
    ret[1] = n;
  }
  return ret;
} */

// 哈希表
/* 
  [1,2,2,4]
  [1,3,3,4]
  [2,2,3,4] edge case
  [1,2,3,3] edge case
*/
/* function findErrorNums(nums: number[]): number[] {
  const ret: number[] = [];
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  const n = nums.length;
  for (let i = 1; i <= n; i++) {
    const count = map.get(i) ?? 0;
    if (count === 2) {
      ret[0] = i;
    } else if (count === 0) {
      ret[1] = i;
    }
  }
  return ret;
} */

// 异或
/* 
  [1,2,2,4] ^ [1,2,3,4] = [2,3]
  [1,3,3,4] ^ [1,2,3,4] = [2,3]
  [2,2,3,4] ^ [1,2,3,4] = [1,2] edge case
  [1,2,3,3] ^ [1,2,3,4] = [3,4] edge case
*/
/* function findErrorNums(nums: number[]): number[] {
  const n = nums.length;
  let xor = 0;
  for (const num of nums) {
    xor ^= num;
  }
  for (let i = 0; i <= n; i++) {
    xor ^= i;
  }
  const lowbit = xor & -xor;
  let num1 = 0;
  let num2 = 0;
  for (const num of nums) {
    if ((num & lowbit) === 0) {
      num1 ^= num;
    } else {
      num2 ^= num;
    }
  }
  for (let i = 1; i <= n; i++) {
    if ((i & lowbit) === 0) {
      num1 ^= i;
    } else {
      num2 ^= i;
    }
  }
  for (const num of nums) {
    if (num === num1) {
      return [num1, num2];
    }
  }
  return [num2, num1]; // [重复的数字, 丢失的数字]
} */

// 数学
function findErrorNums(nums: number[]): number[] {
  const n = nums.length;
  const sum1 = nums.reduce((a, b) => a + b);
  const sum2 = [...new Set(nums)].reduce((a, b) => a + b);
  return [sum1 - sum2, Math.floor(((1 + n) * n) / 2) - sum2];
}
// @lc code=end
