// find 1st, find Nth...
const array = ['hi', 'my', 'teddy', 'bear'];

const findItem = (array = [], position = 0) => {
	return array[position];
};

const findFirstItem = (array = []) => {
	findItem(array, 0); // O(1) - Constant Time
};

const findLastItem = (array = []) => {
	findItem(array, array.length - 1); // O(1) - Constant Time
};

const findFirstAndLastItem = (array = []) => {
	const firstItem = findFirstItem(array); // O(1) - Constant Time
	const lastItem = findLastItem(array); // O(1) - Constant Time

	return { firstItem, lastItem };
};

findFirstAndLastItem(array);
