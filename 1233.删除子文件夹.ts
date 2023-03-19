/*
 * @lc app=leetcode.cn id=1233 lang=typescript
 *
 * [1233] 删除子文件夹
 */

// @lc code=start
// 排序
/* function removeSubfolders(folder: string[]): string[] {
  // 文件夹按字典序升序排序
  folder.sort();
  const ret = [folder[0]];
  for (let i = 1; i < folder.length; i++) {
    const pre = ret[ret.length - 1].length;
    // 对于每一个folder[i]，如果folder[i−1]恰好是它的前缀，
    // 并且folder[i]第一个多出的字符是/，
    // 那么我们就可以把folder[i]删除。
    if (
      !(
        pre < folder[i].length &&
        ret[ret.length - 1] === folder[i].slice(0, pre) &&
        folder[i][pre] === "/"
      )
    ) {
      ret.push(folder[i]);
    }
  }
  return ret;
} */

// 字典树
class Trie {
  ref: number;
  children: Map<string, Trie>;
  constructor() {
    // 如果ref≥0，说明该节点对应着folder[ref]，
    // 否则(ref=−1)说明该节点只是一个中间节点。
    this.ref = -1;
    this.children = new Map();
  }
}
function removeSubfolders(folder: string[]): string[] {
  const split = (s: string) => {
    const ret: string[] = [];
    let cur = "";
    for (const c of s) {
      if (c === "/") {
        ret.push(cur);
        cur = "";
      } else {
        cur += c;
      }
    }
    ret.push(cur);
    return ret;
  };
  const root = new Trie();
  for (let i = 0; i < folder.length; i++) {
    const path = split(folder[i]);
    let cur = root;
    for (const name of path) {
      if (!cur.children.has(name)) {
        cur.children.set(name, new Trie());
      }
      cur = cur.children.get(name)!;
    }
    cur.ref = i;
  }
  const ret = [];
  const dfs = (folder: string[], ret: string[], cur: Trie) => {
    if (cur.ref !== -1) {
      ret.push(folder[cur.ref]);
      return;
    }
    for (const child of cur.children.values()) {
      dfs(folder, ret, child);
    }
  };
  dfs(folder, ret, root);
  return ret;
}
// @lc code=end
