/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
// 哈希表
function longestConsecutive(nums: number[]): number {
  let ret = 0;
  const set = new Set<number>();
  for (const num of nums) {
    set.add(num);
  }
  for (const num of nums) {
    // 我们考虑枚举数组中的每个数x，考虑以其为起点，不断尝试匹配x+1,x+2,...是否存在
    // 假设最长匹配到了x+y，那么以x为起点的最长连续序列即为x,x+1,x+2,...,x+y，其长度为y+1，我们不断枚举并更新答案即可
    // 但仔细分析这个过程，我们会发现其中执行了很多不必要的枚举
    // 如果已知有一个x,x+1,x+2,...,x+y的连续序列
    // 而我们却重新从x+1,x+2或者x+y处开始尝试匹配
    // 那么得到的结果肯定不会优于枚举x为起点的答案
    // 因此我们在外层循环的时候碰到这种情况跳过即可
    // 由于我们要枚举的数x一定是在数组中不存在前驱x-1的
    // 不然按照上面的分析我们会从x-1开始尝试匹配
    // 因此我们每次在哈希表中检查是否存在x-1即能判断是否需要跳过了
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (set.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }
      ret = Math.max(ret, currentStreak);
    }
  }
  return ret;
}
// @lc code=end
