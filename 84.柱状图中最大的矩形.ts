/*
 * @lc app=leetcode.cn id=84 lang=typescript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
// 暴力枚举[宽]（Time Limit Exceeded）
/* function largestRectangleArea(heights: number[]): number {
  let ret = 0;
  const n = heights.length;
  for (let i = 0; i < n; i++) {
    let minHeight = heights[i];
    for (let j = i; j < n; j++) {
      minHeight = Math.min(minHeight, heights[j]);
      ret = Math.max(ret, (j - i + 1) * minHeight);
    }
  }
  return ret;
} */

// 暴力枚举[高]（Time Limit Exceeded）
/* function largestRectangleArea(heights: number[]): number {
  let ret = 0;
  const n = heights.length;
  for (let mid = 0; mid < n; mid++) {
    const height = heights[mid];
    let left = mid;
    let right = mid;
    while (left - 1 >= 0 && heights[left - 1] >= height) {
      left--;
    }
    while (right + 1 < n && heights[right + 1] >= height) {
      right++;
    }
    ret = Math.max(ret, (right - left + 1) * height);
  }
  return ret;
} */

// 单调栈
/* function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  const left: number[] = new Array(n).fill(-1);
  const right: number[] = new Array(n).fill(n);
  let mono_stack: number[] = [];
  for (let i = 0; i < n; i++) {
    while (
      mono_stack.length &&
      heights[mono_stack[mono_stack.length - 1]] >= heights[i]
    ) {
      mono_stack.pop();
    }
    left[i] = mono_stack.length ? mono_stack[mono_stack.length - 1] : -1;
    mono_stack.push(i);
  }
  mono_stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (
      mono_stack.length &&
      heights[mono_stack[mono_stack.length - 1]] >= heights[i]
    ) {
      mono_stack.pop();
    }
    right[i] = mono_stack.length ? mono_stack[mono_stack.length - 1] : n;
    mono_stack.push(i);
  }
  let ret = 0;
  for (let i = 0; i < n; i++) {
    ret = Math.max(ret, (right[i] - left[i] - 1) * heights[i]);
  }
  return ret;
} */

// 单调栈（常数优化）
function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  const left: number[] = new Array(n).fill(-1);
  const right: number[] = new Array(n).fill(n);
  let mono_stack: number[] = [];
  for (let i = 0; i < n; i++) {
    while (
      mono_stack.length &&
      heights[mono_stack[mono_stack.length - 1]] >= heights[i]
    ) {
      right[mono_stack[mono_stack.length - 1]] = i;
      mono_stack.pop();
    }
    left[i] = mono_stack.length ? mono_stack[mono_stack.length - 1] : -1;
    mono_stack.push(i);
  }
  let ret = 0;
  for (let i = 0; i < n; i++) {
    ret = Math.max(ret, (right[i] - left[i] - 1) * heights[i]);
  }
  return ret;
}
// @lc code=end
