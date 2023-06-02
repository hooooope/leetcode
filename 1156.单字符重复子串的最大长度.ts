/*
 * @lc app=leetcode.cn id=1156 lang=typescript
 *
 * [1156] 单字符重复子串的最大长度
 */

// @lc code=start
// 滑动窗口
function maxRepOpt1(text: string): number {
  const n = text.length;
  const count = new Map<string, number>();
  for (const c of text) {
    count.set(c, (count.get(c) ?? 0) + 1);
  }
  let ret = 0;
  for (let i = 0; i < n; i++) {
    let j = i;
    // step1: 找出当前连续的一段[i,j)
    while (j < n && text[i] === text[j]) {
      j++;
    }
    let curCnt = j - i;
    // step2: 如果这一段长度小于该字符出现的总数，并且前面或后面有空位，则使用curCnt+1更新答案
    if (curCnt < count.get(text[i])! && (i > 0 || j < n)) {
      ret = Math.max(ret, curCnt + 1);
    }
    let k = j + 1;
    // step3: 找到这一段后面与之相隔一个不同字符的另一段[j+1,k)，如果不存在则k=j+1
    while (k < n && text[i] === text[k]) {
      k++;
    }
    // ⚠️需要重新判断是否有多余的a交换到中间来，因此将拼接后的长度k-i与count[a]取最小值来更新答案
    ret = Math.max(ret, Math.min(k - i, count.get(text[i])!));
  }
  return ret;
}
// @lc code=end
