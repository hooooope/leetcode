/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
// 排序
// 由于互为字符异位词的两个字符串包含的字母相同
// 因此对两个字符串分别进行排序之后得到的字符串一定是相同的
// 故可以将排序之后的字符串作为哈希表的键
/* function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const str of strs) {
    const key = Array.from(str).sort().toString();
    if (map.has(key)) {
      map.get(key)!.push(str);
    } else {
      map.set(key, [str]);
    }
  }
  return Array.from(map.values());
} */

// 计数
// 由于互为字母异位词的两个字符串包含的字母相同
// 因此两个字符串中的相同字母出现的次数一定是相同的
// 故可以将每个字母浮现的次数使用字符串表示，作为哈希表的键
function groupAnagrams(strs: string[]): string[][] {
  const map = {};
  for (const str of strs) {
    const count = new Array(26).fill(0);
    for (const char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key = count.toString();
    map[key] ? map[key].push(str) : (map[key] = [str]);
  }
  return Object.values(map);
}
// @lc code=end
