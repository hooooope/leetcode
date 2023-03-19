/*
 * @lc app=leetcode.cn id=1470 lang=typescript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
/* function shuffle(nums: number[], n: number): number[] {
  for (let i = 0; i < 2 * n; i++) {
    const j = i < n ? i * 2 : (i - n) * 2 + 1;
    nums[j] |= (nums[i] & 1023) << 10;
  }
  for (let i = 0; i < 2 * n; i++) {
    nums[i] >>= 10;
  }
  return nums;
} */

/* function shuffle(nums: number[], n: number): number[] {
  for (let i = 0; i < n; i++) {
    const x = i * 2;
    const y = x + 1;
    nums[x] |= (nums[i] & 1023) << 10;
    nums[y] |= (nums[i + n] & 1023) << 10;
  }
  for (let i = 0; i < 2 * n; i++) {
    nums[i] >>= 10;
  }
  return nums;
} */

function shuffle(nums: number[], n: number): number[] {
  for (let i = 0; i < 2 * n; i++) {
    let j = i;
    while (nums[i] > 0) {
      j = j < n ? 2 * j : 2 * (j - n) + 1;
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = -temp;
    }
  }
  for (let i = 0; i < 2 * n; i++) {
    nums[i] = -nums[i];
  }
  return nums;
}
// @lc code=end
