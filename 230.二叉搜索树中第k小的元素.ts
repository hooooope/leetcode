/*
 * @lc app=leetcode.cn id=230 lang=typescript
 *
 * [230] 二叉搜索树中第K小的元素
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

// 中序遍历
/* function kthSmallest(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    k--;
    if (k === 0) {
      break;
    }
    root = root.right;
  }
  return root.val;
} */

// 记录子树的节点数
class MyBst {
  nodeNum = new Map<TreeNode, number>();

  constructor(public root: TreeNode | null) {
    this.countNodeNum(root);
  }

  // 统计以node为根节点的子树的节点数
  countNodeNum(node: TreeNode | null) {
    if (node === null) {
      return 0;
    }
    this.nodeNum.set(
      node,
      1 + this.countNodeNum(node.left) + this.countNodeNum(node.right)
    );
    return this.nodeNum.get(node)!;
  }

  // 获取以node为根节点的子树的节点数
  getNodeNum(node: TreeNode) {
    return this.nodeNum.get(node) || 0;
  }

  // 返回二叉搜索树中第k小的元素
  kthSmallest(k: number) {
    let node = this.root;
    while (node) {
      const left = this.getNodeNum(node.left);
      if (left < k - 1) {
        node = node.right;
        k -= left + 1;
      } else if (left === k - 1) {
        break;
      } else {
        node = node.left;
      }
    }
    return node.val;
  }
}

function kthSmallest(root: TreeNode | null, k: number): number {
  const bst = new MyBst(root);
  return bst.kthSmallest(k);
}
// @lc code=end
