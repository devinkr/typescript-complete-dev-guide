export class NumbersCollection {
	constructor(public data: number[]) {}
	// Above is shortcut and same as below
	// data: number[];
	// constructor (data: number[]) {
	//   this.data = data
	// }

	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex];
	}

	swap(leftIndex: number, rightIndex: number): void {
		[this.data[leftIndex], this.data[rightIndex]] = [
			this.data[rightIndex],
			this.data[leftIndex],
		];
	}

	get length(): number {
		return this.data.length;
	}
}
