/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
// 排序+双指针
/* function intersect(nums1: number[], nums2: number[]): number[] {
  const ret: number[] = [];
  const len1 = nums1.length;
  const len2 = nums2.length;
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  while (i < len1 && j < len2) {
    const n1 = nums1[i];
    const n2 = nums2[j];
    if (n1 === n2) {
      ret.push(n1);
      i++;
      j++;
    } else if (n1 < n2) {
      i++;
    } else {
      j++;
    }
  }
  return ret;
} */

// 哈希表
function intersect(nums1: number[], nums2: number[]): number[] {
  const ret: number[] = [];
  const map = new Map<number, number>();
  for (const n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n)! + 1);
    } else {
      map.set(n, 1);
    }
  }
  for (const n of nums2) {
    if (map.has(n)) {
      let count = map.get(n)!;
      ret.push(n);
      count--;
      if (count > 0) {
        map.set(n, count);
      } else {
        map.delete(n);
      }
    }
  }
  return ret;
}
// @lc code=end
