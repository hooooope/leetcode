/*
 * @lc app=leetcode.cn id=517 lang=typescript
 *
 * [517] 超级洗衣机
 */

import { argv } from "process";

// @lc code=start
/* function findMinMoves(machines: number[]): number {
  let sum = 0;
  const size = machines.length;
  for (const clothes of machines) {
    sum += clothes;
  }
  if (sum % size !== 0) {
    return -1;
  }
  let ret = 0;
  let leftSum = 0;
  const avg = sum / size;
  for (let i = 0; i < size; i++) {
    const leftRest = leftSum - i * avg;
    const rightRest = sum - leftSum - machines[i] - (size - i - 1) * avg;
    if (leftRest < 0 && rightRest < 0) {
      ret = Math.max(ret, Math.abs(leftRest) + Math.abs(rightRest));
    } else {
      ret = Math.max(ret, Math.max(leftRest, rightRest));
    }
    leftSum += machines[i];
  }
  return ret;
} */

// 贪心
function findMinMoves(machines: number[]): number {
  let total = 0;
  const size = machines.length;
  for (const clothes of machines) {
    total += clothes;
  }
  if (total % size !== 0) {
    return -1;
  }
  let ret = 0;
  let sum = 0;
  const avg = total / size;
  for (let clothes of machines) {
    // 当前位置多/少于两侧位置的衣服数量
    clothes -= avg;
    // 当前位置及左侧位置多/少于右侧位置的衣服数量
    sum += clothes;
    ret = Math.max(ret, clothes, Math.abs(sum));
  }
  return ret;
}
// @lc code=end
