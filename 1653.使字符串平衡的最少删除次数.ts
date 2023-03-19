/*
 * @lc app=leetcode.cn id=1653 lang=typescript
 *
 * [1653] 使字符串平衡的最少删除次数
 */

// @lc code=start
// 暴力法
/* function minimumDeletions(s: string): number {
  const n = s.length;
  let ret = n;
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      // 统计[0...n-1]上有多少个a
      let a = 0;
      for (let j = 0; j < n; j++) {
        if (s[j] === "a") {
          a++;
        }
      }
      ret = Math.min(ret, a);
    } else if (i === n) {
      // 统计[0...n-1]上有多少个b
      let b = 0;
      for (let j = 0; j < n; j++) {
        if (s[j] === "b") {
          b++;
        }
      }
      ret = Math.min(ret, b);
    } else {
      // 统计[0...i-1]上有多少个b，[i...n-1]上有多少个a
      let ab = 0;
      for (let j = 0; j < i; j++) {
        if (s[j] === "b") {
          ab++;
        }
      }
      for (let j = i; j < n; j++) {
        if (s[j] === "a") {
          ab++;
        }
      }
      ret = Math.min(ret, ab);
    }
  }
  return ret;
} */

// 前缀和数组
/* function minimumDeletions(s: string): number {
  const n = s.length;
  // right[i]表示[i...n-1]上有多少个a
  const right = new Array(n);
  right[n - 1] = s[n - 1] === "a" ? 1 : 0;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = s[i] === "a" ? right[i + 1] + 1 : right[i + 1];
  }
  let ret = right[0];
  let left = 0;
  for (let i = 0; i < n - 1; i++) {
    left = s[i] === "b" ? left + 1 : left;
    ret = Math.min(ret, left + right[i + 1]);
  }
  ret = Math.min(ret, s[n - 1] === "b" ? left + 1 : left);
  return ret;
} */

// 前缀和变量
function minimumDeletions(s: string): number {
  const n = s.length;
  let leftb = 0;
  let righta = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "a") {
      righta++;
    }
  }
  let ret = righta;
  for (let i = 0; i < n; i++) {
    if (s[i] === "a") {
      righta--;
    } else {
      leftb++;
    }
    ret = Math.min(ret, leftb + righta);
  }
  return ret;
}
// @lc code=end
