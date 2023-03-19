/*
 * @lc app=leetcode.cn id=228 lang=typescript
 *
 * [228] 汇总区间
 */

// @lc code=start
/* function summaryRanges(nums: number[]): string[] {
  const ret: string[] = [];
  let start = nums[0];
  for (let i = 1; i <= nums.length; i++) {
    const cur = nums[i];
    const pre = nums[i - 1];
    if (cur !== pre + 1) {
      if (start === pre) {
        ret.push(`${start}`);
      } else {
        ret.push(`${start}->${nums[i - 1]}`);
      }
      start = cur;
    }
  }
  return ret;
} */

function summaryRanges(nums: number[]): string[] {
  const ret: string[] = [];
  let i = 0;
  const n = nums.length;
  while (i < n) {
    const low = nums[i];
    i++;
    while (i < n && nums[i] === nums[i - 1] + 1) {
      i++;
    }
    const high = nums[i - 1];
    if (low === high) {
      ret.push(`${low}`);
    } else {
      ret.push(`${low}->${high}`);
    }
  }
  return ret;
}
// @lc code=end
