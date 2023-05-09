/*
 * @lc app=leetcode.cn id=2437 lang=typescript
 *
 * [2437] 有效时间的数目
 */

// @lc code=start

// 回溯
/* function countTime(time: string): number {
  let ret = 0;
  const sb = time.split("");
  const check = (sb: string[]) => {
    const hh =
      (sb[0].charCodeAt(0) - "0".charCodeAt(0)) * 10 +
      sb[1].charCodeAt(0) -
      "0".charCodeAt(0);
    const mm =
      (sb[3].charCodeAt(0) - "0".charCodeAt(0)) * 10 +
      sb[4].charCodeAt(0) -
      "0".charCodeAt(0);
    return hh < 24 && mm < 60;
  };
  const dfs = (time: string, index: number) => {
    if (index === time.length) {
      if (check(sb)) {
        ret++;
      }
      return;
    }
    if (time[index] === "?") {
      for (let i = 0; i < 10; i++) {
        sb[index] = String.fromCharCode("0".charCodeAt(0) + i);
        dfs(time, index + 1);
        sb[index] = "?";
      }
    } else {
      dfs(time, index + 1);
    }
  };
  dfs(time, 0);
  return ret;
} */

// 分开枚举
/* function countTime(time: string): number {
  let countHour = 0;
  let countMinute = 0;
  for (let i = 0; i < 24; i++) {
    const hiHour = Math.floor(i / 10);
    const loHour = i % 10;
    if (
      (time[0] === "?" ||
        time[0].charCodeAt(0) - "0".charCodeAt(0) === hiHour) &&
      (time[1] === "?" || time[1].charCodeAt(0) - "0".charCodeAt(0) === loHour)
    ) {
      countHour++;
    }
  }
  for (let i = 0; i < 60; i++) {
    const hiMinute = Math.floor(i / 10);
    const loMinute = i % 10;
    if (
      (time[3] === "?" ||
        time[3].charCodeAt(0) - "0".charCodeAt(0) === hiMinute) &&
      (time[4] === "?" ||
        time[4].charCodeAt(0) - "0".charCodeAt(0) === loMinute)
    ) {
      countMinute++;
    }
  }
  return countHour * countMinute;
} */

function countTime(time: string): number {
  let ret = 1;
  if (time[0] === "?" && time[1] === "?") {
    ret *= 24;
  } else if (time[0] === "?") {
    if (time[1] < "4") {
      ret *= 3;
    } else {
      ret *= 2;
    }
  } else if (time[1] === "?") {
    if (time[0] === "2") {
      ret *= 4;
    } else {
      ret *= 10;
    }
  }
  if (time[3] === "?") {
    ret *= 6;
  }
  if (time[4] === "?") {
    ret *= 10;
  }
  return ret;
}
// @lc code=end
