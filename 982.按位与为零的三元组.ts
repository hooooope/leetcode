/*
 * @lc app=leetcode.cn id=982 lang=typescript
 *
 * [982] 按位与为零的三元组
 */

// @lc code=start
// 枚举
/* function countTriplets(nums: number[]): number {
  let ret = 0;
  const cnt = new Array(1 << 16).fill(0);
  for (const x of nums) {
    for (const y of nums) {
      cnt[x & y]++;
    }
  }
  for (const k of nums) {
    for (let mask = 0; mask < 1 << 16; mask++) {
      if ((k & mask) === 0) {
        ret += cnt[mask];
      }
    }
  }
  return ret;
} */

// 枚举+子集优化
function countTriplets(nums: number[]): number {
  let ret = 0;
  const cnt = new Array(1 << 16).fill(0);
  for (const x of nums) {
    for (const y of nums) {
      cnt[x & y]++;
    }
  }
  for (let k of nums) {
    k = k ^ 0xffff;
    for (let sub = k; sub !== 0; sub = (sub - 1) & k) {
      ret += cnt[sub];
    }
    ret += cnt[0];
  }
  return ret;
}
// @lc code=end
