/*
 * @lc app=leetcode.cn id=2488 lang=typescript
 *
 * [2488] 统计中位数为 K 的子数组
 */

// @lc code=start
function countSubarrays(nums: number[], k: number): number {
  const sign = (num: number) => {
    if (num === 0) {
      return 0;
    }
    return num > 0 ? 1 : -1;
  };
  const n = nums.length;
  // 寻找k的下标
  let kIndex = -1;
  for (let i = 0; i < n; i++) {
    if (nums[i] === k) {
      kIndex = i;
      break;
    }
  }
  let ret = 0;
  // 记录当前前缀和
  let sum = 0;
  // 统计每个前缀和出现的次数
  const counts = new Map();
  // 空前缀和为0，出现1次
  counts.set(0, 1);
  for (let i = 0; i < n; i++) {
    // 将大于k的数字视为1，小于k的数字视为-1，等于k的数字视为0，记录前缀和
    sum += sign(nums[i] - k);
    if (i < kIndex) {
      // i < kIndex，则下标i + 1可以作为中位数等于k的非空子数组的开始下标
      counts.set(sum, (counts.get(sum) ?? 0) + 1);
    } else {
      // i >= kIndex，则下标i可以作为中位数等于k的非空子数组的结束下标
      // 从哈希表中获取前缀和sum的出现次数prev0与前缀和sum - 1的出现次数prev1
      // 因为子数组中大于k的元素个数与小于k的元素个数之差为0或1
      const prev0 = counts.get(sum) ?? 0;
      const prev1 = counts.get(sum - 1) ?? 0;
      ret += prev0 + prev1;
    }
  }
  return ret;
}
// @lc code=end
