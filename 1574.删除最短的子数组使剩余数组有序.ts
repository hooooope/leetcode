/*
 * @lc app=leetcode.cn id=1574 lang=typescript
 *
 * [1574] 删除最短的子数组使剩余数组有序
 */

// @lc code=start
// 双指针
function findLengthOfShortestSubarray(arr: number[]): number {
  const n = arr.length;
  let tail = n - 1;
  while (tail > 0 && arr[tail - 1] <= arr[tail]) {
    tail--;
  }
  // 数组已经是非递减的了，不需要删除任何元素
  if (tail === 0) {
    return 0;
  }
  // 初始化答案为tail前面的元素个数
  let ret = tail;
  for (let head = 0; head < n; head++) {
    while (tail < n && arr[head] > arr[tail]) {
      tail++;
    }
    ret = Math.min(ret, tail - head - 1);
    // 头指针的下一个元素是递减的，直接跳出循环
    if (head + 1 < n && arr[head] > arr[head + 1]) {
      break;
    }
  }
  return ret;
}
// @lc code=end
