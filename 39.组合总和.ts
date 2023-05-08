/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
/* function combinationSum(candidates: number[], target: number): number[][] {
  const ret: number[][] = [];
  const buffer: number[] = [];
  const process = (sum: number, index: number) => {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      ret.push([...buffer]);
      return;
    }
    for (let i = 0; sum + candidates[index] * i <= target; i++) {
      for (let j = 0; j < i; j++) {
        buffer.push(candidates[index]);
      }
      process(sum + candidates[index] * i, index + 1);
      for (let j = 0; j < i; j++) {
        buffer.pop();
      }
    }
  };
  process(0, 0);
  return ret;
} */

function combinationSum(candidates: number[], target: number): number[][] {
  const ret: number[][] = [];
  const buffer: number[] = [];
  const process = (sum: number, index: number) => {
    if (sum === target) {
      ret.push([...buffer]);
      return;
    }
    if (sum > target || index === candidates.length) {
      return;
    }
    process(sum, index + 1);
    buffer.push(candidates[index]);
    process(sum + candidates[index], index);
    buffer.pop();
  };
  process(0, 0);
  return ret;
}
// @lc code=end
