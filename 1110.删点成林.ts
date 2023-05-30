/*
 * @lc app=leetcode.cn id=1110 lang=typescript
 *
 * [1110] 删点成林
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
/* class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
} */

function delNodes(
  root: TreeNode | null,
  to_delete: number[]
): Array<TreeNode | null> {
  const dfs = (
    node: TreeNode | null,
    isRoot: boolean,
    toDeleteSet: Set<number>,
    roots: TreeNode[]
  ): TreeNode | null => {
    if (node === null) {
      return null;
    }
    // 当前节点是否需要删除，决定了左/右子节点是否有可能成为根节点
    // 如果当前节点需要删除，且左/右子节点不需要删除，则左/右子节点将成为根节点
    const deleted = toDeleteSet.has(node.val);
    node.left = dfs(node.left, deleted, toDeleteSet, roots);
    node.right = dfs(node.right, deleted, toDeleteSet, roots);
    if (deleted) {
      return null;
    } else {
      if (isRoot) {
        roots.push(node);
      }
      return node;
    }
  };
  const toDeleteSet = new Set(to_delete);
  const ret: TreeNode[] = [];
  dfs(root, true, toDeleteSet, ret);
  return ret;
}
// @lc code=end
