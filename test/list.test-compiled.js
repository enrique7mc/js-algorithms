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
});

//# sourceMappingURL=list.test-compiled.js.map