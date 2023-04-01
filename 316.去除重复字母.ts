/*
 * @lc app=leetcode.cn id=316 lang=typescript
 *
 * [316] 去除重复字母
 */

// @lc code=start
function removeDuplicateLetters(s: string): string {
  if (s.length <= 1) {
    return s;
  }
  // 词频统计
  const cnt: number[] = new Array(26).fill(0);
  for (const c of s) {
    cnt[c.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  // 记录最小ASCII码字符的索引
  let min = 0;
  for (let i = 0; i < s.length; i++) {
    const charCode = s[i].charCodeAt(0) - "a".charCodeAt(0);
    cnt[charCode]--;
    min = s[i] < s[min] ? i : min;
    // 某个字符已经用尽
    // 在[0...i]范围上任选一个最小ASCII码的字符
    // 保留该字符，删除其左侧所有字符，删除其右侧与它相同的字符
    // 完成上述操作后也能够保证每个字符至少出现一次
    if (cnt[charCode] === 0) {
      break;
    }
  }
  return (
    s[min] +
    removeDuplicateLetters(
      s.slice(min + 1).replace(new RegExp(`${s[min]}`, "g"), "")
    )
  );
}
// @lc code=end
