/*
 * @lc app=leetcode.cn id=1005 lang=typescript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
function largestSumAfterKNegations(nums: number[], k: number): number {
  const freq = new Map<number, number>();
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }
  let ret = nums.reduce((a, b) => a + b, 0);
  for (let i = -100; i < 0; i++) {
    if (freq.has(i)) {
      // 反转ops个i
      const ops = Math.min(k, freq.get(i)!);
      // 每反转一个i，ret增加 -i*2
      ret += -i * ops * 2;
      // 更新i的频次
      freq.set(i, freq.get(i)! - ops);
      // 更新-i的频次
      freq.set(-i, (freq.get(-i) ?? 0) + ops);
      // 更新剩余反转次数
      k -= ops;
      if (k === 0) {
        break;
      }
    }
  }
  // 1.剩余反转次数
  // 2.反转次数为奇数（必须反转一个数字）
  // 3.数组中不存在0
  // 满足以上三个条件，则反转数组中的最小正数
  if (k > 0 && k % 2 === 1 && !freq.has(0)) {
    for (let i = 1; i <= 100; i++) {
      if (freq.has(i)) {
        ret += -i * 2;
        break;
      }
    }
  }
  return ret;
}
// @lc code=end
