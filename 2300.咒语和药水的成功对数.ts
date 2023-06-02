/*
 * @lc app=leetcode.cn id=2300 lang=typescript
 *
 * [2300] 咒语和药水的成功对数
 */

// @lc code=start
// 暴力
/* function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  const n = spells.length;
  const m = potions.length;
  const ret: number[] = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (spells[i] * potions[j] >= success) {
        ret[i]++;
      }
    }
  }
  return ret;
} */

// 二分查找
function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  const n = spells.length;
  const m = potions.length;
  const ret: number[] = new Array(n).fill(0);
  potions.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    let left = 0;
    let right = m - 1;
    while (left <= right) {
      const middle = left + ((right - left) >> 1);
      if (spells[i] * potions[middle] >= success) {
        right = middle - 1;
        ret[i] = m - middle;
      } else {
        left = middle + 1;
      }
    }
  }
  return ret;
}
// @lc code=end
