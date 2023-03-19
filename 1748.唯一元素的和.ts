/*
 * @lc app=leetcode.cn id=1748 lang=typescript
 *
 * [1748] 唯一元素的和
 */

// @lc code=start
/* function sumOfUnique(nums: number[]): number {
  let ret = 0;
  const counter = new Array(101).fill(0);
  for (const n of nums) {
    counter[n]++;
  }
  for (let i = 0; i < counter.length; i++) {
    counter[i] === 1 && (ret += i);
  }
  return ret;
} */

/* 
0  未访问
1  已访问
-1 已重复
*/
function sumOfUnique(nums: number[]): number {
  let ret = 0;
  const state = new Array(101).fill(0);
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (state[n] === 0) {
      ret += n;
      state[n] = 1;
    } else if (state[n] === 1) {
      ret -= n;
      state[n] = -1;
    }
  }
  return ret;
}
// @lc code=end
