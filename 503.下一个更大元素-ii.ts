/*
 * @lc app=leetcode.cn id=503 lang=typescript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
function nextGreaterElements(nums: number[]): number[] {
  const n = nums.length;
  const stack: number[] = [];
  const ret: number[] = new Array(n).fill(-1);
  for (let i = 0; i < 2 * n - 1; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
      ret[stack[stack.length - 1]] = nums[i % n];
      stack.pop();
    }
    stack.push(i % n);
  }
  return ret;
}
// @lc code=end
