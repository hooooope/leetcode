/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
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
/* function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    return targetSum === root.val;
  }
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
} */

// 广度优先
/* function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  const nodeQueue: TreeNode[] = [];
  const sumQueue: number[] = [];
  nodeQueue.push(root);
  sumQueue.push(root.val);
  while (nodeQueue.length) {
    const node = nodeQueue.shift();
    const sum = sumQueue.shift();
    if (!node.left && !node.right && sum === targetSum) {
      return true;
    }
    if (node.left) {
      nodeQueue.push(node.left);
      sumQueue.push(sum + node.left.val);
    }
    if (node.right) {
      nodeQueue.push(node.right);
      sumQueue.push(sum + node.right.val);
    }
  }
  return false;
} */

interface pathNode {
  node: TreeNode;
  path: number;
}
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  const queue: pathNode[] = [];
  queue.push({
    node: root,
    path: root.val,
  });
  while (queue.length) {
    const pathNode = queue.shift()!;
    const { node, path } = pathNode;
    if (!node.left && !node.right && path === targetSum) {
      return true;
    }
    if (node.left) {
      queue.push({
        node: node.left,
        path: path + node.left.val,
      });
    }
    if (node.right) {
      queue.push({
        node: node.right,
        path: path + node.right.val,
      });
    }
  }
  return false;
}
// @lc code=end
