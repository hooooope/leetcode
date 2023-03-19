/*
 * @lc app=leetcode.cn id=1856 lang=typescript
 *
 * [1856] 子数组最小乘积的最大值
 */

// @lc code=start
function maxSumMinProduct(nums: number[]): bigint {
  const n = nums.length;
  // left[i]表示nums[i]左侧"严格小于"nums[i]的下标 + 1
  // 设置元素不存在时默认值为0
  const left: number[] = new Array(n).fill(0);
  // right[i]表示nums[i]右侧"小于等于"nums[i]的下标 - 1
  // 设置元素不存在时默认值为n-1
  const right: number[] = new Array(n).fill(n - 1);
  // 维护一个按num元素单调递增的单调栈，存储对应的元素索引
  const stack: number[] = [];
  for (let i = 0; i < n; i++) {
    // 当前元素小于等于栈顶元素，
    // 为了维持单调性，将栈中大于等于当前元素的索引弹出，
    // 并且当前索引为右侧最近的小于等于所有弹出元素的索引
    while (stack.length && nums[i] <= nums[stack[stack.length - 1]]) {
      right[stack[stack.length - 1]] = i - 1;
      stack.pop();
    }
    // 由于栈中大于等于当前元素的索引已经弹出，
    // 若单调栈中仍存在元素，则栈顶元素为左侧最近的小于当前元素的索引
    if (stack.length) {
      left[i] = stack[stack.length - 1] + 1;
    }
    stack.push(i);
  }
  // 前缀和
  // pre[i]表示nums[0...i-1]的前缀和
  const pre = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    pre[i] = pre[i - 1] + nums[i - 1];
  }
  let best = 0n;
  for (let i = 0; i < n; i++) {
    const current = BigInt(pre[right[i] + 1] - pre[left[i]]) * BigInt(nums[i]);
    if (current > best) {
      best = current;
    }
  }
  return best % 1000000007n;
}
// @lc code=end
