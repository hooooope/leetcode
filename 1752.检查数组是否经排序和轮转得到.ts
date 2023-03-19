/*
 * @lc app=leetcode.cn id=1752 lang=typescript
 *
 * [1752] 检查数组是否经排序和轮转得到
 */

// @lc code=start
/*
  source
  [1,2,3,4,5,6]
  x=3
  [4,5,6,1,2,3]
  source[0,...,n-x-1] = nums[x,...,n-1]
  source[n-x,...,n-1] = nums[0,...,x-1]
*/
function check(nums: number[]): boolean {
  let x = 0;
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      x = i;
      break;
    }
  }
  if (x === 0) {
    return true;
  }
  for (let i = x + 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      return false;
    }
  }
  return nums[0] >= nums[n - 1];
}
// @lc code=end
