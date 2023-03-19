/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层序遍历 II
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

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  const ret: number[][] = [];
  const queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length) {
    const n = queue.length;
    const layer: number[] = [];
    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      layer.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    ret.unshift(layer);
  }
  return ret;
}
// @lc code=end
