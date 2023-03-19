/*
 * @lc app=leetcode.cn id=1295 lang=typescript
 *
 * [1295] 统计位数为偶数的数字
 */

// @lc code=start
/* function findNumbers(nums: number[]): number {
  let ret = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let x = 0;
    while (nums[i]) {
      nums[i] = Math.floor(nums[i] / 10);
      x++;
    }
    x % 2 === 0 && ret++;
  }
  return ret;
} */

/* function findNumbers(nums: number[]): number {
  let ret = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    String(nums[i]).length % 2 === 0 && ret++;
  }
  return ret;
} */

/* 
  log10(x)+1 = x的位数（向下取整）
  log10(100) = 2
  log10(500) = 2.69...
  log10(1000) = 3
*/
function findNumbers(nums: number[]): number {
  let ret = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.log10(nums[i]) + 1);
    x % 2 === 0 && ret++;
  }
  return ret;
}
// @lc code=end
