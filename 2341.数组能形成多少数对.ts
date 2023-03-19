/*
 * @lc app=leetcode.cn id=2341 lang=typescript
 *
 * [2341] 数组能形成多少数对
 */

// @lc code=start
function numberOfPairs(nums: number[]): number[] {
  let pair = 0;
  const n = nums.length;
  const cnt = new Array(101).fill(false);
  for (const num of nums) {
    // 偶数为false，奇数为true
    cnt[num] = !cnt[num];
    if (!cnt[num]) {
      pair++;
    }
  }
  return [pair, n - 2 * pair];
}
// @lc code=end
