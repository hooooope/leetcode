/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
// 滑动窗口
/* 
  根据题目要求，我们需要在字符串s寻找字符串p的异位词。
  因为字符串p的异位词的长度一定与字符串p的长度相同，所以我们可以在字符串s中构造一个长度与字符串p的长度相同的滑动窗口，并在滑动中维护窗口中每种字母的数量
  当窗口中每种字母的数量与字符串p中每种字母的数量相同时，则说明当前窗口为字符串p的异位词
*/
/* function findAnagrams(s: string, p: string): number[] {
  const sLen = s.length;
  const pLen = p.length;
  if (sLen < pLen) {
    return [];
  }
  const ret: number[] = [];
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);
  for (let i = 0; i < pLen; i++) {
    sCount[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    pCount[p[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  if (sCount.toString() === pCount.toString()) {
    ret.push(0);
  }
  for (let i = 0; i < sLen - pLen; i++) {
    sCount[s[i].charCodeAt(0) - "a".charCodeAt(0)]--;
    sCount[s[i + pLen].charCodeAt(0) - "a".charCodeAt(0)]++;
    if (sCount.toString() === pCount.toString()) {
      ret.push(i + 1);
    }
  }
  return ret;
} */

// 滑动窗口（优化）
/* 
  在方法一的基础上，我们不再分别统计滑动窗口和字符串p中每种字母的数量，而是统计滑动窗口和字符串p中每种字母数量的差；
  并引入变量differ来记录当前窗口与字符串p中数量不同的字母的个数，并在滑动窗口的过程中维护它
  在判断滑动窗口中每种字母的数量与字符串p中每种字母的数量是否相同时，只需要判断differ是否为零即可
*/
function findAnagrams(s: string, p: string): number[] {
  const sLen = s.length;
  const pLen = p.length;
  if (sLen < pLen) {
    return [];
  }
  const ret: number[] = [];
  const count = new Array(26).fill(0);
  for (let i = 0; i < pLen; i++) {
    count[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    count[p[i].charCodeAt(0) - "a".charCodeAt(0)]--;
  }
  let differ = 0;
  for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) {
      differ++;
    }
  }
  if (differ === 0) {
    ret.push(0);
  }
  for (let i = 0; i < sLen - pLen; i++) {
    if (count[s[i].charCodeAt(0) - "a".charCodeAt(0)] === 1) {
      // 窗口中字母s[i]的数量与字符串p中的数量从不同变得相同
      differ--;
    } else if (count[s[i].charCodeAt(0) - "a".charCodeAt(0)] === 0) {
      // 窗口中字母s[i]的数量与字符串p中的数量从相同变得不同
      differ++;
    }
    count[s[i].charCodeAt(0) - "a".charCodeAt(0)]--;
    if (count[s[i + pLen].charCodeAt(0) - "a".charCodeAt(0)] === -1) {
      // 窗口中字母s[i+pLen]的数量与字符串p中的数量从不同变得相同
      differ--;
    } else if (count[s[i + pLen].charCodeAt(0) - "a".charCodeAt(0)] === 0) {
      // 窗口中字母s[i+pLen]的数量与字符串p中的数量从相同变得不同
      differ++;
    }
    count[s[i + pLen].charCodeAt(0) - "a".charCodeAt(0)]++;
    if (differ === 0) {
      ret.push(i + 1);
    }
  }
  return ret;
}
// @lc code=end
