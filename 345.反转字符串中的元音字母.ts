/*
 * @lc app=leetcode.cn id=345 lang=typescript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/* function reverseVowels(s: string): string {
  const n = s.length;
  let ret = new Array(n);
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    const lc = s[l];
    const rc = s[r];
    if (!set.has(lc)) {
      ret[l] = lc;
      l++;
    }
    if (!set.has(rc)) {
      ret[r] = rc;
      r--;
    }
    if (set.has(lc) && set.has(rc)) {
      ret[l] = rc;
      ret[r] = lc;
      l++;
      r--;
    }
  }
  return ret.join("");
} */

function reverseVowels(s: string): string {
  const n = s.length;
  let arr = Array.from(s);
  let l = 0;
  let r = n - 1;
  while (l < r) {
    while (l < n && !isVowel(s[l])) {
      l++;
    }
    while (r >= 0 && !isVowel(s[r])) {
      r--;
    }
    if (l < r) {
      swap(arr, l, r);
      l++;
      r--;
    }
  }
  return arr.join("");
}
const isVowel = (c: string): boolean => {
  return "aeiouAEIOU".indexOf(c) !== -1;
};
const swap = (arr: any[], l: number, r: number) => {
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
};
// @lc code=end
