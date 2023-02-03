class Vehicle {
	constructor(public color: string) {}

	// public drive(): void {
	// 	console.log('chugga chugga');
	// }

	protected honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle('orange');

// TS has modifiers similar to Java public, private, protected
// public - method can be called any where, any time
// private - method can only be called by other methods in this class
// protected - method can be called by other methods in this class or by other methods in child classes

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  // overriding method on child class
	private drive(): void {
		console.log('vrooom');
	} // errors because can't make a method private that overrides parent method.

	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const aCar = new Car(4, 'blue');
// aCar.drive(); // Errors because drive is a private method
aCar.startDrivingProcess(); //ok because it calls public method which then calls private method.
// aCar.honk(); //Error because honk is protected but honk can still be called from within child class.
