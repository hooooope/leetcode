/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
// 动态规划
/* function trap(height: number[]): number {
  let ret = 0;
  const n = height.length;
  // left[i]表示i位置左侧最大的高度
  const left = new Array(n).fill(0);
  // right[i]表示i位置右侧最大的高度
  const right = new Array(n).fill(0);
  let max = height[0];
  for (let i = 1; i < n - 1; i++) {
    left[i] = max;
    max = Math.max(max, height[i]);
  }
  max = height[n - 1];
  for (let i = n - 2; i > 0; i--) {
    right[i] = max;
    max = Math.max(max, height[i]);
  }
  for (let i = 1; i < n - 1; i++) {
    ret += Math.max(Math.min(left[i], right[i]) - height[i], 0);
  }
  return ret;
} */

// 单调栈
/* function trap(height: number[]): number {
  let ret = 0;
  const n = height.length;
  // 从栈底到栈顶的下标对应的数组height中的元素递减
  const stack: number[] = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop()!;
      if (!stack.length) {
        break;
      }
      const left = stack[stack.length - 1];
      const currWidth = i - left - 1;
      const currHeight = Math.min(height[left], height[i]) - height[top];
      ret += currWidth * currHeight;
    }
    stack.push(i);
  }
  return ret;
} */

// 双指针
function trap(height: number[]): number {
  let ret = 0;
  const n = height.length;
  let left = 0;
  let right = n - 1;
  let leftMax = 0;
  let rightMax = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (height[left] < height[right]) {
      ret += leftMax - height[left];
      left++;
    } else {
      ret += rightMax - height[right];
      right--;
    }
  }
  return ret;
}
// @lc code=end
