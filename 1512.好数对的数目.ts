/*
 * @lc app=leetcode.cn id=1512 lang=typescript
 *
 * [1512] 好数对的数目
 */

import { count } from "console";

// @lc code=start
/* function numIdenticalPairs(nums: number[]): number {
  let ret = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        ret++;
      }
    }
  }
  return ret;
} */

/* function numIdenticalPairs(nums: number[]): number {
  let ret = 0;
  const counter = new Array(101).fill(0);
  for (let i = 0; i < nums.length; i++) {
    counter[nums[i]]++;
  }
  for (let i = 0; i < counter.length; i++) {
    const n = counter[i];
    if (n) {
      ret += (n * (n - 1)) >> 1;
    }
  }
  return ret;
} */

function numIdenticalPairs(nums: number[]): number {
  let ret = 0;
  const counter = new Array(101).fill(0);
  for (let i = 0; i < nums.length; i++) {
    ret += counter[nums[i]]++;
  }
  return ret;
}
// @lc code=end
