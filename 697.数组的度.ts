/*
 * @lc app=leetcode.cn id=697 lang=typescript
 *
 * [697] 数组的度
 */

// @lc code=start
function findShortestSubArray(nums: number[]): number {
  // map: [value, [count, start, end]]
  const map = new Map<number, [number, number, number]>();
  for (const [i, num] of nums.entries()) {
    if (map.has(num)) {
      const value = map.get(num)!;
      map.set(num, [value[0] + 1, value[1], i]);
    } else {
      map.set(num, [1, i, i]);
    }
  }
  let maxCount = 0;
  let minLength = 0;
  for (const [count, start, end] of map.values()) {
    if (count > maxCount) {
      maxCount = count;
      minLength = end - start + 1;
    } else if (count === maxCount) {
      minLength = Math.min(minLength, end - start + 1);
    }
  }
  return minLength;
}
// @lc code=end
