/*
 * @lc app=leetcode.cn id=1604 lang=typescript
 *
 * [1604] 警告一小时内使用相同员工卡大于等于三次的人
 */

// @lc code=start
function alertNames(keyName: string[], keyTime: string[]): string[] {
  const ret: string[] = [];
  const map = new Map<string, number[]>();
  for (let i = 0; i < keyName.length; i++) {
    const name = keyName[i];
    const time = keyTime[i];
    if (!map.has(name)) {
      map.set(name, []);
    }
    const hour =
      (time[0].charCodeAt(0) - "0".charCodeAt(0)) * 10 +
      (time[1].charCodeAt(0) - "0".charCodeAt(0));
    const minute =
      (time[3].charCodeAt(0) - "0".charCodeAt(0)) * 10 +
      (time[4].charCodeAt(0) - "0".charCodeAt(0));
    map.get(name)!.push(hour * 60 + minute);
  }
  for (const [name, list] of map.entries()) {
    list.sort((a, b) => a - b);
    for (let i = 2; i < list.length; i++) {
      if (list[i] - list[i - 2] <= 60) {
        ret.push(name);
        break;
      }
    }
  }
  ret.sort();
  return ret;
}
// @lc code=end
