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
      this.length = 0;
  }

  add(value) {
      if (this.length === 0) {
        this.head = new ListNode(value);
      } else {
        let current = this.head;
  
        while(current.next) {
          current = current.next;
        }
  
        current.next = new ListNode(value);
      }
  
      this.length++;
    }

  remove(value) {
      let sizeList = this.length;

      if (!this.head) {
          return null;
      }
      let deletedNode = null;
      let current = this.head;
      let index = 0;
      while (index < sizeList) {
          if (this.head && this.head.value === value) {
              deletedNode = this.head;
              this.head = current.next;
              current = this.head;
          } else {
              let prev = null;

              while (current) {
                  while (current && current.value !== value) {
                      prev = current;
                      current = current.next;
                  }
      
                  if (current && current.next) {
                      prev.next = current.next;
                      current = current.next;
                  } else {
                      prev.next = null;
                      current = null;
                  }
              }
              index++;
              this.length--;
          }  
      }
      return this; 
  }
}

function removeKFromList(l, k) {
 let nodeItems = new linkedList(l);

 for (let i=0; i<l.length; i++) {
  nodeItems.add(l[i]);
 }

 nodeItems.remove(k);
 return nodeItems.head;
}

module.exports = {
  removeKFromList
};