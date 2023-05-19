/*
 * @lc app=leetcode.cn id=1373 lang=typescript
 *
 * [1373] 二叉搜索子树的最大键值和
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

// 递归
class SubTree {
  constructor (public isBST: boolean, public minValue: number, public maxValue: number, public sumValue: number) {}
}
function maxSumBST(root: TreeNode | null): number {
  const INF = 0x3f3f3f3f
  let ret = 0;
  const dfs = (root: TreeNode | null): SubTree => {
    if (root === null) {
      // 为了方便编写代码，对于空子树我们用-∞来表示最大值，用∞来表示最小值，并且将isBST设置为真，sumValue设置为0。这样在父节点判断时，不论是其左子树为空还是右子树为空，都不会影响到条件判断
      return new SubTree(true, INF, -INF, 0)
    }
    const left = dfs(root.left)
    const right = dfs(root.right)
    // 当且仅当以下条件都满足时，以root为根的子树是二叉搜索树：
    if (left.isBST && right.isBST && left.maxValue < root.val && root.val < right.minValue) {
      const sum = root.val + left.sumValue + right.sumValue
      ret = Math.max(ret, sum)
      return new SubTree(true, Math.min(left.minValue, root.val), Math.max(right.maxValue, root.val), sum)
    } else {
      return new SubTree(false, 0, 0, 0)
    }
  }
  dfs(root)
  return ret
};
// @lc code=end

