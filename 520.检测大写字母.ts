/*
 * @lc app=leetcode.cn id=520 lang=typescript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/* 
  首字母为大写
    其余字母为大写
    其余字母为小写
  首字母为小写
    其余字母为小写

  无论首字母是否大写，其余字母与第二个字母的大小写相同
  若首字母为小写，则需要额外判断第二个字母为小写
*/
function detectCapitalUse(word: string): boolean {
  // 首字母为小写，则需要额外判断第二个字母是否为小写
  if (
    word.length >= 2 &&
    word[0] === word[0].toLowerCase() &&
    word[1] === word[1].toUpperCase()
  ) {
    return false;
  }
  // 无论首字母是否大写，其余字母与第二个字母的大小写相同
  for (let i = 2; i < word.length; i++) {
    if (
      (word[i] === word[i].toLowerCase()) !==
      (word[1] === word[1].toLowerCase())
    ) {
      return false;
    }
  }
  return true;
}
// @lc code=end
