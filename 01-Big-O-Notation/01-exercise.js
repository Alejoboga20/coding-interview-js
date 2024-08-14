// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
	let a = 10; // O(1) - Constant Time
	a = 50 + 3; // O(1) - No matter how big the input is, this operation will always take the same amount of time

	// this loop has O(n) iterations where n is the length of the input
	for (let i = 0; i < input.length; i++) {
		anotherFunction(); // O(n) - Linear Time
		let stranger = true; // O(n) - Linear Time
		a++; // O(n) - Linear Time
	}

	return a; // O(1) - Constant Time
}

const anotherFunction = () => {
	console.log('Hello World');
};

const inputArray = [1, 2, 3, 4, 5];

funChallenge(inputArray);

// Big O : 1 + 1 + n + n + n + n + 1 = 4n + 3 => n => O(n) when n is very large
// Answer: O(n) - Linear Time
