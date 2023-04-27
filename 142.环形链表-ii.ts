/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

// 哈希表
/* function detectCycle(head: ListNode | null): ListNode | null {
  const set = new Set<ListNode>();
  while (head) {
    if (set.has(head)) {
      return head;
    }
    set.add(head);
    head = head.next;
  }
  return null;
} */

// 快慢指针
function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  let slow = head;
  let fast = head;
  while (fast) {
    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return null;
    }
    if (slow === fast) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
}
// @lc code=end
