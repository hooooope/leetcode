/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// 递归
/* function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) {
    return null;
  }
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
} */

// 迭代
function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let tempNode = dummyHead;
  while (tempNode.next) {
    if (tempNode.next.val === val) {
      tempNode.next = tempNode.next.next;
    } else {
      tempNode = tempNode.next;
    }
  }
  return dummyHead.next;
}
// @lc code=end
