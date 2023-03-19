/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/* function firstUniqChar(s: string): number {
  const cnt = new Array(26).fill(0);
  const CHAR_CODE_A = "a".charCodeAt(0);
  for (const c of s) {
    cnt[c.charCodeAt(0) - CHAR_CODE_A]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (cnt[s[i].charCodeAt(0) - CHAR_CODE_A] === 1) {
      return i;
    }
  }
  return -1;
} */

/* function firstUniqChar(s: string): number {
  const map = new Map<string, number>(); // <char, index>
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (map.has(c)) { // 重复字符记录 -1
      map.set(c, -1);
    } else { // 未重复字符记录 index
      map.set(c, i);
    }
  }
  for (const i of map.values()) {
    if (i !== -1) {
      return i;
    }
  }
  return -1;
} */

function firstUniqChar(s: string): number {
  const map = new Map<string, number>();
  const queue: [string, number][] = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (map.has(c)) {
      map.set(c, -1);
      while (queue.length && map.get(queue[0][0]) === -1) {
        queue.shift();
      }
    } else {
      map.set(c, i);
      queue.push([c, i]);
    }
  }
  return queue.length ? queue[0][1] : -1;
}
// @lc code=end
