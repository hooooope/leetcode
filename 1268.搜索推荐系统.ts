/*
 * @lc app=leetcode.cn id=1268 lang=typescript
 *
 * [1268] 搜索推荐系统
 */

// @lc code=start
const letter2Index = (letter: string) => {
  return letter.charCodeAt(0) - "a".charCodeAt(0);
};

class Trie {
  child = new Array<Trie | null>(26).fill(null);
  words: string[] = [];

  addWord(this: Trie, word: string) {
    let curr = this;
    for (const letter of word) {
      const index = letter2Index(letter);
      if (!curr.child[index]) {
        curr.child[index] = new Trie();
      }
      curr = curr.child[index]!;
      curr.words.push(word);
    }
  }
}

// 前缀树
function suggestedProducts(products: string[], searchWord: string): string[][] {
  const m = searchWord.length;
  const ret: string[][] = new Array(m).fill(0).map(() => new Array());
  const root = new Trie();
  for (const product of products) {
    root.addWord(product);
  }
  let curr = root;
  for (let i = 0; i < m; i++) {
    const buffer: string[] = [];
    const index = letter2Index(searchWord[i]);
    if (curr.child[index] === null) {
      break;
    }
    curr = curr.child[index]!;
    curr.words.sort((a, b) => (a > b ? 1 : -1));
    for (let i = 0; i < curr.words.length && buffer.length < 3; i++) {
      buffer.push(curr.words[i]);
    }
    ret[i] = buffer;
  }
  return ret;
}
// @lc code=end
