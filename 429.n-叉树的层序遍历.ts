/*
 * @lc app=leetcode.cn id=429 lang=typescript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function levelOrder(root: Node | null): number[][] {
  if (root === null) {
    return [];
  }
  const ret: number[][] = [];
  const queue: Node[] = [root];
  while (queue.length) {
    const length = queue.length;
    const levelList: number[] = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift()!;
      levelList.push(node.val);
      for (const child of node.children) {
        queue.push(child);
      }
    }
    ret.push(levelList);
  }
  return ret;
}
// @lc code=end
