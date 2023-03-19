/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const swap = (nums: number[], index1: number, index2: number) => {
    const temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
  };
  const process = (nums: number[], index: number, ret: number[][]) => {
    if (index === nums.length) {
      ret.push([...nums]);
    } else {
      for (let i = index; i < nums.length; i++) {
        swap(nums, index, i);
        process(nums, index + 1, ret);
        swap(nums, index, i);
      }
    }
  };
  const ret: number[][] = [];
  process(nums, 0, ret);
  return ret;
}
// @lc code=end
