/*
 * @lc app=leetcode.cn id=1487 lang=typescript
 *
 * [1487] 保证文件名唯一
 */

// @lc code=start
function getFolderNames(names: string[]): string[] {
  const addSuffix = (name: string, k: number) => {
    return `${name}(${k})`;
  };
  const map = new Map<string, number>();
  const ret: string[] = new Array(names.length);
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (!map.has(name)) {
      ret[i] = name;
      map.set(name, 1);
    } else {
      let k = map.get(name)!;
      while (map.has(addSuffix(name, k))) {
        k++;
      }
      ret[i] = addSuffix(name, k);
      map.set(name, k + 1);
      map.set(addSuffix(name, k), 1);
    }
  }
  return ret;
}
// @lc code=end
