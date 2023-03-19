/*
 * @lc app=leetcode.cn id=872 lang=typescript
 *
 * [872] 叶子相似的树
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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const leaves1: number[] = [];
  const leaves2: number[] = [];
  const dfs = (root: TreeNode | null, leaves: number[]) => {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null) {
      leaves.push(root.val);
    }
    dfs(root.left, leaves);
    dfs(root.right, leaves);
  };
  dfs(root1, leaves1);
  dfs(root2, leaves2);
  return leaves1.toString() === leaves2.toString();
  /* if (leaves1.length !== leaves2.length) {
    return false;
  }
  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) {
      return false;
    }
  }
  return true; */
}
// @lc code=end
