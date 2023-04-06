/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  const ret: string[] = [];
  if (digits.length === 0) {
    return ret;
  }
  const map = new Map<string, string>()
    .set("2", "abc")
    .set("3", "def")
    .set("4", "ghi")
    .set("5", "jkl")
    .set("6", "mno")
    .set("7", "pqrs")
    .set("8", "tuv")
    .set("9", "wxyz");
  const backtrack = (
    ret: string[],
    map: Map<string, string>,
    digits: string,
    index: number,
    combination: string[]
  ) => {
    if (combination.length === digits.length) {
      ret.push(combination.join(""));
    } else {
      const digit = digits[index];
      const letters = map.get(digit)!;
      for (let i = 0; i < letters.length; i++) {
        combination.push(letters[i]);
        backtrack(ret, map, digits, index + 1, combination);
        combination.pop();
      }
    }
  };
  backtrack(ret, map, digits, 0, []);
  return ret;
}
// @lc code=end
