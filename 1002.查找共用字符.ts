/*
 * @lc app=leetcode.cn id=1002 lang=typescript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
/* 
  [a: 1, b: 1, e: 1, l: 2]
  [a: 1, b: 1, e: 1, l: 2]
  [e: 1, l: 2, o: 1, r: 2]
*/
/* function commonChars(words: string[]): string[] {
  const ret: string[] = [];
  const n = words.length;
  const cnt = new Array(n).fill(0).map(() => new Array(26).fill(0));
  for (let i = 0; i < n; i++) {
    const word = words[i];
    const m = word.length;
    for (let j = 0; j < m; j++) {
      const idx = word[j].charCodeAt(0) - "a".charCodeAt(0);
      cnt[i][idx]++;
    }
  }
  for (let i = 0; i < 26; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < n; j++) {
      min = Math.min(min, cnt[j][i]);
    }
    if (min !== 0) {
      for (let k = 0; k < min; k++) {
        const c = String.fromCharCode("a".charCodeAt(0) + i);
        ret.push(c);
      }
    }
  }
  return ret;
} */

function commonChars(words: string[]): string[] {
  const ret: string[] = [];
  const minFreq = new Array(26).fill(Number.MAX_VALUE);
  for (const word of words) {
    const freq = new Array(26).fill(0);
    for (const char of word) {
      freq[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    for (let i = 0; i < 26; i++) {
      minFreq[i] = Math.min(minFreq[i], freq[i]);
    }
  }
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < minFreq[i]; j++) {
      ret.push(String.fromCharCode("a".charCodeAt(0) + i));
    }
  }
  return ret;
}
// @lc code=end
