/*
 * @lc app=leetcode.cn id=1026 lang=typescript
 *
 * [1026] 节点与其祖先之间的最大差值
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

/* function maxAncestorDiff(root: TreeNode): number {
  // 计算某个根节点与其子节点的最大差值
  const process = (
    root: TreeNode,
    node: TreeNode | null,
    diff: number
  ): number => {
    if (node === null) {
      return diff;
    }
    diff = Math.max(diff, Math.abs(root.val - node.val));
    const p1 = process(root, node.left, diff);
    const p2 = process(root, node.right, diff);
    return Math.max(p1, p2);
  };
  // 以每个节点为根节点，计算根节点与其子节点的最大差值
  const travel = (root: TreeNode | null, diff: number): number => {
    if (root === null) {
      return diff;
    }
    diff = Math.max(diff, process(root, root, 0));
    const p1 = travel(root.left, diff);
    const p2 = travel(root.right, diff);
    return Math.max(p1, p2);
  };
  return travel(root, 0);
} */

function maxAncestorDiff(root: TreeNode): number {
  const dfs = (root: TreeNode | null, min: number, max: number) => {
    if (root === null) {
      return 0;
    }
    const diff = Math.max(Math.abs(root.val - max), Math.abs(root.val - min));
    min = Math.min(min, root.val);
    max = Math.max(max, root.val);
    const p1 = dfs(root.left, min, max);
    const p2 = dfs(root.right, min, max);
    return Math.max(diff, p1, p2);
  };
  return dfs(root, root.val, root.val);
}
// @lc code=end
