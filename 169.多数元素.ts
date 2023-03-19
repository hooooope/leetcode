/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */
// @lc code=start
/* function majorityElement(nums: number[]): number {
  let ret = 0;
  let maxCount = 0;
  let tmpCount = 0;
  const map = new Map<number, number>();
  for (const n of nums) {
    if (!map.has(n)) {
      tmpCount = 1;
    } else {
      tmpCount = map.get(n)! + 1;
    }
    if (tmpCount > maxCount) {
      ret = n;
      maxCount = tmpCount;
    }
    map.set(n, tmpCount);
  }
  return ret;
} */

// 排序法
// 由于众数的数量超过n/2，故索引为n/2的数字一定是众数
/* function majorityElement(nums: number[]): number {
  return nums.sort()[nums.length >> 1];
} */

// 随机法
/* function majorityElement(nums: number[]): number {
  while (true) {
    let count = 0;
    const candidate = nums[Math.floor(Math.random() * nums.length)];
    for (const n of nums) {
      if (n === candidate) {
        count++;
      }
    }
    if (count > nums.length >> 1) {
      return candidate;
    }
  }
} */

// 分治法
/* 
  将nums划分为左右两部分，设左边的众数为a，右边的众数为b
  若a===b，则nums的众数为a
  若a!==b，则nums的众数是其中之一，遍历从左到右的部分将其找出
*/
/* function majorityElement(nums: number[]): number {
  return majorityElementRec(nums, 0, nums.length - 1);
}
function majorityElementRec(nums: number[], lo: number, hi: number): number {
  if (lo === hi) {
    return nums[lo];
  }
  const mid = lo + ((hi - lo) >> 1);
  const left = majorityElementRec(nums, lo, mid);
  const right = majorityElementRec(nums, mid + 1, hi);
  if (left === right) {
    return left;
  }
  const leftCount = countInRange(nums, left, lo, hi);
  const rightCount = countInRange(nums, right, lo, hi);
  return leftCount > rightCount ? left : right;
}
function countInRange(
  nums: number[],
  num: number,
  lo: number,
  hi: number
): number {
  let count = 0;
  for (let i = lo; i <= hi; i++) {
    if (nums[i] === num) {
      count++;
    }
  }
  return count;
} */

// Boyer-Moore 投票算法
/* 
  如果候选人不是maj，则maj会和其他非候选人一起反对候选人，所以候选人一定会下台（当maj===0时发生换届选举）
  如果候选人是maj，则maj会支持自己，其他非候选人会反对，但因为maj自身票数超过一半，所以maj一定会成功当选
*/
function majorityElement(nums: number[]): number {
  let candidate = 0;
  let count = 0;
  for (const n of nums) {
    if (count === 0) {
      candidate = n;
    }
    count += n === candidate ? 1 : -1;
  }
  return candidate;
}
// @lc code=end
