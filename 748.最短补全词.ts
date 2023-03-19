/*
 * @lc app=leetcode.cn id=748 lang=typescript
 *
 * [748] 最短补全词
 */

// @lc code=start
/* function shortestCompletingWord(licensePlate: string, words: string[]): string {
  const map1 = new Map<string, number>();
  for (let letter of licensePlate) {
    letter = letter.toLowerCase();
    if (
      letter.charCodeAt(0) >= "a".charCodeAt(0) &&
      letter.charCodeAt(0) <= "z".charCodeAt(0)
    ) {
      map1.set(letter, (map1.get(letter) ?? 0) + 1);
    }
  }
  let idx = -1;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const map2 = new Map<string, number>();
    for (let letter of word) {
      letter = letter.toLowerCase();
      map2.set(letter, (map2.get(letter) ?? 0) + 1);
    }
    let flag = true;
    for (const [letter, count] of map1.entries()) {
      if (!map2.get(letter) || map2.get(letter)! < count) {
        flag = false;
        break;
      }
    }
    if (flag && (idx < 0 || words[idx].length > word.length)) {
      idx = i;
    }
  }
  return words[idx];
} */

function shortestCompletingWord(licensePlate: string, words: string[]): string {
  const cnt = new Array(26).fill(0);
  for (const ch of licensePlate) {
    if (/[a-zA-Z]/.test(ch)) {
      cnt[ch.toLowerCase().charCodeAt(0) - "a".charCodeAt(0)]++;
    }
  }
  let idx = -1;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const c = new Array(26).fill(0);
    for (let j = 0; j < word.length; j++) {
      const ch = word[j];
      c[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    let flag = true;
    for (let j = 0; j < 26; j++) {
      if (c[j] < cnt[j]) {
        flag = false;
        break;
      }
    }
    if (flag && (idx < 0 || word.length < words[idx].length)) {
      idx = i;
    }
  }
  return words[idx];
}
// @lc code=end
