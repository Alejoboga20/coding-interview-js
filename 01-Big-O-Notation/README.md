# Big O Notation

## What is a good code?

- Readable: Clean, easy to understand.
- Scalable: Can handle large inputs efficiently.

**Run time complexity** is a way to describe the efficiency of an algorithm. It is a function that describes the amount of time an algorithm takes in terms of the amount of inputs the algorithm has.

**Big O Notation** is a way to describe the efficiency of an algorithm. It is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. It allows us to compare the efficiency of different algorithms.

![alt text](image.png)

In JavaScript, we can use the `performance.now()` method to measure the time it takes to run a function.

```javascript
const doSomething = () => {
	let t0 = performance.now();
	// code here...
	let t1 = performance.now();
	console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
};

doSomething();
```

The problem with measuring the time it takes to run a function is that it can vary depending on the machine it is running on. Big O Notation helps us to describe the efficiency of an algorithm in a more abstract way by counting the amount of operations an algorithm performs.

**We need to consider the worst-case scenario when analyzing the efficiency of an algorithm.**

## Big O Notation: O(n) - Linear Time Complexity

**O(n)** describes an algorithm whose performance will grow linearly and in direct proportion to the size of the input data set. The time it takes to run the algorithm will increase in direct proportion to the size of the input data set.

```javascript
function findElement(arr, elem) {
	for (let i = 1; i < array.length; i++) {
		if (arr[i] === elem) {
			console.log(`Element: ${elem} found at index: ${i}`);
		}
	}
}
```

```python
def find_element(arr, elem):
  for i in range(len(arr)):
    if arr[i] == elem:
      print(f'Element: {elem} found at index: {i}')
```

## Big O Notation: O(1) - Constant Time Complexity

**O(1)** describes an algorithm that will always execute in the same time regardless of the size of the input data set. The time it takes to run the algorithm will remain constant.

```javascript
function logFirstElement(arr) {
	console.log(arr[0]);
}
```

```python
def print_first_element(arr):
  print(arr[0])
```

**Inputs can be any type of data, it's not restricted to arrays.**

## Big O Rules

1. **Worst Case**: We need to consider the worst-case scenario when analyzing the efficiency of an algorithm.

```javascript
const inputArray = ['Dora', 'Boots', 'Diego', 'Nemo', 'Swiper', 'Map', 'Backpack'];

function findNemo(arrayOfNames) {
	for (let i = 0; i < arrayOfNames.length; i++) {
		if (arrayOfNames[i] === 'Nemo') {
			console.log('Found Nemo!');
			break;
		}
	}
}

findNemo(inputArray);
```

Even though the function above has a break statement, we need to consider the worst-case scenario where 'Nemo' is the last element in the array.

2. **Remove Constants**: We don't need to consider constants when analyzing the efficiency of an algorithm.

```javascript
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
	console.log(items[0]); // O(1)

	const middleIndex = Math.floor(items.length / 2); // O(1)
	let index = 0; // O(1)

	while (index < middleIndex) {
		// O(n/2)
		console.log(items[index]);
		index++;
	}

	for (let i = 0; i < 100; i++) {
		// O(100)
		console.log('Hi');
	}
}

// O(1 + 1 + 1 + n/2 + 100) = O(103 + n/2) = O(n)
```

3. **Different terms for inputs**: We need to consider different terms for inputs when analyzing the efficiency of an algorithm.

```javascript
function compressBoxesTwice(boxes, boxes2) {
	// O(n)
	boxes.forEach((box) => {
		console.log(box);
	});

	// O(m)
	boxes2.forEach((box) => {
		console.log(box);
	});
}

// O(n + m) = O(n)
// If the loops were nested we would use O(n * m)
```

For nested loops, we use multiplication instead of addition.

```javascript
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array = []) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			console.log(array[i], array[j]);
		}
	}
}
// O(n * n) = O(n^2) - Quadratic Time Complexity
```

4. **Drop Non-Dominant Terms**: We need to drop non-dominant terms when analyzing the efficiency of an algorithm.

```javascript
function printAllNumbersThenAllPairSums(numbers) {
	// O(n)
	console.log('These are the numbers:');
	numbers.forEach((number) => {
		console.log(number);
	});

	// O(n^2)
	console.log('And these are their sums:');
	numbers.forEach((firstNumber) => {
		numbers.forEach((secondNumber) => {
			console.log(firstNumber + secondNumber);
		});
	});
}
// O(n + n^2) = O(n^2)
```

## Space Complexity

Space complexity is a way to describe the amount of memory an algorithm takes in terms of the amount of input data.

## Cheat Sheet

```
O(1) Constant- no loops
O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search) O(n) Linear- for loops, while loops through n items
O(n log(n)) Log Liniear- usually sorting operations
O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops
O(2^n) Exponential- recursive algorithms that solves a problem of size N
O(n!) Factorial- you are adding a loop for every element
Iterating through half a collection is still O(n) Two separate collections: O(a \_ b)
```

### What can cause time in a function?

Operations (+, -, \_, /) Comparisons (<, >, ==)
Looping (for, while)
Outside Function call (function())

### Rule Book

Rule 1: Always worst Case
Rule 2: Remove Constants
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a\*b)

- for steps in order

- for nested steps
  Rule 4: Drop Non-dominant terms

### What causes Space complexity?

- Variables
- Data Structures
- Function Call
- Allocations

## Resources

- [ZTM Cheat Sheet](https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent)
