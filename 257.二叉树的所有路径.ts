/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
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
/* function binaryTreePaths(root: TreeNode | null): string[] {
  const ret: string[] = [];
  const constructPaths = (root: TreeNode | null, path: string) => {
    if (!root) return;
    path += root.val.toString();
    if (!root.left && !root.right) {
      ret.push(path);
    } else {
      path += "->";
      constructPaths(root.left, path);
      constructPaths(root.right, path);
    }
  };
  constructPaths(root, "");
  return ret;
} */

// 广度优先
function binaryTreePaths(root: TreeNode | null): string[] {
  const ret: string[] = [];
  if (!root) return ret;
  const nodeQueue: TreeNode[] = [root];
  const pathQueue: string[] = [root.val.toString()];
  while (nodeQueue.length) {
    const node = nodeQueue.shift();
    const path = pathQueue.shift()!;
    if (!node.left && !node.right) {
      ret.push(path);
    } else {
      if (node.left) {
        nodeQueue.push(node.left);
        pathQueue.push(`${path}->${node.left.val.toString()}`);
      }
      if (node.right) {
        nodeQueue.push(node.right);
        pathQueue.push(`${path}->${node.right.val.toString()}`);
      }
    }
  }
  return ret;
}
// @lc code=end
