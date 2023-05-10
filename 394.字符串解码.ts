/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
// 栈操作
/* function decodeString(s: string): string {
  const stack: string[] = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if ("0" <= c && c <= "9") {
      // 获取一个数字进栈
      const sb: string[] = [];
      while ("0" <= s[i] && s[i] <= "9") {
        sb.push(s[i]);
        i++;
      }
      stack.push(sb.join(""));
    } else if (("a" <= c && c <= "z") || c === "[") {
      // 获取一个字母进栈
      stack.push(c);
      i++;
    } else {
      // c === "]"
      i++;
      const sb: string[] = [];
      while (stack[stack.length - 1] !== "[") {
        sb.push(stack.pop()!);
      }
      // 左括号出栈
      stack.pop()!;
      sb.reverse();
      // 此时栈顶为当前sb对应的字符串应该出现的次数
      let repTime = Number(stack.pop()!);
      while (repTime--) {
        stack.push(sb.join(""));
      }
    }
  }
  return stack.join("");
} */

// 递归
function decodeString(s: string): string {
  const process = (): string => {
    if (i === s.length || s[i] === "]") {
      return "";
    }
    let ret = "";
    const c = s[i];
    if ("0" <= c && c <= "9") {
      // 解析Digits
      const sb: string[] = [];
      while ("0" <= s[i] && s[i] <= "9") {
        sb.push(s[i]);
        i++;
      }
      let repTime = Number(sb.join(""));
      // 过滤左括号
      i++;
      // 解析String
      const str = process();
      // 过滤右括号
      i++;
      while (repTime--) {
        ret += str;
      }
    } else if ("a" <= c && c <= "z") {
      ret += c;
      i++;
    }
    return ret + process();
  };
  let i = 0;
  return process();
}
// @lc code=end
