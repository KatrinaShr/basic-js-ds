const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class linkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  add(value) {
      const newNode = new ListNode(value);

      // Если нет head или tail, делаем новым узлом head и tail.
      if (!this.head || !this.tail) {
          this.head = newNode;
          this.tail = newNode;

          return this;
      }
      // Присоединяем новый узел к концу связного списка.
      // Берём последний узел и указываем, что его next будет новым узлом.
      this.tail.next = newNode;

      // Переназначаем tail на новый узел.
      this.tail = newNode;
      return this;
  }

  remove(value) {
      if (!this.head) {
          return null;
      }

      let deletedNode = null;
      let current = this.head;

      // Если head должен быть удален, то делаем следующий узел новым head.
      while (this.head && this.head.value === value) {
          deletedNode = this.head;
          this.head = this.head.next;
      }

      if (current !== null) {
          while (current.next) {
              if (current.next.value === value) {
                  deletedNode = current.next;
                  current.next = current.next.next;
              } else {
                  current = current.next;
              }
          }
      }
      if (this.tail && this.tail.value === value) {
          this.tail = current;
      }
      return deletedNode ? this : null;
  }

  conversionToArray() {
      let current = this.head;
      let result = [];

      if (current !== null) {
        while (current.next !== null) {
          result.push(current.value); 
          current = current.next;           
      }

      result.push(this.tail.value);
      }
      return result;
  }
}

function removeKFromList(l, k) {
 let nodeItems = new linkedList(l);
 let result = [];

 for (let i=0; i<l.length; i++) {
  nodeItems.add(l[i]);
 }

 nodeItems.remove(k);
 return  nodeItems.conversionToArray().includes(k) ? nodeItems.conversionToArray() : null;
}

module.exports = {
  removeKFromList
};