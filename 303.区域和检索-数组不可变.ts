/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/* class NumArray {
  private nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  sumRange(left: number, right: number): number {
    let ret = 0;
    for (let i = left; i <= right; i++) {
      ret += this.nums[i];
    }
    return ret;
  }
} */

class NumArray {
  private sum: number[];

  constructor(nums: number[]) {
    const sum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
      sum[i] = nums[i] + sum[i - 1];
    }
    this.sum = sum;
  }

  sumRange(left: number, right: number): number {
    if (left === 0) {
      return this.sum[right];
    } else {
      return this.sum[right] - this.sum[left - 1];
    }
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
