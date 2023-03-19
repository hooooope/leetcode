/*
 * @lc app=leetcode.cn id=1450 lang=typescript
 *
 * [1450] 在既定时间做作业的学生人数
 */

// @lc code=start
// 枚举法
/* function busyStudent(
  startTime: number[],
  endTime: number[],
  queryTime: number
): number {
  let ret = 0;
  const n = startTime.length;
  for (let i = 0; i < n; i++) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
      ret++;
    }
  }
  return ret;
} */

// 二分法
/*
  startTime 小于等于queryTime（保留） 大于queryTime（去除）
  endTime   小于queryTime（去除）    大于等于queryTime（保留）
  找出多少个小于等于queryTime的startTime
  找出多少个小于endTime的queryTime
*/
/* function busyStudent(
  startTime: number[],
  endTime: number[],
  queryTime: number
): number {
  startTime.sort((a, b) => a - b);
  endTime.sort((a, b) => a - b);
  const lessStart = upperbound(startTime, 0, startTime.length - 1, queryTime);
  const lessEnd = lowerbound(endTime, 0, endTime.length - 1, queryTime);
  return lessStart - lessEnd;
}
const upperbound = (arr: number[], l: number, r: number, target: number) => {
  let ret = r + 1;
  while (l <= r) {
    const mid = l + ((r - l) >> 1);
    if (arr[mid] > target) {
      ret = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return ret;
};
const lowerbound = (arr: number[], l: number, r: number, target: number) => {
  let ret = r + 1;
  while (l <= r) {
    const mid = l + ((r - l) >> 1);
    if (arr[mid] >= target) {
      ret = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return ret;
}; */

// 差分数组
/* 
  适于多次区间修改和单点查询
  当原数组a中区间[l,r]的元素全部加x时，差分数组c[l] + x，c[r + 1] - x
  当原数组a中区间[l,r]的元素全部减x时，差分数组c[l] - x，c[r + 1] + x
  差分数组：c[i] = a[i] - a[i - 1]
  a[i] = c[i] + a[i - 1] = c[i] + c[i - 1] + ... + c[1]
  对原数组a[i]进行单点查询相当于求差分数组的前缀和c[1...i]
*/
function busyStudent(
  startTime: number[],
  endTime: number[],
  queryTime: number
): number {
  let ret = 0;
  const n = startTime.length;
  const maxEndTime = Math.max(...endTime);
  const c = new Array(maxEndTime + 2).fill(0);
  if (queryTime > maxEndTime) {
    return 0;
  }
  for (let i = 0; i < n; i++) {
    c[startTime[i]]++;
    c[endTime[i] + 1]--;
  }
  for (let i = 1; i <= queryTime; i++) {
    ret += c[i];
  }
  return ret;
}
// @lc code=end
