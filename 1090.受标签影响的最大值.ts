/*
 * @lc app=leetcode.cn id=1090 lang=typescript
 *
 * [1090] 受标签影响的最大值
 */

// @lc code=start
function largestValsFromLabels(
  values: number[],
  labels: number[],
  numWanted: number,
  useLimit: number
): number {
  const n = values.length;
  const idx = new Array(n).fill(0).map((_, i) => i);
  idx.sort((a, b) => values[b] - values[a]);
  let ret = 0;
  let choose = 0;
  const cnt: Record<string, number> = {};
  for (let i = 0; i < n; i++) {
    const label = labels[idx[i]];
    if (cnt[label] === useLimit) {
      continue;
    }
    choose++;
    ret += values[idx[i]];
    cnt[label] = (cnt[label] ?? 0) + 1;
    if (choose === numWanted) {
      break;
    }
  }
  return ret;
}
// @lc code=end
