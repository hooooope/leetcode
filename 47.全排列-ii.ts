/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  const swap = (nums: number[], index1: number, index2: number) => {
    const temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
  };
  const process = (nums: number[], index: number, ret: number[][]) => {
    if (index === nums.length) {
      ret.push([...nums]);
    } else {
      const visited = new Array(10).fill(false);
      for (let i = index; i < nums.length; i++) {
        if (!visited[nums[i]]) {
          visited[nums[i]] = true;
          swap(nums, index, i);
          process(nums, index + 1, ret);
          swap(nums, index, i);
        }
      }
    }
  };
  const ret: number[][] = [];
  process(nums, 0, ret);
  return ret;
}

/* function permuteUnique(nums: number[]): number[][] {
  const backtrack = (index: number, perm: number[]) => {
    if (index === nums.length) {
      ret.push([...perm]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        // visited[i]表示当前数字已在其他位置上使用
        // i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]表示当前位置填入的数字为重复数字
        if (
          visited[i] ||
          (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])
        ) {
          continue;
        }
        perm.push(nums[i]);
        visited[i] = true;
        backtrack(index + 1, perm);
        perm.pop();
        visited[i] = false;
      }
    }
  };
  const ret: number[][] = [];
  const visited = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);
  backtrack(0, []);
  return ret;
} */
// @lc code=end
