/*
 * @lc app=leetcode.cn id=1389 lang=typescript
 *
 * [1389] 按既定顺序创建目标数组
 */

// @lc code=start
/* function createTargetArray(nums: number[], index: number[]): number[] {
  const n = nums.length;
  const ret: number[] = [];
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const idx = index[i];
    ret.splice(idx, 0, num);
  }
  return ret;
} */

/* 
  原地修改
*/
function createTargetArray(nums: number[], index: number[]): number[] {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    /* 
      由于题目保证数字插入位置总是存在，因此插入时只有两种情况：
      1.i === index[i]（题目要求将nums[i]插入到index[i]处，因此无需修改）
      2.i > index[i]（需要将index[i]~i之间的元素依次后移，最后在index[i]处插入nums[i]）
    */
    if (i > index[i]) {
      const num = nums[i];
      const idx = index[i];
      for (let j = i - 1; j >= idx; j--) {
        nums[j + 1] = nums[j];
      }
      nums[idx] = num;
    }
  }
  return nums;
}
// @lc code=end
