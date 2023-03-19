/*
 * @lc app=leetcode.cn id=496 lang=typescript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/* function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let ret: number[] = [];
  const len2 = nums2.length;
  for (const n1 of nums1) {
    let i = 0;
    while (n1 !== nums2[i++]) {}
    while (i < len2 && nums2[i] <= n1) {
      i++;
    }
    ret.push(i < len2 ? nums2[i] : -1);
  }
  return ret;
} */

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const ret: number[] = [];
  const stack: number[] = [];
  const map = new Map();
  for (let i = nums2.length - 1; i >= 0; i--) {
    const n = nums2[i];
    while (stack.length && n >= stack[stack.length - 1]) {
      stack.pop();
    }
    map.set(n, stack.length ? stack[stack.length - 1] : -1);
    stack.push(n);
  }
  for (const n of nums1) {
    ret.push(map.get(n));
  }
  return ret;
}
// @lc code=end
