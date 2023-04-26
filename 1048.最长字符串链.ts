/*
 * @lc app=leetcode.cn id=1048 lang=typescript
 *
 * [1048] 最长字符串链
 */

// @lc code=start
function longestStrChain(words: string[]): number {
  let ret = 0;
  const map = new Map<string, number>();
  // 首先对字符串数组words按照字符串长度的大小进行排序
  words.sort((a, b) => a.length - b.length);
  // 依次遍历每个字符串words[i]
  for (const word of words) {
    // 并初始以words[i]为结尾的最长链的长度cnt[words[i]]为1
    map.set(word, 1);
    for (let i = 0; i < word.length; i++) {
      // 依次尝试去掉words[i]中的每个字符，并构成其可能的前身prev
      const prev = word.slice(0, i) + word.slice(i + 1);
      if (map.has(prev)) {
        // 在哈希表cnt查找prev对应的最长链长度
        // 如果cnt+1大于cnt[words[i]]，则更新cnt[words[i]]
        map.set(word, Math.max(map.get(word)!, map.get(prev)! + 1));
      }
    }
    ret = Math.max(ret, map.get(word)!);
  }
  return ret;
}
// @lc code=end
