/*
 * @lc app=leetcode.cn id=824 lang=typescript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/* function toGoatLatin(sentence: string): string {
  let sb = "";
  const ret: string[] = [];
  const n = sentence.length;
  const vowel = new Set(["a", "e", "i", "o", "u"]);
  for (let i = 0; i <= n; i++) {
    const c = sentence[i];
    if (c === undefined || c === " ") {
      if (vowel.has(sb[0].toLowerCase())) {
        // 单词以元音字母开头
        sb += "ma";
      } else {
        // 单词以辅音字母开头
        sb = sb.slice(1) + sb[0];
        sb += "ma";
      }
      for (let j = 0; j <= ret.length; j++) {
        sb += "a";
      }
      ret.push(sb);
      sb = "";
    } else {
      sb += c;
    }
  }
  return ret.join(" ");
} */

function toGoatLatin(sentence: string): string {
  let i = 0;
  let cnt = 1; // 记录已遍历的单词数量
  let ret = "";
  const n = sentence.length;
  const vowel = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  while (i < n) {
    let j = i;
    while (j < n && sentence[j] !== " ") {
      j++;
    }
    cnt++;
    // 第一个单词之前无需添加空格
    if (cnt !== 2) {
      ret += " "; // 单词间的空格
    }
    if (vowel.has(sentence[i])) {
      ret += sentence.slice(i, j);
    } else {
      ret += sentence.slice(i + 1, j);
      ret += sentence[i];
    }
    ret += "m";
    for (let k = 0; k < cnt; k++) {
      ret += "a";
    }
    i = j + 1;
  }
  return ret;
}
// @lc code=end
