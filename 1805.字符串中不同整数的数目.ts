/*
 * @lc app=leetcode.cn id=1805 lang=typescript
 *
 * [1805] 字符串中不同整数的数目
 */

// @lc code=start
// 利用正则消除前导0
function numDifferentIntegers(word: string): number {
  const isDigit = (c: string): boolean => {
    return c >= "0" && c <= "9";
  };
  let p1 = 0;
  let p2 = 0;
  const n = word.length;
  const set = new Set<string>();
  while (true) {
    while (p1 < n && !isDigit(word[p1])) {
      p1++;
    }
    if (p1 === n) {
      break;
    }
    p2 = p1;
    while (p2 < n && isDigit(word[p2])) {
      p2++;
    }
    /* 
      此替换不仅会消除字符串的前导0，还会消除字符串0
      由于字符串0会被替换成空字符串存入哈希表中，因此不影响数量统计
    */
    set.add(word.slice(p1, p2).replace(/^0*/, ""));
    p1 = p2;
  }

  return set.size;
}

// 利用双指针消除前导0
/* function numDifferentIntegers(word: string): number {
  const isDigit = (c: string): boolean => {
    return c >= "0" && c <= "9";
  };
  let p1 = 0;
  let p2 = 0;
  const n = word.length;
  const set = new Set<string>();
  while (true) {
    while (p1 < n && !isDigit(word[p1])) {
      p1++;
    }
    if (p1 === n) {
      break;
    }
    p2 = p1;
    while (p2 < n && isDigit(word[p2])) {
      p2++;
    }
    // 消除字符串的前导0，但不会消除字符串0
    while (p2 - p1 > 1 && word[p1] === "0") {
      p1++;
    }
    set.add(word.slice(p1, p2));
    p1 = p2;
  }
  return set.size;
} */
// @lc code=end
