/*
 * @lc app=leetcode.cn id=2032 lang=typescript
 *
 * [2032] 至少在两个数组中出现的值
 */

// @lc code=start
// 哈希表
function twoOutOfThree(
  nums1: number[],
  nums2: number[],
  nums3: number[]
): number[] {
  const ret: number[] = [];
  const map = new Map<number, number>();
  for (const num of nums1) {
    map.set(num, 1);
  }
  for (const num of nums2) {
    map.set(num, (map.get(num) ?? 0) | 2);
  }
  for (const num of nums3) {
    map.set(num, (map.get(num) ?? 0) | 4);
  }
  for (const [k, v] of map.entries()) {
    if ((v & (v - 1)) !== 0) {
      ret.push(k);
    }
  }
  return ret;
}
// @lc code=end
