export function getCount(totalCount, limit) {
	return Math.ceil(totalCount / limit)
}

export function getArray(elements) {
	const array = [];

	for (let i = 1; i <= elements; ++i) {
		array.push(i)
	}

	return array;
}

