# Big O Notation

## What is a good code?

- Readable: Clean, easy to understand.
- Scalable: Can handle large inputs efficiently.

**Run time complexity** is a way to describe the efficiency of an algorithm. It is a function that describes the amount of time an algorithm takes in terms of the amount of input to the algorithm.

**Big O Notation** is a way to describe the efficiency of an algorithm. It is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. It allows us to compare the efficiency of different algorithms.

![alt text](image.png)

In JavaScript, we can use the `performance.now()` method to measure the time it takes to run a function.

```javascript
const doSomething = () => {
	let t0 = performance.now();
	// code here
	let t1 = performance.now();
	console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
};

doSomething();
```

The problem with measuring the time it takes to run a function is that it can vary depending on the machine it is running on. Big O Notation helps us to describe the efficiency of an algorithm in a more abstract way by counting the amount of operations an algorithm performs.

## Resources

- [ZTM Cheat Sheet](https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent)
