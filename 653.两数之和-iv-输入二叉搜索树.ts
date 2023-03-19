/*
 * @lc app=leetcode.cn id=653 lang=typescript
 *
 * [653] 两数之和 IV - 输入二叉搜索树
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

// DFS + 哈希表
/* function findTarget(root: TreeNode | null, k: number): boolean {
  const set = new Set<number>();
  const helper = (root: TreeNode | null, k: number) => {
    if (!root) {
      return false;
    }
    if (set.has(k - root.val)) {
      return true;
    }
    set.add(root.val);
    return helper(root.left, k) || helper(root.right, k);
  };
  return helper(root, k);
} */

// BFS + 哈希表
/* function findTarget(root: TreeNode | null, k: number): boolean {
  const set = new Set<number>();
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const node = queue.shift()!;
    if (set.has(k - node.val)) {
      return true;
    }
    set.add(node.val);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return false;
} */

// DFS + 双指针
/* function findTarget(root: TreeNode | null, k: number): boolean {
  const nums: number[] = [];
  const inOrderTraversal = (node: TreeNode | null) => {
    if (!node) {
      return;
    }
    inOrderTraversal(node.left);
    nums.push(node.val);
    inOrderTraversal(node.right);
  };
  inOrderTraversal(root);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] < k) {
      left++;
    } else if (nums[left] + nums[right] > k) {
      right--;
    } else {
      return true;
    }
  }
  return false;
} */

// BFS + 双指针
function findTarget(root: TreeNode | null, k: number): boolean {
  const getLeft = (stack: TreeNode[]) => {
    const root = stack.pop()!;
    let node = root.right;
    while (node) {
      stack.push(node);
      node = node.left;
    }
    return root;
  };
  const getRight = (stack: TreeNode[]) => {
    const root = stack.pop()!;
    let node = root.left;
    while (node) {
      stack.push(node);
      node = node.right;
    }
    return root;
  };
  let left = root;
  let right = root;
  const leftStack: TreeNode[] = [left];
  const rightStack: TreeNode[] = [right];
  // 将left指向最小值
  while (left.left) {
    leftStack.push(left.left);
    left = left.left;
  }
  // 将right指向最大值
  while (right.right) {
    rightStack.push(right.right);
    right = right.right;
  }
  while (left !== right) {
    if (left.val + right.val === k) {
      return true;
    } else if (left.val + right.val < k) {
      // 按中序遍历，获取left节点的一下个元素
      left = getLeft(leftStack);
    } else if (left.val + right.val > k) {
      // 按中序遍历，获取right节点的上一个元素
      right = getRight(rightStack);
    }
  }
  return false;
}
// @lc code=end
