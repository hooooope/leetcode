/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
// 两个集合
function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return _intersection(set1, set2);
}
const _intersection = (set1: Set<number>, set2: Set<number>): number[] => {
  if (set1.size > set2.size) {
    return _intersection(set2, set1);
  }
  const ret: number[] = [];
  for (const n of set1) {
    if (set2.has(n)) {
      ret.push(n);
    }
  }
  return ret;
};

// 排序+双指针
/* function intersection(nums1: number[], nums2: number[]): number[] {
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
      if (!ret.length || n1 !== ret[ret.length - 1]) {
        ret.push(n1);
      }
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
// @lc code=end
