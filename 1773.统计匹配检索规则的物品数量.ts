/*
 * @lc app=leetcode.cn id=1773 lang=typescript
 *
 * [1773] 统计匹配检索规则的物品数量
 */

// @lc code=start
function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  let ret = 0;
  const map = {
    type: 0,
    color: 1,
    name: 2,
  };
  const j = map[ruleKey];
  for (let i = 0; i < items.length; i++) {
    if (items[i][j] === ruleValue) {
      ret++;
    }
  }
  return ret;
}
// @lc code=end
