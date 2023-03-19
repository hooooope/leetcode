/*
 * @lc app=leetcode.cn id=575 lang=typescript
 *
 * [575] 分糖果
 */

// @lc code=start
/* function distributeCandies(candyType: number[]): number {
  const set = new Set<number>();
  for (const type of candyType) {
    if (!set.has(type)) {
      set.add(type);
    }
  }
  return Math.min(set.size, candyType.length >> 1);
} */

/* function distributeCandies(candyType: number[]): number {
  candyType.sort((a, b) => a - b);
  let cnt = 1;
  const n = candyType.length;
  for (let i = 1; i < n && cnt < n >> 1; i++) {
    if (candyType[i] !== candyType[i - 1]) {
      cnt++;
    }
  }
  return cnt;
} */

function distributeCandies(candyType: number[]): number {
  const set = new Set(candyType);
  return Math.min(set.size, candyType.length >> 1);
}
// @lc code=end
