/*
 * @lc app=leetcode.cn id=147 lang=typescript
 *
 * [147] 对链表进行插入排序
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

/* class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
} */

function insertionSortList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head;
  }
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let lastSorted = head;
  let curr = head.next;
  while (curr) {
    if (lastSorted.val <= curr.val) {
      lastSorted = curr;
    } else {
      let prev = dummyHead;
      while (prev.next!.val <= curr.val) {
        prev = prev.next!;
      }
      lastSorted.next = curr.next;
      curr.next = prev.next;
      prev.next = curr;
    }
    curr = lastSorted.next;
  }
  return dummyHead.next;
}
// @lc code=end
