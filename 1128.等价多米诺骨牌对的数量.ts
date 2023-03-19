/*
 * @lc app=leetcode.cn id=1128 lang=typescript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
function numEquivDominoPairs(dominoes: number[][]): number {
  let ret = 0;
  const cnt = new Array(100).fill(0);
  for (const domino of dominoes) {
    const val =
      domino[0] < domino[1]
        ? domino[0] * 10 + domino[1]
        : domino[1] * 10 + domino[0];
    ret += cnt[val];
    cnt[val]++;
  }
  return ret;
}
// @lc code=end
