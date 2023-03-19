/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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
// 中序遍历（递归）
/* function isValidBST(root: TreeNode | null): boolean {
  let preVal = -Number.MAX_VALUE;
  const travel = (root: TreeNode | null): boolean => {
    if (root === null) {
      return true;
    }
    const leftRet = travel(root.left);
    if (root.val <= preVal) {
      return false;
    }
    preVal = root.val;
    const rightRet = travel(root.right);
    return leftRet && rightRet;
  };
  return travel(root);
} */

// 中序遍历（非递归）
/* function isValidBST(root: TreeNode | null): boolean {
  let preVal = -Number.MAX_VALUE;
  const stack: TreeNode[] = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop()!;
    if (root.val <= preVal) {
      return false;
    }
    preVal = root.val;
    root = root.right;
  }
  return true;
} */

/* 
  递归
  1.若左子树不为空，则左子树上所有节点的值均小于它的根节点的值；
  2.若右子树不为空，则右子树上所有节点的值均大于它的根节点的值；
  3.它的左右子树也为二叉搜索树；
*/
/* function isValidBST(root: TreeNode | null): boolean {
  const helper = (root: TreeNode | null, lower: number, upper: number) => {
    if (root === null) {
      return true;
    }
    if (root.val <= lower || root.val >= upper) {
      return false;
    }
    return (
      helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
    );
  };
  return helper(root, -Infinity, Infinity);
} */

// 动态规划
interface IResult {
  isBST: boolean;
  min: number;
  max: number;
}
function isValidBST(root: TreeNode | null): boolean {
  const helper = (root: TreeNode | null): IResult | null => {
    if (root === null) {
      return null;
    }
    const leftRet = helper(root.left);
    const rightRet = helper(root.right);
    let isBST = true;
    if (leftRet && (!leftRet.isBST || root.val <= leftRet.max)) {
      isBST = false;
    }
    if (rightRet && (!rightRet.isBST || root.val >= rightRet.min)) {
      isBST = false;
    }
    let min = root.val;
    let max = root.val;
    if (leftRet) {
      min = Math.min(min, leftRet.min);
      // max = Math.max(max, leftRet.max);
    }
    if (rightRet) {
      // min = Math.min(min, rightRet.min);
      max = Math.max(max, rightRet.max);
    }
    return {
      isBST,
      min,
      max,
    };
  };
  const ret = helper(root);
  return ret ? ret.isBST : false;
}
// @lc code=end
