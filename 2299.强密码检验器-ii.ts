/*
 * @lc app=leetcode.cn id=2299 lang=typescript
 *
 * [2299] 强密码检验器 II
 */

// @lc code=start
function strongPasswordCheckerII(password: string): boolean {
  const isLowerCase = (char: string) => {
    return "a" <= char && char <= "z";
  };
  const isUpperCase = (char: string) => {
    return "A" <= char && char <= "Z";
  };
  const isDigit = (char: string) => {
    return "0" <= char && char <= "9";
  };
  if (password.length < 8) {
    return false;
  }
  const specials = new Set([
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
  ]);
  const n = password.length;
  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;
  let hasSpecial = false;
  for (let i = 0; i < password.length; i++) {
    if (i !== n - 1 && password[i] === password[i + 1]) {
      return false;
    }
    const char = password[i];
    if (isLowerCase(char)) {
      hasLower = true;
    } else if (isUpperCase(char)) {
      hasUpper = true;
    } else if (isDigit(char)) {
      hasDigit = true;
    } else if (specials.has(char)) {
      hasSpecial = true;
    }
  }
  return hasLower && hasUpper && hasDigit && hasSpecial;
}
// @lc code=end
