/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
// 横向扫描
/* function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    prefix = getCommonPrefix(prefix, strs[i]);
    if (prefix.length === 0) {
      break;
    }
  }
  return prefix;
}
function getCommonPrefix(str1: string, str2: string): string {
  let i = 0;
  const len = Math.min(str1.length, str2.length);
  while (i < len && str1[i] === str2[i]) {
    i++;
  }
  return str1.slice(0, i);
} */

// 纵向扫描
/* function longestCommonPrefix(strs: string[]): string {
  const length = strs[0].length;
  const count = strs.length;
  for (let i = 0; i < length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < count; j++) {
      if (strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
} */

// 分治法
// 思路同横向扫描，但比横向扫描麻烦
/* function longestCommonPrefix(strs: string[]): string {
  return binaryGetCommonPrefix(strs, 0, strs.length - 1);
}
function binaryGetCommonPrefix(
  strs: string[],
  start: number,
  end: number
): string {
  if (start === end) {
    return strs[start];
  } else {
    let mid = Math.floor((end - start) / 2 + start);
    let left = binaryGetCommonPrefix(strs, start, mid);
    let right = binaryGetCommonPrefix(strs, mid + 1, end);
    return getCommonPrefix(left, right);
  }
}
function getCommonPrefix(str1: string, str2: string): string {
  let i = 0;
  const len = Math.min(str1.length, str2.length);
  while (i < len && str1[i] === str2[i]) {
    i++;
  }
  return str1.slice(0, i);
} */

// 二分法
function longestCommonPrefix(strs: string[]): string {
  let minLength = Number.MAX_SAFE_INTEGER;
  for (const s of strs) {
    minLength = Math.min(minLength, s.length);
  }
  let low = 0;
  let high = minLength;
  while (low < high) {
    let mid = Math.floor((high - low + 1) / 2 + low);
    if (isCommonPrefix(strs, mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }
  return strs[0].slice(0, low);
}
function isCommonPrefix(strs: string[], length: number): boolean {
  let str0 = strs[0].slice(0, length);
  let count = strs.length;
  for (let i = 1; i < count; i++) {
    let s = strs[i];
    for (let j = 0; j < length; j++) {
      if (str0[j] !== s[j]) {
        return false;
      }
    }
  }
  return true;
}
// @lc code=end
