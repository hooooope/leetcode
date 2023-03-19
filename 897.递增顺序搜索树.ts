/*
 * @lc app=leetcode.cn id=897 lang=typescript
 *
 * [897] 递增顺序搜索树
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
// 生成新的树
function increasingBST(root: TreeNode | null): TreeNode | null {
  const nodeList: TreeNode[] = [];
  const travel = (root: TreeNode | null) => {
    if (root === null) {
      return;
    }
    travel(root.left);
    nodeList.push(root);
    travel(root.right);
  };
  travel(root);
  const dummyNode = new TreeNode(-1);
  let current = dummyNode;
  for (const node of nodeList) {
    current.right = new TreeNode(node.val);
    current = current.right;
  }
  return dummyNode.right;
}

// 原地修改
/* function increasingBST(root: TreeNode | null): TreeNode | null {
  const dummyNode = new TreeNode(-1);
  let current = dummyNode;
  const travel = (root: TreeNode | null) => {
    if (root === null) {
      return;
    }
    travel(root.left);
    current.right = root;
    root.left = null;
    current = root;
    travel(root.right);
  };
  travel(root);
  return dummyNode.right;
} */
// @lc code=end
