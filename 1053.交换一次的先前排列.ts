/*
 * @lc app=leetcode.cn id=1053 lang=typescript
 *
 * [1053] 交换一次的先前排列
 */

// @lc code=start
// 贪心
function prevPermOpt1(arr: number[]): number[] {
  // 记数组arr的长度为n，对于0<=i<j<n，如果交换arr[i]和arr[j]后得到的新数组按字典序排列比原数组小，显然有arr[i]>arr[j]成立
  // 因此符合题意要求的交换使得数组arr在下标i处的元素变小
  // 那么为了得到按字典序排列小于原数组的最大新数组，尽可能地保持前面的元素不变⬆是最优的，即让i最大化
  const n = arr.length;
  for (let i = n - 2; i >= 0; i--) {
    // 如何最大化i
    // 我们可以从大到小枚举i∈[0,n-2]，然后枚举j∈[i+1,n)
    // 如果存在j使arr[i]>arr[j]成立，那么说明当前枚举的i是最大化的
    // 这里只需要判断arr[i]>arr[i+1]是否成立即可，因为后面的元素是符合非递减的，即arr[i+1]是arr[i]后面的最小元素
    if (arr[i] > arr[i + 1]) {
      let j = n - 1;
      // i最大化后，j∈[i+1,n)应该怎么选择
      // 显然在满足arr[j]<arr[i]的条件下，取最大的arr[j]是最优的
      // 但是题目并没有元素不重复的要求，最大的arr[j]可能有重复值，那么选择其中下标最小的arr[j]是最优的
      while (arr[j] >= arr[i] || arr[j] === arr[j - 1]) {
        j--;
      }
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      break;
    }
  }
  return arr;
}
// @lc code=end
