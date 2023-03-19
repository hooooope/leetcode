/*
 * @lc app=leetcode.cn id=1802 lang=typescript
 *
 * [1802] 有界数组中指定下标处的最大值
 */

// @lc code=start
// 贪心+二分查找
function maxValue(n: number, index: number, maxSum: number): number {
  const valid = (
    mid: number,
    n: number,
    index: number,
    maxSum: number
  ): boolean => {
    const leftLen = index;
    const rightLen = n - index - 1;
    return mid + cal(mid, leftLen) + cal(mid, rightLen) <= maxSum;
  };
  const cal = (big: number, length: number) => {
    // length <= big - 1 也成立
    if (length < big - 1) {
      const small = big - length;
      return Math.floor(((big - 1 + small) * length) / 2);
    } else {
      const ones = length - (big - 1);
      return Math.floor((big * (big - 1)) / 2) + ones;
    }
  };
  /* 
    使用二分查找从1～maxSum中取mid
    每次使用mid作为index处的最大值（贪心）
    然后向左向右递减一，减至1时保持不变（0不是正整数）
    判断整个数组的和是否<=maxSum（leftSum + mid + rightSum <= maxSUm）
    找到符合上述条件且最大的mid即为答案
  */
  let left = 1;
  let right = maxSum;
  while (left < right) {
    /* 
      当mid符合条件时需要保留，为避免出现死循环
      （当left=mid, right=mid+1时，mid永远不变）,需要额外加上1的偏移
    */
    const mid = (left + right + 1) >> 1;
    if (valid(mid, n, index, maxSum)) {
      // 由于mid符合条件，需要保留，因此不能赋值left = mid + 1
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
// @lc code=end
