/*
 * @lc app=leetcode.cn id=2542 lang=typescript
 *
 * [2542] 最大子序列的分数
 */

// @lc code=start
// 小根堆
function maxScore(nums1: number[], nums2: number[], k: number): number {
  let ret = 0;
  const n = nums1.length;
  // indices为nums2按降序排列后的下标
  const indices: number[] = new Array(n).fill(0).map((_, i) => i);
  indices.sort((a, b) => nums2[b] - nums2[a]);
  let sum = 0;
  const queue = new MinPriorityQueue();
  // num1的前k-1个值的和
  for (let i = 0; i < k - 1; i++) {
    const index = indices[i];
    sum += nums1[index];
    queue.enqueue(nums1[index], nums1[index]);
  }
  // 从第k个元素（下表k-1）开始计算
  for (let i = k - 1; i < n; i++) {
    const index = indices[i];
    // 加上num1[index]构成k个数
    sum += nums1[index];
    queue.enqueue(nums1[index], nums1[index]);
    // 比较
    ret = Math.max(ret, sum * nums2[index]);
    // 删除k个数中最小的数
    sum -= queue.dequeue()["element"];
  }
  return ret;
}
// @lc code=end
