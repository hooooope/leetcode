/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
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
// DFS
/* function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0;
  let sumOfLeft = 0;
  sumOfLeft += sumOfLeftLeaves(root.left);
  sumOfLeft += sumOfLeftLeaves(root.right);
  if (root.left && !root.left.left && !root.left.right) {
    sumOfLeft += root.left.val;
  }
  return sumOfLeft;
} */

// DFS
/* function sumOfLeftLeaves(root: TreeNode | null): number {
  return root ? dfs(root) : 0;
}
function dfs(node: TreeNode): number {
  let ret = 0;
  if (node.left) {
    ret += isLeafNode(node.left) ? node.left.val : dfs(node.left);
  }
  if (node.right && !isLeafNode(node.right)) {
    ret += dfs(node.right);
  }
  return ret;
}
function isLeafNode(node: TreeNode): boolean {
  return !node.left && !node.right;
} */

// BFS
function sumOfLeftLeaves(root: TreeNode | null): number {
  let ret = 0;
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node.left) {
      if (isLeafNode(node.left)) {
        ret += node.left.val;
      } else {
        queue.push(node.left);
      }
    }
    if (node.right && !isLeafNode(node.right)) {
      queue.push(node.right);
    }
  }
  return ret;
}
function isLeafNode(node: TreeNode): boolean {
  return !node.left && !node.right;
}
// @lc code=end
