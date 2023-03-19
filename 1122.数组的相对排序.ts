/*
 * @lc app=leetcode.cn id=1122 lang=typescript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
// 自定义排序
/* function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const rank = new Map<number, number>();
  for (let i = 0; i < arr2.length; i++) {
    rank.set(arr2[i], i);
  }
  arr1.sort((a, b) => {
    if (rank.has(a)) {
      return rank.has(b) ? rank.get(a)! - rank.get(b)! : -1;
    } else {
      return rank.has(b) ? 1 : a - b;
    }
  });
  return arr1;
} */

// 自定义排序优化
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const rank = new Map<number, number>();
  const n = arr2.length;
  for (let i = 0; i < n; i++) {
    // 在arr2中元素的rank为负数，因此一定排在不在arr2中元素的前面
    rank.set(arr2[i], i - n);
  }
  arr1.sort((a, b) => {
    return (rank.get(a) ?? a) - (rank.get(b) ?? b);
  });
  return arr1;
}

// 计数排序
/* function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const ret: number[] = [];
  const cnt = new Array(1001).fill(0);
  for (const n of arr1) {
    cnt[n]++;
  }
  for (const n of arr2) {
    for (let i = 0; i < cnt[n]; i++) {
      ret.push(n);
    }
    cnt[n] = 0;
  }
  for (let i = 0; i < cnt.length; i++) {
    for (let j = 0; j < cnt[i]; j++) {
      ret.push(i);
    }
  }
  return ret;
} */
// @lc code=end
