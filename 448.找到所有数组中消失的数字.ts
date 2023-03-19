/*
 * @lc app=leetcode.cn id=448 lang=typescript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/* function findDisappearedNumbers(nums: number[]): number[] {
  const ret: number[] = [];
  const n = nums.length;
  const set = new Set<number>();
  for (const n of nums) {
    set.add(n);
  }
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      ret.push(i);
    }
  }
  return ret;
} */

/* function findDisappearedNumbers(nums: number[]): number[] {
  const ret: number[] = [];
  const n = nums.length;
  for (const num of nums) {
    // 由于当前数字可能已经累加一次或多次n，所以需要进行取余
    const i = (num - 1) % n;
    nums[i] += n;
  }
  for (const [i, num] of nums.entries()) {
    if (num <= n) {
      ret.push(i + 1);
    }
  }
  return ret;
} */

function findDisappearedNumbers(nums: number[]): number[] {
  const ret: number[] = [];
  for (const num of nums) {
    const i = Math.abs(num) - 1;
    nums[i] = -Math.abs(nums[i]);
  }
  for (const [i, num] of nums.entries()) {
    if (num > 0) {
      ret.push(i + 1);
    }
  }
  return ret;
}
// @lc code=end
