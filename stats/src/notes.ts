// Nothing to do with generics

const addOne = (a: number): number => {
	return a + 1;
};

const addTwo = (a: number): number => {
	return a + 2;
};

const addThree = (a: number): number => {
	return a + 3;
};

// Make use of function arguments to write resuable code
const add = (a: number, b: number): number => {
	return a + b;
};

// Bad way to write classes not using generics
class HoldNumber {
	data: number;
}

class HoldString {
	data: string;
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = 'String';

// TypeOfData is a type argument just like function arguments
class HoldAnything<TypeOfData> {
	data: TypeOfData;
}

// Here passing in number as a type argument
const holdNum = new HoldAnything<number>();
holdNum.data = 123;

const holdStr = new HoldAnything<string>();
holdStr.data = 'A string';


// Inheritance vs Composition
// Inheritance is characterized by an "is a" relationship
// Composition is characterized by a "has a" relationship