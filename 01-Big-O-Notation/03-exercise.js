function boooo(n = []) {
	// We are creating just one more variable so we can say that it is O(1) - Constant Space
	for (let i = 0; i < n.length; i++) {
		console.log('booooo!');
	}
}

boooo([1, 2, 3, 4, 5]); // O(n) - Linear Time , O(1) - Constant Space

function arrayOfHiNTimes(n = 0) {
	// We are creating an array with n elements so we can say that it is O(n) - Linear Space
	let hiArray = [];
	for (let i = 0; i < n; i++) {
		hiArray[i] = 'hi';
	}
	return hiArray;
}

arrayOfHiNTimes(6); // O(n) - Linear Time , O(n) - Linear Space
