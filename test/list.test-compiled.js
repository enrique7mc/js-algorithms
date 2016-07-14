'use strict';

var expect = require('expect');
var List = require('../src/list');

describe('List', function () {
    describe('List object', function () {
        it('should return a List object', function () {
            expect(new List()).toBeA(List);
        });
    });

    describe('List length', function () {
        it('should return an empty List', function () {
            let list = new List();
            expect(list.listSize).toBe(0);
        });
    });

    describe('List position', function () {
        it('should return the first position', function () {
            let list = new List();
            expect(list.position).toBe(0);
        });
    });

    describe('clear(e)', function () {
        it('should clear the list', function () {
            let list = new List();
            list.append(1);
            list.append(2);
            expect(list.listSize).toBe(2);
            list.clear();
            expect(list.listSize).toBe(0);
            expect(list.position).toBe(0);
        });
    });

    describe('toString()', function () {
        it('should return the list as string', function () {
            let list = new List();
            expect(list.toString()).toBe('[]');
            list.append(1);
            list.append(2);
            list.append(3);
            expect(list.toString()).toBe('[1, 2, 3]');
        });
    });

    describe('append(e)', function () {
        it('should append an element at next position', function () {
            let list = new List();
            list.append(1);
            list.append(2);
            expect(list.listSize).toBe(2);
        });
    });

    describe('getElement()', function () {
        it('should getElement at current position', function () {
            let list = new List();
            expect(list.getElement()).toBe(undefined);
            list.append(1);
            list.append(2);
            expect(list.getElement()).toBe(1);
        });
    });

    describe('find(element)', function () {
        it('should find element position', function () {
            let list = new List();
            list.append(1);
            list.append(2);
            list.append(3);
            expect(list.find(3)).toBe(2);
            expect(list.find(2)).toBe(1);
        });
    });

    describe('insert(element, after)', function () {
        it('should find element position', function () {
            let list = new List();
            list.append(1);
            list.append(2);
            list.append(3);
            var result = list.insert(5, 2);
            expect(result).toBe(true);
            expect(list.listSize).toBe(4);
            expect(list.toString()).toBe('[1, 2, 5, 3]');
        });
    });

    describe('remove(element)', function () {
        it('should remove element', function () {
            let list = new List();
            list.append(1);
            list.append(2);
            list.append(3);
            expect(list.remove(2)).toBe(true);
            expect(list.listSize).toBe(2);
            expect(list.remove('not here')).toBe(false);
            expect(list.listSize).toBe(2);
        });
    });

    describe('front()', function () {
        it('should set position at the beginning', function () {
            let list = new List();
            list.append(1);
            list.append(2);
            list.append(3);
            list.front();
            expect(list.position).toBe(0);
        });
    });

    describe('end()', function () {
        it('should set position at the end', function () {
            let list = new List();
            list.append(1);
            list.append(2);
            list.append(3);
            list.end();
            expect(list.position).toBe(2);
        });
    });

    describe('next()', function () {
        it('should set position to the next element', function () {
            let list = new List();
            list.append(1);
            list.append(2);
            list.append(3);
            expect(list.position).toBe(0);
            list.next();
            expect(list.position).toBe(1);
            list.next();
            expect(list.position).toBe(2);
            list.next();
            expect(list.position).toBe(2);
        });
    });

    describe('prev()', function () {
        it('should set position to the previous element', function () {
            let list = new List();
            list.append(1);
            list.append(2);
            list.append(3);
            list.next();
            list.next();
            expect(list.position).toBe(2);
            list.prev();
            expect(list.position).toBe(1);
            list.prev();
            expect(list.position).toBe(0);
            list.prev();
            expect(list.position).toBe(0);
        });
    });

    describe('currPos()', function () {
        it('should retrieve the current position', function () {
            let list = new List();
            list.append(1);
            list.append(2);
            list.append(3);
            expect(list.currPos()).toBe(0);
            list.next();
            expect(list.currPos()).toBe(1);
            list.next();
            expect(list.currPos()).toBe(2);
            list.next();
            expect(list.currPos()).toBe(2);
        });
    });

    describe('end()', function () {
        it('should set position at the end', function () {
            let list = new List();
            list.append(1);
            list.append(2);
            list.append(3);
            list.end();
            expect(list.position).toBe(2);
        });
    });

    describe('moveTo(position)', function () {
        it('should move to the specified position', function () {
            let list = new List();
            list.append(1);
            list.append(2);
            list.append(3);
            list.moveTo(2);
            expect(list.position).toBe(2);
            list.moveTo(0);
            expect(list.position).toBe(0);
            list.moveTo(-1);
            expect(list.position).toBe(0);
        });
    });

    describe('contains(element)', function () {
        it('should indicate if the element exists', function () {
            let list = new List();
            list.append(1);
            list.append(2);
            list.append(3);
            expect(list.contains(1)).toBe(true);
            expect(list.contains(2)).toBe(true);
            expect(list.contains(3)).toBe(true);
            expect(list.contains(4)).toBe(false);
        });
    });
});

//# sourceMappingURL=list.test-compiled.js.map