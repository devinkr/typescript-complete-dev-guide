"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    // Above is shortcut and same as below
    // data: number[];
    // constructor (data: number[]) {
    //   this.data = data
    // }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        [this.data[leftIndex], this.data[rightIndex]] = [
            this.data[rightIndex],
            this.data[leftIndex],
        ];
    }
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;
