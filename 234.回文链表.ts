/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

/* function isPalindrome(head: ListNode | null): boolean {
  const nums: number[] = [];
  let curNode = head;
  while (curNode) {
    nums.push(curNode.val);
    curNode = curNode.next;
  }
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    if (nums[low] !== nums[high]) {
      return false;
    }
    low++;
    high--;
  }
  return true;
} */

/* let frontPointer;
function isPalindrome(head: ListNode | null): boolean {
  frontPointer = head;
  return recursivelyCheck(head);
}
function recursivelyCheck(curNode: ListNode | null): boolean {
  if (curNode) {
    if (!recursivelyCheck(curNode.next)) {
      return false;
    }
    if (curNode.val !== frontPointer.val) {
      return false;
    }
    frontPointer = frontPointer.next;
  }
  return true;
} */

/* 
  1.找到中间节点（属于前半部分）
  2.反转后半部分链表
  3.前半部分和后半部分比较
  4.还原后半部分链表
*/
function isPalindrome(head: ListNode | null): boolean {
  if (!head) return true;
  const firstHalfEnd = endOfFirstHalf(head);
  const secondHalfStart = reverseList(firstHalfEnd.next);

  let ret = true;
  let p1 = head;
  let p2 = secondHalfStart;
  while (p2) {
    if (p1.val !== p2.val) {
      ret = false;
      break;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  firstHalfEnd.next = reverseList(secondHalfStart);
  return ret;
}
function endOfFirstHalf(head: ListNode): ListNode {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
function reverseList(head: ListNode): ListNode {
  let pre = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
// @lc code=end
