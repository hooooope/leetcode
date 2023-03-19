/*
 * @lc app=leetcode.cn id=1145 lang=typescript
 *
 * [1145] 二叉树着色游戏
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

function btreeGameWinningMove(
  root: TreeNode | null,
  n: number,
  x: number
): boolean {
  let xNode: TreeNode | null = null;
  const findNode = (node: TreeNode | null, x: number) => {
    if (node === null || xNode) {
      return;
    }
    if (node.val === x) {
      xNode = node;
    }
    findNode(node.left, x);
    findNode(node.right, x);
  };
  const getSubtreeSize = (node: TreeNode | null) => {
    if (node === null) {
      return 0;
    }
    return 1 + getSubtreeSize(node.left) + getSubtreeSize(node.right);
  };
  findNode(root, x);
  const leftSize = getSubtreeSize(xNode.left);
  if (leftSize >= Math.floor((n + 1) / 2)) {
    return true;
  }
  const rightSize = getSubtreeSize(xNode.right);
  if (rightSize >= Math.floor((n + 1) / 2)) {
    return true;
  }
  const remain = n - 1 - leftSize - rightSize;
  return remain >= Math.floor((n + 1) / 2);
}
// @lc code=end
