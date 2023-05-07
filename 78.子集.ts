/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
// 递归
/* function subsets(nums: number[]): number[][] {
  const ret: number[][] = [];
  const buffer: number[] = [];
  const process = (index: number) => {
    if (index === nums.length) {
      ret.push([...buffer]);
      return;
    }
    buffer.push(nums[index]);
    process(index + 1);
    buffer.pop();
    process(index + 1);
  };
  process(0);
  return ret;
} */

// 迭代
function subsets(nums: number[]): number[][] {
  const ret: number[][] = [];
  const n = nums.length;
  for (let mask = 0; mask < 1 << n; mask++) {
    const t: number[] = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        t.push(nums[i]);
      }
    }
    ret.push(t);
  }
  return ret;
}
// @lc code=end
