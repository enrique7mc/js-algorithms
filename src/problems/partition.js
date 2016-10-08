'use strict';
/* Write code to partition a linked list around a value x */
function Node(data) {
    this.data = data;
}

function printList(head){
    let str = '';
    while(head) {
        str += `${head.data} `;
        head = head.next;
    }

    console.log(`${str} -> null`);
}

function partition(head, x) {
    let less = new Node();
    const list1 = less;
    let greater = new Node();
    const list2 = greater;

    let current = head;
    while(current) {
        let next = current.next;
        if(current.data > x) {
            greater.next = current;
            greater = greater.next;
            greater.next = null;
        } else {
            less.next = current;
            less = less.next;
            less.next = null;
        }
        current = next;
    }

    less.next = list2.next;
    return list1.next;
}

const n1 = new Node(4);
const n2 = new Node(1);
const n3 = new Node(8);
const n4 = new Node(10);
const n5 = new Node(2);
const n6 = new Node(3);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;

printList(n1);
const head = partition(n1, 3);
printList(head);

