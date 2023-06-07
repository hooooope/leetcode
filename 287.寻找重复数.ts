/*
 * @lc app=leetcode.cn id=287 lang=typescript
 *
 * [287] 寻找重复数
 */

// @lc code=start
// 哈希表
/* function findDuplicate(nums: number[]): number {
  const set = new Set<number>();
  for (const num of nums) {
    if (set.has(num)) {
      return num;
    }
    set.add(num);
  }
  return -1;
} */

// 二分查找
/* function findDuplicate(nums: number[]): number {
  const n = nums.length;
  let ret = -1;
  let l = 1;
  let r = n - 1;
  while (l <= r) {
    const m = (l + r) >> 1;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      cnt += nums[i] <= m ? 1 : 0;
    }
    if (cnt <= m) {
      l = m + 1;
    } else {
      r = m - 1;
      ret = m;
    }
  }
  return ret;
} */

// 快慢指针
function findDuplicate(nums: number[]): number {
  let slow = 0;
  let fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}
// @lc code=end
