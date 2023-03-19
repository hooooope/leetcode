/*
 * @lc app=leetcode.cn id=297 lang=typescript
 *
 * [297] 二叉树的序列化与反序列化
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

// 深度优先搜索
/* // Encodes a tree to a single string.
function serialize(root: TreeNode | null): string {
  const list: (number | string)[] = [];
  const preOrder = (root: TreeNode | null) => {
    if (root === null) {
      list.push("#");
      return;
    }
    list.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
  };
  preOrder(root);
  return list.join(",");
}
// Decodes your encoded data to tree.
function deserialize(data: string): TreeNode | null {
  if (data.length === 0) {
    return null;
  }
  const construct = (queue: string[]): TreeNode | null => {
    const val = queue.shift();
    if (val === "#") {
      return null;
    }
    const root = new TreeNode(Number(val));
    root.left = construct(queue);
    root.right = construct(queue);
    return root;
  };
  const queue = data.split(",");
  return construct(queue);
} */

// 括号表示编码+递归下降解码
// Encodes a tree to a single string.
function serialize(root: TreeNode | null): string {
  if (root === null) {
    return "X";
  }
  const left = "(" + serialize(root.left) + ")";
  const right = "(" + serialize(root.right) + ")";
  return left + root.val + right;
}
// Decodes your encoded data to tree.
function deserialize(data: string): TreeNode | null {
  const parse = (data: string, ptr: number[]): TreeNode | null => {
    if (data[ptr[0]] === "X") {
      ptr[0]++;
      return null;
    }
    const node = new TreeNode(0);
    node.left = parseSubtree(data, ptr); // 解析左子树
    node.val = parseVal(data, ptr); // 解析当前节点的值
    node.right = parseSubtree(data, ptr); // 解析右子树
    return node;
  };
  const parseSubtree = (data: string, ptr: number[]): TreeNode | null => {
    ptr[0]++; // 跳过左括号
    const subtree = parse(data, ptr);
    ptr[0]++; // 跳过右括号
    return subtree;
  };
  const parseVal = (data: string, ptr: number[]) => {
    let x = 0;
    let sgn = 1;
    // 处理负号
    if (isNaN(Number(data[ptr[0]]))) {
      sgn = -1;
      ptr[0]++;
    }
    while (!isNaN(Number(data[ptr[0]]))) {
      x = x * 10 + Number(data[ptr[0]++]);
    }
    return x * sgn;
  };
  const ptr = [0];
  return parse(data, ptr);
}

/* let ret: any = serialize({
  val: 5,
  left: {
    val: 4,
    left: null,
    right: null,
  },
  right: {
    val: 6,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
});
ret = deserialize("((X)4(X))5(((X)3(X))6((X)7(X)))");
console.log(ret); */

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
