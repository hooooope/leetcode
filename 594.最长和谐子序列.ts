/*
 * @lc app=leetcode.cn id=594 lang=typescript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/* 
  将数组按升序排序，
  依次找到相邻两个连续相同元素的子序列，
  检查这两个子序列的元素之差是否为1
  example: x, x, x, x+1, x+1, x+1
  ret = count(x) + count(x+1) = 6
*/
/* function findLHS(nums: number[]): number {
  let ret = 0;
  let begin = 0;
  nums.sort((a, b) => a - b);
  for (let end = 1; end < nums.length; end++) {
    while (nums[end] - nums[begin] > 1) {
      begin++;
    }
    // 此处只有两种情况：
    // nums[end] - nums[begin] = 1
    // nums[end] - nums[begin] = 0
    // nums[end] - nums[begin] < 0（因为数组已按升序排序，不可能出现这种情况）
    if (nums[end] - nums[begin] === 1) {
      ret = Math.max(ret, end - begin + 1);
    }
  }
  return ret;
} */

function findLHS(nums: number[]): number {
  let ret = 0;
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  for (const key of map.keys()) {
    if (map.has(key + 1)) {
      ret = Math.max(ret, map.get(key)! + map.get(key + 1)!);
    }
  }
  return ret;
}
// @lc code=end
