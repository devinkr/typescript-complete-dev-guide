// Type annotations for simple primitive types

let apples: number = 5 //type annotation that apples is a number.
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
let colors: string[] =  ['red', 'green', 'blue']
// array of numbers
let myNumbers: number[] = [1, 2, 3, 4]
// array of booleans
let truths: boolean[] = [true, true, false]

// Classes
class Car {

}
// type of class Car
let car: Car = new Car();

// Object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 5
}

// Type annotation for functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// All of these type annotations in this file can be removed and just be type inferences.

// variable declaration         variable initialization
const color             =         'red'

// If we declare and initialize on same line TS can do type inference for us.

