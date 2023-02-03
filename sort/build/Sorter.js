"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        // Abstracted array specific swapping into separate class to have generic sort class.
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
        // Bad code because we have to add custom code for each type of thing we are sorting
        /*     // Bubble sort
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {

        // If collection is an array of numbers.
        if (this.collection instanceof Array) { // type guard for non primitive types.
          if (this.collection[j] > this.collection[j + 1]) {
            [this.collection[j], this.collection[j + 1]] = [
              this.collection[j + 1],
              this.collection[j],
            ];
          }
        }
      
      // If collection is a string
      if (typeof(this.collection) === 'string') { // type guard for primitive values use typeof
        // code to sort strings here
      }

      }
        }*/
    }
}
exports.Sorter = Sorter;
