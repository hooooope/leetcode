/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class DLinkedNode {
  prev: DLinkedNode | null = null;
  next: DLinkedNode | null = null;
  constructor(public key: number = 0, public value: number = 0) {}
}

class LRUCache {
  map: Map<number, DLinkedNode> = new Map();
  head = new DLinkedNode();
  tail = new DLinkedNode();
  size = 0;
  constructor(public capacity: number) {
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    const node = this.map.get(key);
    if (node) {
      this.moveToHead(node);
      return node.value;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    const node = this.map.get(key);
    if (node) {
      node.value = value;
      this.moveToHead(node);
    } else {
      const newNode = new DLinkedNode(key, value);
      this.map.set(key, newNode);
      this.addToHead(newNode);
      this.size++;
      if (this.size > this.capacity) {
        const tail = this.removeTail();
        this.map.delete(tail.key);
        this.size--;
      }
    }
  }

  moveToHead(node: DLinkedNode) {
    this.removeNode(node);
    this.addToHead(node);
  }

  removeNode(node: DLinkedNode) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  addToHead(node: DLinkedNode) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  removeTail() {
    const ret = this.tail.prev!;
    this.removeNode(ret);
    return ret;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
