/*
 * @lc app=leetcode.cn id=208 lang=typescript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
// 数组路径
class TrieNode {
  constructor(
    public pass: number = 0,
    public end: number = 0,
    public nexts: TrieNode[] = []
  ) {}
}
class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }
  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      if (!node.nexts[index]) {
        node.nexts[index] = new TrieNode();
      }
      node = node.nexts[index];
      node.pass++;
    }
    node.end++;
  }
  _search(word: string): TrieNode | null {
    let node = this.root;
    for (const char of word) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      if (!node.nexts[index]) {
        return null;
      }
      node = node.nexts[index];
    }
    return node;
  }
  search(word: string): boolean {
    const ret = this._search(word);
    return ret !== null && ret.end > 0;
  }
  startsWith(prefix: string): boolean {
    const ret = this._search(prefix);
    return ret !== null;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
