/*
 * @lc app=leetcode.cn id=1010 lang=typescript
 *
 * [1010] 总持续时间可被 60 整除的歌曲
 */

// @lc code=start
// 暴力法
/* function numPairsDivisibleBy60(time: number[]): number {
  let ret = 0;
  const n = time.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((time[i] + time[j]) % 60 === 0) {
        ret++;
      }
    }
  }
  return ret;
} */

// 组合数学
/* function numPairsDivisibleBy60(time: number[]): number {
  let ret = 0;
  const n = time.length;
  const cnt: number[] = new Array(60).fill(0);
  for (let i = 0; i < n; i++) {
    cnt[time[i] % 60]++;
  }
  for (let i = 1; i < 30; i++) {
    ret += cnt[i] * cnt[60 - i];
  }
  ret += (cnt[0] * (cnt[0] - 1)) / 2 + (cnt[30] * (cnt[30] - 1)) / 2;
  return ret;
} */

function numPairsDivisibleBy60(time: number[]): number {
  let ret = 0;
  const n = time.length;
  const cnt: number[] = new Array(60).fill(0);
  for (let i = 0; i < n; i++) {
    const current = time[i] % 60;
    const target = (60 - current) % 60;
    ret += cnt[target];
    cnt[current]++;
  }
  return ret;
}
// @lc code=end
