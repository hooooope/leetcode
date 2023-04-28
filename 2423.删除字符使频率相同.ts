/*
 * @lc app=leetcode.cn id=2423 lang=typescript
 *
 * [2423] 删除字符使频率相同
 */

// @lc code=start
// 枚举
/* function equalFrequency(word: string): boolean {
  const cnt: number[] = new Array(26).fill(0);
  for (const char of word) {
    cnt[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i < 26; i++) {
    if (cnt[i] === 0) {
      continue;
    }
    cnt[i]--;
    const frequency = new Set<number>();
    for (const f of cnt) {
      if (f > 0) {
        frequency.add(f);
      }
    }
    if (frequency.size === 1) {
      return true;
    }
    cnt[i]++;
  }
  return false;
} */

/* 
  枚举+哈希表
  在方法一中，我们每次枚举要删除的字符后，都要重新统计所有字符出现的频率，造成了重复的运算
  这里我们可以使用哈希表进行优化，在枚举之前，先统计不同字符频率的频率
*/
function equalFrequency(word: string): boolean {
  const cnt: number[] = new Array(26).fill(0);
  for (const char of word) {
    cnt[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  // freqCount.get(i)表示出现了i次的字母有freqCount.get(i)个
  const freqCount = new Map<number, number>();
  for (const c of cnt) {
    if (c > 0) {
      freqCount.set(c, (freqCount.get(c) || 0) + 1);
    }
  }
  // 假如一个字符出现的频率是c
  for (const c of cnt) {
    if (c === 0) {
      continue;
    }
    // 那么这个字符删除一个后，频率就从c变成了c-1
    // 我们只需要更新哈希表中c和c-1的频率
    freqCount.set(c, freqCount.get(c)! - 1);
    // 要注意更新哈希表后，如果一个键对中value=0，我们需要手动删除key
    if (freqCount.get(c) === 0) {
      freqCount.delete(c);
    }
    if (c - 1 > 0) {
      freqCount.set(c - 1, (freqCount.get(c - 1) || 0) + 1);
    }
    // 再判断哈希表的大小是否为一就可以了
    // 如果哈希表大小为1，则说明剩余每个字母出现频率相同
    if (freqCount.size === 1) {
      return true;
    }
    // 反之说明删除当前字符不可行，我们把这个字符的频率就从c-1变成c，更新哈希表进行还原
    if (c - 1 > 0) {
      freqCount.set(c - 1, freqCount.get(c - 1)! - 1);
      if (freqCount.get(c - 1) === 0) {
        freqCount.delete(c - 1);
      }
    }
    freqCount.set(c, (freqCount.get(c) || 0) + 1);
  }
  // 最后，我们尝试过所有不同字符后，还没有找到能删除的字符，使得满足要求，我们返回false
  return false;
}
// @lc code=end
