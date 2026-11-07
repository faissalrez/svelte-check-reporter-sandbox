// Deliberate vulnerabilities, to see how GitHub shows CodeQL's alerts in a pull request
export function greet(): void {
	const name = decodeURIComponent(location.hash.slice(1));
	document.body.innerHTML = `Hello ${name}`;
}

export function run(): unknown {
	return eval(location.search.slice(1));
}
