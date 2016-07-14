function List() {
    this.listSize = 0;
    this.position = 0;
    this.dataStore = [];
}

List.prototype.clear = function () {
    this.dataStore = [];
    this.listSize = this.position = 0;
};

List.prototype.append = function (element) {
    this.dataStore[this.listSize++] = element;
};

List.prototype.toString = function () {
    return `[${this.dataStore.join(', ')}]`;
};

List.prototype.getElement = function () {
    return this.dataStore[this.position];
};

List.prototype.find = function (element) {
    for(var i = 0; i < this.listSize; i++) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
};

List.prototype.insert = function (element, after) {
    var afterIndex = this.find(after);
    if (afterIndex === -1) { return false; }
    this.dataStore.splice(afterIndex + 1, 0, element);
    this.listSize++;
    return true;
};

List.prototype.remove = function (element) {
    var index = this.find(element);
    if (index === -1) { return false; }
    this.dataStore.splice(index, 1);
    this.listSize--;
    return true;
};

List.prototype.front = function () {
    this.position = 0;
};

List.prototype.end = function () {
    this.position = this.listSize - 1;
};

List.prototype.next = function () {
    if (!(this.position === (this.listSize - 1))) {
        this.position++;
    }
};

List.prototype.prev = function () {
    if (!(this.position === 0)) {
        this.position--;
    }
};

List.prototype.currPos = function () {
    return this.position;
};

List.prototype.moveTo = function (position) {
    if (0 <= position && position < this.listSize) {
        this.position = position;
    }
};

List.prototype.contains = function (element) {
    return this.find(element) !== -1;
};

module.exports = List;