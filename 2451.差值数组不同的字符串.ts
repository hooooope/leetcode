/*
 * @lc app=leetcode.cn id=2451 lang=typescript
 *
 * [2451] 差值数组不同的字符串
 */

// @lc code=start
function oddString(words: string[]): string {
  const get = (word: string) => {
    const n = word.length
    const diff: number[] = new Array(n - 1).fill(0)
    for (let j = 0; j < n - 1; j++) {
      diff[j] = word[j + 1].charCodeAt(0) - word[j].charCodeAt(0)
    }
    return diff.join(",")
  }
  const diff0 = get(words[0])
  const diff1 = get(words[1])
  if (diff0 === diff1) {
    for (let i = 2; i < words.length; i++) {
      if (diff0 !== get(words[i])) {
        return words[i]
      }
    }
  }
  return diff0 === get(words[2]) ? words[1] : words[0]
};
// @lc code=end

