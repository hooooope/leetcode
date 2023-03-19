/*
 * @lc app=leetcode.cn id=1234 lang=typescript
 *
 * [1234] 替换子串得到平衡字符串
 */

// @lc code=start
// 滑动窗口
function balancedString(s: string): number {
  const idx = (c: string) => {
    return c.charCodeAt(0) - "A".charCodeAt(0);
  };
  // 只有当s剩余的部分中QWER出现次数都小于等于partial时，
  // 才能使s变为平衡字符串
  const check = (cnt: number[], partial: number) => {
    if (
      cnt[idx("Q")] > partial ||
      cnt[idx("W")] > partial ||
      cnt[idx("E")] > partial ||
      cnt[idx("R")] > partial
    ) {
      return false;
    }
    return true;
  };
  const n = s.length;
  const partial = n / 4;
  const cnt = new Array(26).fill(0);
  for (const c of s) {
    cnt[idx(c)]++;
  }
  // 原始的s就是平衡字符串
  if (check(cnt, partial)) {
    return 0;
  }
  let ret = n;
  for (let l = 0, r = 0; l < n; l++) {
    while (r < n && !check(cnt, partial)) {
      cnt[idx(s[r])]--;
      r++;
    }
    // 当r>=n且!check(cnt, partial)时，
    // 说明区间[l,n)的左侧部分中QWER的出现次数大于partial，
    // 后序的l也将不会有合法的r
    if (!check(cnt, partial)) {
      break;
    }
    // r-l表示窗口[l,r)内有多少个元素
    ret = Math.min(ret, r - l);
    cnt[idx(s[l])]++;
  }
  return ret;
}
// @lc code=end
