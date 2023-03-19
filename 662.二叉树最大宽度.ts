/*
 * @lc app=leetcode.cn id=662 lang=typescript
 *
 * [662] 二叉树最大宽度
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
/* function widthOfBinaryTree(root: TreeNode | null): number {
  let ret = 0;
  const arr: [TreeNode, bigint][] = [];
  arr.push([root, 1n]);
  while (arr.length) {
    let n = arr.length;
    ret = Math.max(ret, Number(arr[n - 1][1] - arr[0][1] + 1n));
    while (n) {
      const [node, num] = arr.shift()!;
      if (node.left) {
        arr.push([node.left, num * 2n]);
      }
      if (node.right) {
        arr.push([node.right, num * 2n + 1n]);
      }
      n--;
    }
  }
  return ret;
} */

/* 
  题目中树最多存在3000个节点，以单枝树形式输入的话，
  树的索引会超过Number类型的最大值，使用bigint来防止溢出，
  也可以每次将索引与Number.MAX_SAFE_INTEGER取余来防止溢出
*/
function widthOfBinaryTree(root: TreeNode | null): number {
  let ret = 0;
  let arr: [TreeNode, bigint][] = [];
  arr.push([root, 1n]);
  while (arr.length) {
    const tmp: [TreeNode, bigint][] = [];
    for (const [node, index] of arr) {
      if (node.left) {
        tmp.push([node.left, index * 2n]);
      }
      if (node.right) {
        tmp.push([node.right, index * 2n + 1n]);
      }
    }
    ret = Math.max(ret, Number(arr[arr.length - 1][1] - arr[0][1] + 1n));
    arr = tmp;
  }
  return ret;
}
// @lc code=end
