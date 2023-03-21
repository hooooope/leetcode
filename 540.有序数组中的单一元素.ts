/*
 * @lc app=leetcode.cn id=540 lang=typescript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
// 异或和 O(n)
/* function singleNonDuplicate(nums: number[]): number {
  let ret = 0;
  for (const n of nums) {
    ret ^= n;
  }
  return ret;
} */

// 全数组的二分查找 O(logN)
/* function singleNonDuplicate(nums: number[]): number {
  // 假设只出现一次的元素位于下标x，由于其与每个元素都出现两次，因此下标x的左边和右边都有偶数个元素，数组的长度是奇数
  // 由于数组是有序的，因此数组中相同的元素一定相邻
  // 对于下标x左边的下标y，如果nums[y] = nums[y + 1]，则y一定是偶数
  // 对于下标x右边的下标z，如果nums[z] = nums[z + 1]，则z一定是奇数
  // 由于下标x是相同元素的开始下标的奇偶性的分界，因此可以使用二分查找的方法寻找下标x
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    const mid = low + ((high - low) >> 1);
    // 如果mid是偶数，则比较nums[mid]和nums[mid+1]是否相等
    // 如果mid是奇数，则比较nums[mid-1]和nums[mid]是否相等
    // 利用按位异或的性质，可以得到mid和相邻的数之间的如下关系，
    // 当mid是偶数时，mid + 1 = mid ^ 1；
    // 当mid是奇数时，mid - 1 = mid ^ 1；
    // 因此在二分查找的过程中，不需要判断mid的奇偶性，mid和mid^1即为每次需要比较元素的两个下标
    if (nums[mid] === nums[mid ^ 1]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return nums[low];
} */

// 偶数下标的二分查找 O(logN)
function singleNonDuplicate(nums: number[]): number {
  // 由于只出现一次的元素所在下标x的左边有偶数个元素，因此下标x一定是偶数，可以在偶数下标范围内二分查找
  // 二分查找的目标是找到满足nums[x] ≠ nums[x + 1]的最小偶数下标x，则下标x出的元素是只出现一次的元素
  // 初始时，二分查找的左边界是0，右边界是数组的最大偶数下标，由于数组的长度是奇数，因此数组的最大偶数下标等于数组的长度减1
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = low + ((high - low) >> 1);
    // 如果mid是奇数则将mid减1，确保mid是偶数
    mid -= mid & 1;
    // 比较nums[mid]和nums[mid + 1]是否相等
    if (nums[mid] === nums[mid + 1]) {
      low = mid + 2;
    } else {
      high = mid;
    }
  }
  return nums[low];
}
// @lc code=end
