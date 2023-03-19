/*
 * @lc app=leetcode.cn id=1664 lang=typescript
 *
 * [1664] 生成平衡数组的方案数
 */

// @lc code=start
/* 
  preOdd = [0, 0, 1]
  preEven = [0, 1, 1]
  sufOdd = [1, 0, 0]
  sufEven = [1, 1, 0]
*/
function waysToMakeFair(nums: number[]): number {
  const n = nums.length;
  const preOdd = new Array(n).fill(0);
  const preEven = new Array(n).fill(0);
  const sufOdd = new Array(n).fill(0);
  const sufEven = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    if (i % 2) {
      sufOdd[0] += nums[i];
    } else {
      sufEven[0] += nums[i];
    }
  }
  for (let i = 1; i < n; i++) {
    if (i % 2) {
      preOdd[i] = preOdd[i - 1];
      preEven[i] = preEven[i - 1] + nums[i - 1];
      sufOdd[i] = sufOdd[i - 1] - nums[i];
      sufEven[i] = sufEven[i - 1];
    } else {
      preOdd[i] = preOdd[i - 1] + nums[i - 1];
      preEven[i] = preEven[i - 1];
      sufOdd[i] = sufOdd[i - 1];
      sufEven[i] = sufEven[i - 1] - nums[i];
    }
  }
  let ret = 0;
  for (let i = 0; i < n; i++) {
    if (preOdd[i] + sufEven[i] === preEven[i] + sufOdd[i]) {
      ret++;
    }
  }
  return ret;
}

// 使用滚动数组进行空间优化
/* function waysToMakeFair(nums: number[]): number {
  let odd1 = 0,
    even1 = 0; // nums[i]前面的奇/偶数下标元素和
  let odd2 = 0,
    even2 = 0; // nums[i]后面的奇/偶数下标元素和
  for (let i = 0; i < nums.length; i++) {
    if (i % 2) {
      odd2 += nums[i];
    } else {
      even2 += nums[i];
    }
  }
  let ret = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2) {
      odd2 -= nums[i];
    } else {
      even2 -= nums[i];
    }
    if (odd1 + even2 === odd2 + even1) {
      ret++;
    }
    if (i % 2) {
      odd1 += nums[i];
    } else {
      even1 += nums[i];
    }
  }
  return ret;
} */
// @lc code=end
