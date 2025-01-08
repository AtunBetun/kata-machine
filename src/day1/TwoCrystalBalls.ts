export default function two_crystal_balls(breaks: boolean[]): number {
	let jump_amount = Math.floor(Math.sqrt(breaks.length));

	let i = jump_amount;

	// find jump at which it breaks
	for (; i < breaks.length; i += jump_amount) {
		if (breaks[i]) {
			break;
		}
	}

	i -= jump_amount;

	// j is just a counter for "running back the jump"
	// i is the actual index value
	for (let j = 0; j < jump_amount && i < breaks.length; ++i, ++j) {
		if (breaks[i]) {
			return i;
		}
	}
	return -1;
}
