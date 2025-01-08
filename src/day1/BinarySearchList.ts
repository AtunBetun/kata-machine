export default function bs_list(haystack: number[], needle: number): boolean {
	let lo: number = 0;
	let hi: number = haystack.length;

	do {
		const m: number = Math.floor(lo + (hi - lo) / 2);
		const v: number = haystack[m];

		if (v === needle)
			return true;
		else if (v > needle)
			hi = m;
		else
			lo = m + 1;

	} while (lo < hi)

	return false;
}
