/*
 * @lc app=leetcode.cn id=1814 lang=typescript
 *
 * [1814] 统计一个数组中好对子的数目
 */

// @lc code=start
function countNicePairs(nums: number[]): number {
  const rev = (n: number): number => {
    let ret = 0;
    while (n) {
      ret = ret * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    return ret;
  };
  let ret = 0;
  const MOD = 1000000007;
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const j = nums[i] - rev(nums[i]);
    ret = (ret + (map.get(j) ?? 0)) % MOD;
    map.set(j, (map.get(j) ?? 0) + 1);
  }
  return ret % 1000000007;
}
// @lc code=end
