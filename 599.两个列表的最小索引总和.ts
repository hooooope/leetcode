/*
 * @lc app=leetcode.cn id=599 lang=typescript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
function findRestaurant(list1: string[], list2: string[]): string[] {
  const ret: string[] = [];
  const map = new Map<string, number>();
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }
  let minIdxSum = Number.MAX_VALUE;
  for (let j = 0; j < list2.length; j++) {
    const item = list2[j];
    if (map.has(item)) {
      const i = map.get(item)!;
      if (i + j < minIdxSum) {
        ret.length = 0;
        ret.push(item);
        minIdxSum = i + j;
      } else if (i + j === minIdxSum) {
        ret.push(item);
      }
    }
  }
  return ret;
}
// @lc code=end
