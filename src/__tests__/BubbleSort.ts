import { bubble_sort } from "@code/BubbleSort";
import { bubble_sort_v2 } from "@code/BubbleSort";

test("bubble-sort", function() {
	const arr = [9, 3, 7, 4, 69, 420, 42];

	debugger;
	bubble_sort(arr);
	expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

test("bubble-sort-v2", function() {
	const arr = [9, 3, 7, 4, 69, 420, 42];

	debugger;
	bubble_sort_v2(arr);
	expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

