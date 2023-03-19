/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 深度优先
/* function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  let min = Number.MAX_VALUE;
  if (root.left) {
    min = Math.min(minDepth(root.left), min);
  }
  if (root.right) {
    min = Math.min(minDepth(root.right), min);
  }
  return min + 1;
} */

// 广度优先
interface QueueNode {
  node: TreeNode;
  depth: number;
}
/* function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const queue: QueueNode[] = [];
  queue.push({
    node: root,
    depth: 1,
  });
  while (queue.length) {
    const queueNode = queue.shift()!;
    const { node, depth } = queueNode;
    if (!node.left && !node.right) return depth;
    if (node.left) {
      queue.push({
        node: node.left,
        depth: depth + 1,
      });
    }
    if (node.right) {
      queue.push({
        node: node.right,
        depth: depth + 1,
      });
    }
  }
} */

// 广度优先
/* function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  let ret = 0;
  const nodeQueue: TreeNode[] = [root];
  while (nodeQueue.length) {
    ret++;
    let i = nodeQueue.length;
    while (i) {
      const node = nodeQueue.shift();
      if (!node.left && !node.right) {
        return ret;
      }
      if (node.left) {
        nodeQueue.push(node.left);
      }
      if (node.right) {
        nodeQueue.push(node.right);
      }
      i--;
    }
  }
} */
// @lc code=end
