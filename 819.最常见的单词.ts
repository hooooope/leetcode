/*
 * @lc app=leetcode.cn id=819 lang=typescript
 *
 * [819] 最常见的单词
 */

// @lc code=start
function mostCommonWord(paragraph: string, banned: string[]): string {
  const isLetter = (c: string): boolean => {
    const charCode = c.charCodeAt(0);
    return (
      (charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) ||
      (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0))
    );
  };
  let sb = "";
  let max = 0;
  let ret = "";
  const n = paragraph.length;
  const set = new Set<string>();
  const map = new Map<string, number>();
  for (const word of banned) {
    set.add(word);
  }
  // edge case：结束条件 i === n，可以减少一次额外的判断
  // test case：bob
  for (let i = 0; i <= n; i++) {
    const c = paragraph[i];
    if (i < n && isLetter(c)) {
      sb += c.toLowerCase();
    } else if (sb.length) {
      if (!set.has(sb)) {
        const cnt = (map.get(sb) ?? 0) + 1;
        map.set(sb, cnt);
        if (cnt > max) {
          max = cnt;
          ret = sb;
        }
      }
      sb = "";
    }
  }
  return ret;
}
// @lc code=end
