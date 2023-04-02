/*
 * @lc app=leetcode.cn id=316 lang=typescript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/* function removeDuplicateLetters(s: string): string {
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
} */

// 贪心+单调栈
// 给定一个字符串s，如何去掉其中的一个字符c，使得得到的字符串字典序最小呢？
// 找出最小的满足s[i]>s[i+1]的下标i，并去除字符s[i]。为了叙述方便，下文中称这样的字符为关键字符
function removeDuplicateLetters(s: string): string {
  // 栈中是否存在某个字符
  const vis: boolean[] = new Array(26).fill(false);
  // 每个字符的剩余数量
  const cnt: number[] = new Array(26).fill(0);
  for (const c of s) {
    cnt[c.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  // 我们从前向后扫描原字符串。每扫描到一个位置，我们就尽可能地处理所有关键字符
  // 假定在扫描位置s[i-1]之前的所有关键字符都已经被去除完毕，在扫描字符s[i]时，新出现的关键字符只可能出现在s[i]或者其后面的位置
  // 于是，我们使用单调栈来维护去除关键字符后得到的字符串，单调栈满足栈底到栈顶的字符递增
  const sb: string[] = new Array();
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const curr = c.charCodeAt(0) - "a".charCodeAt(0);
    // 原字符串s中每个字符都需要出现在新字符串中，且只能出现一次
    // 在考虑字符s[i]时，如果它已经存在于栈中，则不能加入字符s[i]
    if (!vis[curr]) {
      // 如果栈顶字符大于当前字符s[i]，说明栈顶字符为关键字符，故应当被去除// 去除后，新的栈顶字符就与s[i]相邻了，我们继续比较新的栈顶字符与s[i]的大小。重复上述操作，直到栈为空或者栈顶字符不大于s[i]
      while (sb.length > 0 && sb[sb.length - 1] > c) {
        const last = sb[sb.length - 1].charCodeAt(0) - "a".charCodeAt(0);
        // 在弹出栈顶字符时，如果字符串在后面的位置上再也没有这一字符，则不能弹出栈顶字符
        if (cnt[last] > 0) {
          vis[last] = false;
          sb.pop();
        } else {
          break;
        }
      }
      vis[curr] = true;
      sb.push(c);
    }
    cnt[curr]--;
  }
  return sb.join("");
}
// @lc code=end
