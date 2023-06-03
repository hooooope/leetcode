/*
 * @lc app=leetcode.cn id=875 lang=typescript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
  const check = (k: number): boolean => {
    let cnt = 0;
    for (const pile of piles) {
      cnt += Math.ceil(pile / k);
    }
    return cnt <= h;
  };
  let left = 1;
  let right = Math.max(...piles);
  while (left <= right) {
    const middle = (left + right) >> 1;
    if (check(middle)) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return left;
}
// @lc code=end
