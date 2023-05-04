/*
 * @lc app=leetcode.cn id=2106 lang=typescript
 *
 * [2106] 摘水果
 */

// @lc code=start
/* 
  二分查找
  由于题目中的水果位置已经是升序排列，假设此时我们知道在x轴上的移动区间[left,right]，则可利用二分查找很快计算出区间[left,right]范围内摘掉水果的数目
*/
/* function maxTotalFruits(
  fruits: number[][],
  startPos: number,
  k: number
): number {
  const lowerBound = (
    arr: number[],
    left: number,
    right: number,
    val: number
  ) => {
    let ret = right + 1;
    while (left <= right) {
      const mid = ((right - left) >> 1) + left;
      if (arr[mid] >= val) {
        ret = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return ret;
  };
  const upperBound = (
    arr: number[],
    left: number,
    right: number,
    val: number
  ) => {
    let ret = right + 1;
    while (left <= right) {
      const mid = ((right - left) >> 1) + left;
      if (arr[mid] <= val) {
        left = mid + 1;
      } else {
        ret = mid;
        right = mid - 1;
      }
    }
    return ret;
  };
  const n = fruits.length;
  const sum: number[] = new Array(n + 1).fill(0);
  const indices: number[] = new Array(n).fill(0);
  sum[0] = 0;
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + fruits[i][1];
    indices[i] = fruits[i][0];
  }
  // 实际移动过程中肯定优先遵循贪心原则，因为这样每个位置的水果只能摘取一次，因此尽可能的移动更远，实际移动方法如下：
  // 要么一直往一个方向移动k步；要么先往一个方向移动x步，然后再反方向移动k-x步；
  // 实际当x=0时，则一直往一个方向移动k步；
  // 根据以上分析，由于有左右两个方向，我们通过不断枚举x，此时x=[0,k/2]，即可求出其移动的区间
  let ret = 0;
  for (let x = 0; x <= Math.floor(k / 2); x++) {
    // 向左走x步，再向右走k-x步
    // 此时的移动区间范围[startPos-x, startPos+k-2x]
    let left = startPos - x;
    let right = startPos + k - 2 * x;
    let start = lowerBound(indices, 0, n - 1, left);
    let end = upperBound(indices, 0, n - 1, right);
    ret = Math.max(ret, sum[end] - sum[start]);
    // 向右走x步，再向左走k-x步
    // 此时的移动区间范围[startPos+2x-k, startPos+x]
    left = startPos - (k - 2 * x);
    right = startPos + x;
    start = lowerBound(indices, 0, n - 1, left);
    end = upperBound(indices, 0, n - 1, right);
    ret = Math.max(ret, sum[end] - sum[start]);
  }
  return ret;
} */

// 滑动窗口
/* 
  假设已知区间[left,right]，现在从起点startPos出发，至少需要走多少步才能遍历该区间，实际我们可以看到分为以下三种情况：
  1.当startPos>right时，即区间在startPos的左边，此时应该从起点开始一直向左移动，直到left为止，此时至少需要移动startPos-left步
  2.当startPos<left时，即区间在startPos的右边，此时应该从起点开始一直向右移动，直到right为止，此时至少需要移动right-startPos步
  3.当left<=startPos<=right时，即startPos刚好在区间范围内，此时有两种选择：
  3.1.从起点开始一直向左移动，直到left为止，然后再向右移动到right，此时需要移动startPos-left+right-left步
  3.2.从起点开始一直向右移动，直到right为止，然后再向左移动到left，此时最少需要移动right-startPos+right-left步
  3.3.根据两种情形，最少需要移动right-left+min(|right-startPos|,|startPos-left|)步
  当然上述所有的情形都可以合并为一个计算公式，即实际最好需要移动right-left+min(|right-startPos|,|startPos-left|)步，才能覆盖区间[left,right]
*/
function maxTotalFruits(
  fruits: number[][],
  startPos: number,
  k: number
): number {
  // step(fruits,startPos,left,right)表示从起点startPos出发可以覆盖区间[fruits[left][0], fruits[right][0]]的最少移动步数
  const step = (
    fruits: number[][],
    startPos: number,
    left: number,
    right: number
  ) => {
    return (
      fruits[right][0] -
      fruits[left][0] +
      Math.min(
        Math.abs(startPos - fruits[left][0]),
        Math.abs(startPos - fruits[right][0])
      )
    );
  };
  let ret = 0;
  let sum = 0;
  let left = 0;
  let right = 0;
  const n = fruits.length;
  while (right < n) {
    sum += fruits[right][1];
    // 随着left的增大，step(fruits, startPos, left, right)可能会减小，但一定不会继续增大
    // 利用这个特性我们即可利用滑动窗口来遍历所有符合要求的最大区间，然后找到区间内的覆盖水果的最大值即可
    while (left <= right && step(fruits, startPos, left, right) > k) {
      sum -= fruits[left][1];
      left++;
    }
    ret = Math.max(ret, sum);
    right++;
  }
  return ret;
}
// @lc code=end
