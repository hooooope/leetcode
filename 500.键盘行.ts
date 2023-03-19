/*
 * @lc app=leetcode.cn id=500 lang=typescript
 *
 * [500] 键盘行
 */

// @lc code=start
/* function findWords(words: string[]): string[] {
  const ret: string[] = [];
  const keyboard: Set<string>[] = [
    new Set<string>(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]),
    new Set<string>(["a", "s", "d", "f", "g", "h", "j", "k", "l"]),
    new Set<string>(["z", "x", "c", "v", "b", "n", "m"]),
  ];
  for (const w of words) {
    let flag: boolean;
    for (const line of keyboard) {
      flag = true;
      for (const c of w) {
        if (!line.has(c.toLowerCase())) {
          flag = false;
          break;
        }
      }
      if (flag) {
        ret.push(w);
        break;
      }
    }
  }
  return ret;
} */

/* function findWords(words: string[]): string[] {
  const ret: string[] = [];
  const rowIdx = "12210111011122000010020202";
  for (const word of words) {
    let isValid = true;
    const idx = rowIdx[word[0].toLowerCase().charCodeAt(0) - "a".charCodeAt(0)];
    for (let i = 1; i < word.length; i++) {
      if (
        rowIdx[word[i].toLowerCase().charCodeAt(0) - "a".charCodeAt(0)] !== idx
      ) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      ret.push(word);
    }
  }
  return ret;
} */

function findWords(words: string[]): string[] {
  const ret: string[] = [];
  const reg1 = /^[qwertyuiop]*$/i;
  const reg2 = /^[asdfghjkl]*$/i;
  const reg3 = /^[zxcvbnm]*$/i;
  for (const word of words) {
    if (reg1.test(word) || reg2.test(word) || reg3.test(word)) {
      ret.push(word);
    }
  }
  return ret;
}
// @lc code=end
