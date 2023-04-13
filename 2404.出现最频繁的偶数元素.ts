/*
 * @lc app=leetcode.cn id=2404 lang=typescript
 *
 * [2404] 出现最频繁的偶数元素
 */

// @lc code=start
function mostFrequentEven(nums: number[]): number {
  let ret = -1;
  let max = 0;
  const map = new Map<number, number>();
  for (const n of nums) {
    if (n % 2 === 0) {
      const cnt = (map.get(n) ?? 0) + 1;
      map.set(n, cnt);
      if (cnt > max || (cnt === max && n < ret)) {
        max = cnt;
        ret = n;
      }
    }
  }
  return ret;
}
// @lc code=end
