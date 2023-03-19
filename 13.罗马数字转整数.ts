/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/* function romanToInt(s: string): number {
  let ret = 0;
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const next = s[i + 1];
    let value = map[curr];
    if (curr === "I") {
      if (next === "V") {
        value = 4;
        i++;
      } else if (next === "X") {
        value = 9;
        i++;
      }
    } else if (curr === "X") {
      if (next === "L") {
        value = 40;
        i++;
      } else if (next === "C") {
        value = 90;
        i++;
      }
    } else if (curr === "C") {
      if (next === "D") {
        value = 400;
        i++;
      } else if (next === "M") {
        value = 900;
        i++;
      }
    }
    ret += value;
  }
  return ret;
} */

/* function romanToInt(s: string): number {
  let ret = 0;
  const map: any = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length; i++) {
    const val = map[s[i]];
    if (s[i + 1] && val < map[s[i + 1]]) {
      ret -= val;
    } else {
      ret += val;
    }
  }
  return ret;
} */

function romanToInt(s: string): number {
  let ret = 0;
  const map: any = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    a: 4,
    b: 9,
    c: 40,
    d: 90,
    e: 400,
    f: 900,
  };

  s = s.replace(/IV/g, "a");
  s = s.replace(/IX/g, "b");
  s = s.replace(/XL/g, "c");
  s = s.replace(/XC/g, "d");
  s = s.replace(/CD/g, "e");
  s = s.replace(/CM/g, "f");

  for (const c of s) {
    ret += map[c];
  }
  return ret;
}
// @lc code=end
