/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
// 枚举法
/* function subarraySum(nums: number[], k: number): number {
  let ret = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j >= 0; j--) {
      sum += nums[j];
      if (sum === k) {
        ret++;
      }
    }
  }
  return ret;
} */

// 前缀和+哈希表
/* 
  方法一的瓶颈在于对每个i，我们需要枚举所有的j来判断是否符合条件
  我们定义pre[i]为[0..i]里所有数的和，则pre[i]可以由pre[i-1]递推而来，即：
    pre[i] = pre[i - 1] + nums[i]
  那么“[j..i]这个子数组和为k”这个条件我们可以转化为：
    pre[i] - pre[j - 1] === k
  简单移向可得符合条件的下标j需要满足：
    pre[j-1] === pre[i] - k
*/
function subarraySum(nums: number[], k: number): number {
  let ret = 0;
  // 由于pre[i]的计算只与前一项的答案有关，因此我们可以不用建立pre数组，直接用pre变量来记录pre[i-1]的答案即可
  let pre = 0;
  const map = new Map<number, number>();
  map.set(0, 1);
  // 从左往右更新计算的时候已经保证了map.get(pre[i] - k)里记录的pre[j]的下标范围是0<=j<i
  for (const num of nums) {
    pre += num;
    if (map.has(pre - k)) {
      ret += map.get(pre - k)!;
    }
    if (map.has(pre)) {
      map.set(pre, map.get(pre)! + 1);
    } else {
      map.set(pre, 1);
    }
  }
  return ret;
}
// @lc code=end
