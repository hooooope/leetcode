/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
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
/* export {};

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
} */

// 自顶向下归并排序
/* function sortList(head: ListNode | null): ListNode | null {
  const merge = (head1: ListNode, head2: ListNode) => {
    const dummyHead = new ListNode();
    let temp = dummyHead;
    let temp1: ListNode | null = head1;
    let temp2: ListNode | null = head2;
    while (temp1 && temp2) {
      if (temp1.val <= temp2.val) {
        temp.next = temp1;
        temp1 = temp1.next;
      } else {
        temp.next = temp2;
        temp2 = temp2.next;
      }
      temp = temp.next;
    }
    if (temp1) {
      temp.next = temp1;
    } else if (temp2) {
      temp.next = temp2;
    }
    return dummyHead.next;
  };
  const toSortList = (head: ListNode | null, tail: ListNode | null) => {
    if (head === null) {
      return head;
    }
    if (head.next === tail) {
      head.next = null;
      return head;
    }
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (slow && fast && fast !== tail) {
      slow = slow.next;
      fast = fast.next;
      if (fast && fast !== tail) {
        fast = fast.next;
      }
    }
    const mid = slow;
    return merge(toSortList(head, mid), toSortList(mid, tail));
  };
  return toSortList(head, null);
} */

// 自底向上归并排序
function sortList(head: ListNode | null): ListNode | null {
  const merge = (head1: ListNode | null, head2: ListNode | null) => {
    const dummyHead = new ListNode();
    let temp = dummyHead;
    let temp1 = head1;
    let temp2 = head2;
    while (temp1 && temp2) {
      if (temp1.val <= temp2.val) {
        temp.next = temp1;
        temp1 = temp1.next;
      } else {
        temp.next = temp2;
        temp2 = temp2.next;
      }
      temp = temp.next;
    }
    if (temp1) {
      temp.next = temp1;
    } else if (temp2) {
      temp.next = temp2;
    }
    return dummyHead.next;
  };
  if (head === null) {
    return head;
  }
  let curr: ListNode | null = head;
  let length = 0;
  while (curr) {
    length++;
    curr = curr.next;
  }
  const dummyHead = new ListNode(0, head);
  for (let subLength = 1; subLength < length; subLength <<= 1) {
    let prev = dummyHead;
    curr = dummyHead.next;
    while (curr) {
      let head1 = curr;
      for (let i = 1; i < subLength && curr.next; i++) {
        curr = curr.next;
      }
      let head2: ListNode | null = curr.next;
      curr.next = null;
      curr = head2;
      for (let i = 1; i < subLength && curr && curr.next; i++) {
        curr = curr.next;
      }
      let next: ListNode | null = null;
      if (curr) {
        next = curr.next;
        curr.next = null;
      }
      const merged = merge(head1, head2);
      prev.next = merged;
      while (prev.next) {
        prev = prev.next;
      }
      curr = next;
    }
  }
  return dummyHead.next;
}
// @lc code=end
