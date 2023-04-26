/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
// 左右乘积列表
/* function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  // l和r分别表示左右两侧的乘积列表
  const l: number[] = new Array(n);
  const r: number[] = new Array(n);
  const ret: number[] = new Array(n);
  // l[i]为索引i左侧所有元素的乘积
  // 对于索引为0的元素，因为左侧没有元素，所以l[0]=1
  l[0] = 1;
  for (let i = 1; i < n; i++) {
    l[i] = l[i - 1] * nums[i - 1];
  }
  // r[i]为索引i右侧所有元素的乘积
  // 对于索引为length-1的元素，因为右侧没有元素，所以r[length-1]=1
  r[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    r[i] = r[i + 1] * nums[i + 1];
  }
  // 对于索引i，除nums[i]之外其余各元素的乘积就是左侧所有元素的乘积乘以右侧所有元素的乘积
  for (let i = 0; i < n; i++) {
    ret[i] = l[i] * r[i];
  }
  return ret;
} */

// 空间复杂度O(1)
/* 
  由于输出数组不算在空间复杂度内，那么我们可以将l或r数组用输出数组来计算
  先把输出数组当作l数组来计算，然后再动态构造r数组得到结果
*/
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const ret: number[] = new Array(n);
  // ret[i]表示索引i左侧所有元素的乘积
  // 因为索引为0的元素左侧没有元素，所以ret[0]=1
  ret[0] = 1;
  for (let i = 1; i < n; i++) {
    ret[i] = ret[i - 1] * nums[i - 1];
  }
  // r为右侧所有元素的乘积
  // 刚开始右侧没有元素，所以r=1
  let r = 1;
  for (let i = n - 1; i >= 0; i--) {
    // 对于索引i，左侧的乘积为ret[i]，右侧的乘积为r
    ret[i] = ret[i] * r;
    // r需要包含右边所有的乘积，所以计算下一个结果时需要将当前值乘到r上
    r *= nums[i];
  }
  return ret;
}
// @lc code=end
