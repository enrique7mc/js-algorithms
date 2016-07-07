function List() {
    this.listSize = 0;
    this.position = 0;
    this.dataStore = [];
}

List.prototype.append = function (element) {
    this.dataStore[this.listSize++] = element;
};

module.exports = List;