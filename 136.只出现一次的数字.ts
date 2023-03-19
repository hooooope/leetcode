/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/* 
  异或运算满足交换律和结合律，即
  a^b^a = b^a^a = b^(a^a) = b^0 = b
  由于数组中除了某个元素只出现一次以外，其余每个元素均出现两次，
  因此将数组中的所有元素进行异或运算，即可求得只出现一次的元素
*/
function singleNumber(nums: number[]): number {
  let ret = 0; // 0^a=a
  for (const n of nums) {
    ret ^= n;
  }
  return ret;
}
// @lc code=end
