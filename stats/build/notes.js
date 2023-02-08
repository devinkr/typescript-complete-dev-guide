"use strict";
// Nothing to do with generics
const addOne = (a) => {
    return a + 1;
};
const addTwo = (a) => {
    return a + 2;
};
const addThree = (a) => {
    return a + 3;
};
// Make use of function arguments to write resuable code
const add = (a, b) => {
    return a + b;
};
// Bad way to write classes not using generics
class HoldNumber {
}
class HoldString {
}
const holdNumber = new HoldNumber();
holdNumber.data = 123;
const holdString = new HoldString();
holdString.data = 'String';
// TypeOfData is a type argument just like function arguments
class HoldAnything {
}
// Here passing in number as a type argument
const holdNum = new HoldAnything();
holdNum.data = 123;
const holdStr = new HoldAnything();
holdStr.data = 'A string';
