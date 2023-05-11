/*
 * @lc app=leetcode.cn id=763 lang=typescript
 *
 * [763] 划分字母区间
 */

// @lc code=start
// 贪心
function partitionLabels(s: string): number[] {
  const n = s.length;
  // map[i]表示第i+1个字母最后一次出现的位置
  const map = new Array(26).fill(-1);
  for (let i = 0; i < n; i++) {
    map[s[i].charCodeAt(0) - "a".charCodeAt(0)] = i;
  }
  const ret: number[] = [];
  let length = 0;
  let lastIndex = -1;
  for (let i = 0; i < n; i++) {
    length++;
    lastIndex = Math.max(
      lastIndex,
      map[s[i].charCodeAt(0) - "a".charCodeAt(0)]
    );
    if (i == lastIndex) {
      ret.push(length);
      length = 0;
    }
  }
  return ret;
}
// @lc code=end
