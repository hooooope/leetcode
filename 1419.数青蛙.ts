/*
 * @lc app=leetcode.cn id=1419 lang=typescript
 *
 * [1419] 数青蛙
 */

// @lc code=start
function minNumberOfFrogs(croakOfFrogs: string): number {
  if (croakOfFrogs.length % 5 !== 0) {
    return -1;
  }
  let ret = 0;
  // 表示正在发出蛙鸣声的青蛙数目
  let flogNum = 0;
  // 记录字符c、r、o、a出现的次数（k不需要记录）
  // 比如当cnt['c']=2时，表示当前有2只青蛙已经发出了有效蛙鸣中的字符‘c’
  const cnt = new Array(4).fill(0);
  // 将字符映射为连续的下标，方便获取当前字符的上一个字符的出现次数
  // cur = map.get(c); pre = cnt[cur - 1]
  const map = new Map<string, number>();
  map.set("c", 0);
  map.set("r", 1);
  map.set("o", 2);
  map.set("a", 3);
  map.set("k", 4);
  for (const c of croakOfFrogs) {
    const t = map.get(c)!;
    if (c === "c") {
      // 一只青蛙开始发出蛙鸣
      cnt[t]++;
      flogNum++;
      // 在遍历的过程中取正在发出蛙鸣的青蛙数目的最大值即可
      if (flogNum > ret) {
        ret = flogNum;
      }
    } else {
      // 没有上一个有效蛙鸣
      if (cnt[t - 1] === 0) {
        return -1;
      }
      // 上一个有效蛙鸣使用结束后将其删除
      // 避免影响下一次有效蛙鸣的判断
      cnt[t - 1]--;
      if (c === "k") {
        // 一只青蛙完成了完整的一次蛙鸣
        flogNum--;
      } else {
        // 记录当前蛙鸣
        cnt[t]++;
      }
    }
  }
  // 若遍历完成还有正在发出蛙鸣的青蛙，说明croakOfFrogs不是若干有效的蛙鸣混合而成
  if (flogNum > 0) {
    return -1;
  }
  return ret;
}
// @lc code=end
