/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  let ret = 0;
  const n = height.length;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    ret = Math.max(ret, area);
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ret;
}
// @lc code=end
