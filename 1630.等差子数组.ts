/*
 * @lc app=leetcode.cn id=1630 lang=typescript
 *
 * [1630] 等差子数组
 */

// @lc code=start
function checkArithmeticSubarrays(
  nums: number[],
  l: number[],
  r: number[]
): boolean[] {
  const n = l.length;
  const ret: boolean[] = [];
  for (let i = 0; i < n; i++) {
    const left = l[i];
    const right = r[i];
    let minv = nums[left];
    let maxv = nums[left];
    for (let j = left + 1; j <= right; j++) {
      minv = Math.min(minv, nums[j]);
      maxv = Math.max(maxv, nums[j]);
    }
    if (minv === maxv) {
      ret.push(true);
      continue;
    }
    // 公差 = (末项 - 首项) / (长度 - 1)
    if ((maxv - minv) % (right - left) !== 0) {
      ret.push(false);
      continue;
    }
    const d = (maxv - minv) / (right - left);
    let flag = true;
    // 当我们遍历完整个子数组后，第0,1,2,...,l-1项应该均出现了一次
    const seen = new Array(right - left + 1).fill(0);
    for (let j = left; j <= right; j++) {
      if ((nums[j] - minv) % d !== 0) {
        flag = false;
        break;
      }
      const t = (nums[j] - minv) / d;
      if (seen[t]) {
        flag = false;
        break;
      }
      seen[t] = true;
    }
    ret.push(flag);
  }
  return ret;
}
// @lc code=end
