/*
 * @lc app=leetcode.cn id=2325 lang=typescript
 *
 * [2325] 解密消息
 */

// @lc code=start
function decodeMessage(key: string, message: string): string {
  const ret: string[] = new Array(message.length);
  const map = new Map<string, string>();
  for (let i = 0, j = 0; i < key.length; i++) {
    const char = key[i];
    if (char === " " || map.has(char)) {
      continue;
    }
    map.set(char, String.fromCharCode("a".charCodeAt(0) + j++));
  }
  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    if (char === " ") {
      ret[i] = char;
      continue;
    }
    ret[i] = map.get(char)!;
  }
  return ret.join("");
}
// @lc code=end
