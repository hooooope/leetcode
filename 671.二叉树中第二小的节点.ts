/*
 * @lc app=leetcode.cn id=671 lang=typescript
 *
 * [671] 二叉树中第二小的节点
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

/* function findSecondMinimumValue(root: TreeNode | null): number {
  let min1 = Number.MAX_VALUE;
  let min2 = Number.MAX_VALUE;
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const node = queue.shift()!;
    if (node.val < min1) {
      min2 = min1;
      min1 = node.val;
    } else if (node.val < min2 && node.val !== min1) {
      min2 = node.val;
    }
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return min2 === Number.MAX_VALUE ? -1 : min2;
} */

function findSecondMinimumValue(root: TreeNode | null): number {
  let ret = -1;
  /* 
    对于任意节点x，其左右孩子要么等于x，要么大于等于x
    因此根节点为二叉树中最小的节点
  */
  const rootVal = root.val;
  const dfs = (node: TreeNode | null) => {
    if (node === null) {
      return;
    }
    /* 
      以当前节点为根的子树中所有节点的值都大于等于ret，
      可以直接回溯，无需对该子树进行遍历
    */
    if (ret !== -1 && node.val >= ret) {
      return;
    }
    if (node.val > rootVal) {
      ret = node.val;
    }
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return ret;
}
// @lc code=end
