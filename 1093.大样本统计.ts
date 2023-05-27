/*
 * @lc app=leetcode.cn id=1093 lang=typescript
 *
 * [1093] 大样本统计
 */

// @lc code=start
function sampleStats(count: number[]): number[] {
  let minimum = 256;
  let maximum = 0;
  let mean = 0;
  let median = 0;
  let mode = 0;

  const total = count.reduce((a, b) => a + b);
  const left = (total + 1) >> 1;
  const right = (total + 2) >> 1;
  let sum = 0;
  let cnt = 0;
  let maxFreq = 0;

  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0) {
      if (minimum === 256) {
        minimum = i;
      }
      maximum = i;
    }
    sum += count[i] * i;
    if (cnt < left && cnt + count[i] >= left) {
      median += i;
    }
    if (cnt < right && cnt + count[i] >= right) {
      median += i;
    }
    cnt += count[i];
    if (count[i] > maxFreq) {
      maxFreq = count[i];
      mode = i;
    }
  }
  mean = sum / total;
  median /= 2;
  return [minimum, maximum, mean, median, mode];
}
// @lc code=end
