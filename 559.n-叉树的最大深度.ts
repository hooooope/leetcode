/*
 * @lc app=leetcode.cn id=559 lang=typescript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */
// BFS 两个队列
/* function maxDepth(root: Node | null): number {
  if (!root) {
    return 0;
  }
  let ret = 1;
  const nodeQueue: Node[] = [root];
  const depthQueue: number[] = [1];
  while (nodeQueue.length) {
    const node = nodeQueue.shift()!;
    const depth = depthQueue.shift()!;
    const children = node.children;
    if (children) {
      for (let i = 0; i < children.length; i++) {
        nodeQueue.push(children[i]);
        depthQueue.push(depth + 1);
        ret = Math.max(ret, depth + 1);
      }
    }
  }
  return ret;
} */

// BFS 一个队列
/* function maxDepth(root: Node | null): number {
  if (!root) {
    return 0;
  }
  let ret = 0;
  const queue: Node[] = [root];
  while (queue.length) {
    let size = queue.length;
    while (size) {
      const node = queue.shift();
      const children = node.children;
      for (const child of children) {
        queue.push(child);
      }
      size--;
    }
    ret++;
  }
  return ret;
} */

// DFS
function maxDepth(root: Node | null): number {
  if (!root) {
    return 0;
  }
  let maxChildDepth = 0;
  const children = root.children;
  for (const child of children) {
    const childDepth = maxDepth(child);
    maxChildDepth = Math.max(maxChildDepth, childDepth);
  }
  return maxChildDepth + 1;
}
// @lc code=end
