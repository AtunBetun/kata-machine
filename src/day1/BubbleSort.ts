// naive and buggy
export function bubble_sort(arr: number[]): void {
	let swapped = false;
	do {
		swapped = false;
		for (let x = 0; x < arr.length; ++x) {
			// swap
			if (arr[x] > arr[x + 1]) {
				swapped = true;
				let t = arr[x + 1];
				arr[x + 1] = arr[x]
				arr[x] = t;
			}
		}
	} while (swapped)

}

// reducing x
export function bubble_sort_v2(arr: number[]): void {

	for (let i = 0; i < arr.length; ++i) {
		for (let j = 0; j < arr.length - 1 - i; ++j) {
			if (arr[j] > arr[j + 1]) {
				let t = arr[j + 1];
				arr[j + 1] = arr[j]
				arr[j] = t;
			}
		}
	}

}
