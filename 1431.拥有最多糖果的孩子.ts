/*
 * @lc app=leetcode.cn id=1431 lang=typescript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);
  return candies.map((e) => e + extraCandies >= max);
}
// @lc code=end
