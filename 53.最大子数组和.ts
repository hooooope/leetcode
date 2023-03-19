/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/* function maxSubArray(nums: number[]): number {
  let ret = -Number.MAX_VALUE;
  let cur = 0;
  for (const num of nums) {
    cur += num;
    ret = Math.max(ret, cur);
    cur = cur < 0 ? 0 : cur;
  }
  return ret;
} */

// 动态规划
/* function maxSubArray(nums: number[]): number {
  let ret = nums[0];
  let pre = 0;
  for (const num of nums) {
    pre = Math.max(pre + num, num);
    ret = Math.max(ret, pre);
  }
  return ret;
} */

// 分治（线段树）
function maxSubArray(nums: number[]): number {
  class Status {
    constructor(
      public lSum: number, // 表示[l,r]内以l为左端点的最大子段和
      public rSum: number, // 表示[l,r]内以r为右端点的最大子段和
      public mSum: number, // 表示[l,r]内的最大子段和
      public iSum: number // 表示[l,r]内的区间和
    ) {}
  }
  const pushUp = (l: Status, r: Status) => {
    const iSum = l.iSum + r.iSum;
    const lSum = Math.max(l.lSum, l.iSum + r.lSum);
    const rSum = Math.max(r.rSum, r.iSum + l.rSum);
    const mSum = Math.max(l.mSum, r.mSum, l.rSum + r.lSum);
    return new Status(lSum, rSum, mSum, iSum);
  };
  const getInfo = (a: number[], l: number, r: number): Status => {
    if (l === r) {
      return new Status(a[l], a[l], a[l], a[l]);
    }
    const m = (l + r) >> 1;
    const lSub = getInfo(a, l, m);
    const rSub = getInfo(a, m + 1, r);
    return pushUp(lSub, rSub);
  };
  return getInfo(nums, 0, nums.length - 1).mSum;
}
// @lc code=end
