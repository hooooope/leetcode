/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
/* function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const process = (
    indexMap: Map<number, number>,
    preorder: number[],
    inorder: number[],
    preorder_left: number,
    preorder_right: number,
    inorder_left: number,
    inorder_right: number
  ) => {
    if (preorder_left > preorder_right) {
      return null;
    }
    // 前序遍历中的第一个节点就是根节点
    const preorder_root = preorder_left;
    // 在中序遍历中定位根节点
    const inorder_root = indexMap.get(preorder[preorder_root])!;
    const root = new TreeNode(preorder[preorder_root]);
    // 左子树中的节点数量
    const size_left_subtree = inorder_root - inorder_left;
    root.left = process(
      indexMap,
      preorder,
      inorder,
      preorder_left + 1,
      preorder_left + size_left_subtree,
      inorder_left,
      inorder_root - 1
    );
    root.right = process(
      indexMap,
      preorder,
      inorder,
      preorder_left + size_left_subtree + 1,
      preorder_right,
      inorder_root + 1,
      inorder_right
    );
    return root;
  };
  const n = preorder.length;
  // key代表树的值
  // value代表对应的的值在中序遍历中的索引
  const indexMap = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    indexMap.set(inorder[i], i);
  }
  return process(indexMap, preorder, inorder, 0, n - 1, 0, n - 1);
} */

// 迭代
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) {
    return null;
  }
  const root = new TreeNode(preorder[0]);
  const stack: TreeNode[] = [root];
  let inorderIndex = 0;
  for (let i = 1; i < preorder.length; i++) {
    const preorderVal = preorder[i];
    let node = stack[stack.length - 1];
    if (node.val !== inorder[inorderIndex]) {
      // 栈顶元素不等于inorderIndex指向的元素，说明preorderVal为栈顶元素的左子节点
      node.left = new TreeNode(preorderVal);
      stack.push(node.left);
    } else {
      // 否则，preorderVal为栈中某个元素的右子节点
      while (
        stack.length &&
        stack[stack.length - 1].val === inorder[inorderIndex]
      ) {
        node = stack.pop();
        inorderIndex++;
      }
      node.right = new TreeNode(preorderVal);
      stack.push(node.right);
    }
  }
  return root;
}
// @lc code=end
