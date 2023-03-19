/*
 * @lc app=leetcode.cn id=922 lang=typescript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
// 两次遍历
/* function sortArrayByParityII(nums: number[]): number[] {
  const n = nums.length;
  const ret: number[] = new Array(n);
  let i = 0;
  for (const num of nums) {
    if ((num & 1) === 0) {
      ret[i] = num;
      i += 2;
    }
  }
  i = 1;
  for (const num of nums) {
    if ((num & 1) === 1) {
      ret[i] = num;
      i += 2;
    }
  }
  return ret;
} */

// 双指针
function sortArrayByParityII(nums: number[]): number[] {
  const n = nums.length;
  for (let i = 0, j = 1; i < n; i += 2) {
    if (nums[i] & 1) {
      while (nums[j] & 1) {
        j += 2;
      }
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
  }
  return nums;
}
// @lc code=end
