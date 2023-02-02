// Type annotations for simple primitive types

let apples: number = 5; //type annotation that apples is a number.
apples = 10;
// apples = true; error because apples has to be a number

let speed: string = 'fast';
// speed = 5; error has to be a string

let nothingMuchL: null = null;
let noting: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Type annotations for reference types

// Arrays
// type annotation color is an array of strings
let colors: string[] = ['red', 'green', 'blue'];
// array of numbers
let myNumbers: number[] = [1, 2, 3, 4];
// array of booleans
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
// type of class Car
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
	x: 10,
	y: 5,
};

// Type annotation for functions
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

// All of these type annotations in this file can be removed and just be type inferences.

// variable declaration         variable initialization
const color = 'red';

// If we declare and initialize on same line TS can do type inference for us.

// We mostly want to use type inference and only do type annotations when necessary

// 1. when a function returns the any type we need to clarify value
const json = '{"x": 10, "y": 20}';
// coordinates is type any because JSON.parse can return lots of different things
const coordinates = JSON.parse(json);
const coordinatesWithTypes: { x: number; y: number } = JSON.parse(json);

// 2. When we declare a variable on one line and initialize it later
let word = ['red', 'green', 'blue'];

let foundWord; // Warning that foundWord has implicit any type
for (const curr of word) {
	if (curr === 'green') foundWord = true;
}

// We don't want implicit any type so add type annotation
let foundWordTyped: boolean;
for (const curr of word) {
	if (curr === 'green') foundWordTyped = true;
}

// 3. when we want a variable to have a type that can't be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero = false; //Could be number or boolean
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i]; // TS gives error because it infers type should be boolean.
	}
}

let numberAboveZeroTyped: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZeroTyped = numbers[i]; // Now it works because it can be boolean or number
	}
}
