/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
// 反向查找出发位置
function jump(nums: number[]): number {
  let ret = 0;
  let position = nums.length - 1;
  while (position > 0) {
    for (let i = 0; i < position; i++) {
      if (i + nums[i] >= position) {
        position = i;
        ret++;
        break;
      }
    }
  }
  return ret;
}

// 正向查找可到达的最大位置
/* function jump(nums: number[]): number {
  let ret = 0;
  let pre = 0;
  let last = 0;
  const n = nums.length;
  // 由于生成的测试用例可以到达nums[n - 1]
  // 因此循环条件不需要设置为i < n
  for (let i = 0; i < n - 1; i++) {
    last = Math.max(last, i + nums[i]);
    if (i === pre) {
      ret++;
      pre = last;
    }
  }
  return ret;
} */
// @lc code=end
