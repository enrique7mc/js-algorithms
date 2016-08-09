'use strict';
var expect = require('expect');
var Queue = require('../src/queue');

describe('Queue', function () {
    describe('Queue object', function () {
        it('should return a Queue object', function () {
            expect(new Queue).toBeA(Queue)
        });
    });
});