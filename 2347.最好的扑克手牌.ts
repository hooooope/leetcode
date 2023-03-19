/*
 * @lc app=leetcode.cn id=2347 lang=typescript
 *
 * [2347] 最好的扑克手牌
 */

// @lc code=start
function bestHand(ranks: number[], suits: string[]): string {
  const rankMap = new Map<number, number>();
  const suitSet = new Set<string>();
  for (let i = 0; i < ranks.length; i++) {
    const rank = ranks[i];
    const suit = suits[i];
    rankMap.set(rank, (rankMap.get(rank) ?? 0) + 1);
    suitSet.add(suit);
  }
  if (suitSet.size === 1) {
    return "Flush";
  }
  if (rankMap.size === 5) {
    return "High Card";
  }
  for (const [rank, cnt] of rankMap) {
    if (cnt >= 3) {
      return "Three of a Kind";
    }
  }
  return "Pair";
}
// @lc code=end
