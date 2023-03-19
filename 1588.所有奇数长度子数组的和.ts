/*
 * @lc app=leetcode.cn id=1588 lang=typescript
 *
 * [1588] 所有奇数长度子数组的和
 */

// @lc code=start
/* function sumOddLengthSubarrays(arr: number[]): number {
  let ret = 0;
  for (let i = 1; i <= arr.length; i += 2) {
    for (let j = 0; i + j <= arr.length; j++) {
      for (let k = j; k < i + j; k++) {
        ret += arr[k];
      }
    }
  }
  return ret;
} */

/* function sumOddLengthSubarrays(arr: number[]): number {
  let ret = 0;
  const n = arr.length;
  const prefixSum: number[] = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + arr[i];
  }
  for (let start = 0; start < n; start++) {
    for (let length = 1; start + length <= n; length += 2) {
      const end = start + length - 1;
      ret += prefixSum[end + 1] - prefixSum[start];
    }
  }
  return ret;
} */

function sumOddLengthSubarrays(arr: number[]): number {
  let sum = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const leftCount = i,
      rightCount = n - i - 1;
    const leftOdd = Math.floor((leftCount + 1) / 2);
    const rightOdd = Math.floor((rightCount + 1) / 2);
    const leftEven = Math.floor(leftCount / 2) + 1;
    const rightEven = Math.floor(rightCount / 2) + 1;
    sum += arr[i] * (leftOdd * rightOdd + leftEven * rightEven);
  }
  return sum;
}
// @lc code=end
