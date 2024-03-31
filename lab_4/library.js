export function a(arg) {
	let out = 0;
	for (const n in arg){
		out += n;
	}
	return out;
}