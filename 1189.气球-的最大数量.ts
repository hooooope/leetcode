/*
 * @lc app=leetcode.cn id=1189 lang=typescript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
/* function maxNumberOfBalloons(text: string): number {
  let ret = Number.MAX_VALUE;
  const textMap = new Map<string, number>();
  const balloonMap = new Map<string, number>();
  for (const c of text) {
    textMap.set(c, (textMap.get(c) ?? 0) + 1);
  }
  for (const c of "balloon") {
    balloonMap.set(c, (balloonMap.get(c) ?? 0) + 1);
  }
  for (const [c, n] of balloonMap.entries()) {
    if ((textMap.get(c) ?? 0) < n) {
      return 0;
    }
    ret = Math.min(ret, Math.floor((textMap.get(c) ?? 0) / n));
  }
  return ret;
} */

function maxNumberOfBalloons(text: string): number {
  const cnt = new Array(5).fill(0);
  for (const c of text) {
    switch (c) {
      case "b":
        cnt[0]++;
        break;
      case "a":
        cnt[1]++;
        break;
      case "l":
        cnt[2]++;
        break;
      case "o":
        cnt[3]++;
        break;
      case "n":
        cnt[4]++;
    }
  }
  cnt[2] = Math.floor(cnt[2] / 2);
  cnt[3] = Math.floor(cnt[3] / 2);
  return Math.min(...cnt);
}
// @lc code=end
