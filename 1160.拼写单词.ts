/*
 * @lc app=leetcode.cn id=1160 lang=typescript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/* function countCharacters(words: string[], chars: string): number {
  let ret = 0;
  const map = new Map<string, number>();
  for (const char of chars) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }
  for (const word of words) {
    let flag = true;
    const tmp = new Map(map);
    for (const char of word) {
      if (tmp.get(char) && tmp.get(char)! >= 1) {
        tmp.set(char, tmp.get(char)! - 1);
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      ret += word.length;
    }
  }
  return ret;
} */

function countCharacters(words: string[], chars: string): number {
  let ret = 0;
  const map = new Map<string, number>();
  for (const char of chars) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }
  for (const word of words) {
    const tmp = new Map<string, number>();
    for (const char of word) {
      tmp.set(char, (tmp.get(char) ?? 0) + 1);
    }
    let flag = true;
    for (const char of word) {
      if ((map.get(char) ?? 0) < tmp.get(char)!) {
        flag = false;
      }
    }
    if (flag) {
      ret += word.length;
    }
  }
  return ret;
}
// @lc code=end
