'use strict';
var expect = require('expect');
var List = require('../src/list');

describe('List', function () {
    describe('List object', function () {
        it('should return a List object', function () {
            expect(new List).toBeA(List)
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

    describe('append(e)', function () {
        it('should append an element at next position', function () {
            let list = new List();
            list.append(1);
            list.append(2);
            expect(list.listSize).toBe(2);
        });
    });
});