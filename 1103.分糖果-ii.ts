/*
 * @lc app=leetcode.cn id=1103 lang=typescript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
function distributeCandies(candies: number, num_people: number): number[] {
  const ret = new Array(num_people).fill(0);
  for (let i = 1; candies > 0; i++) {
    const n = Math.min(i, candies);
    ret[(i - 1) % num_people] += n;
    candies -= n;
  }
  return ret;
}
// @lc code=end
