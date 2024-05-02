const arr1 = []
const arr2 = []
const max = 200;
let a = 0;
for (var i = 0; i < 100; i++) {
	arr1.push(Math.floor(Math.random() * max));
	a = Math.floor(Math.random() * max);
	arr2.push(a >= 100 ? undefined : a);
}


console.log("Initial arrays:");
console.log(arr1);
console.log('\n');
console.log(arr2);

for (var i = 0; i < 100; i++){
	if (arr2[i] === undefined) {arr2[i] = null}
}


console.log("Bubble sorting:");
console.log("Ascending order:")
console.log(Sorting.bubbleSort([...arr1]));
console.log("Descending order:")
console.log(Sorting.bubbleSort([...arr1], 'desc'));
console.log("Sparse, ascending order:")
console.log(Sorting.bubbleSort([...arr2]));


console.log("Minimal number sorting:");
console.log("Ascending order:")
console.log(Sorting.minSort([...arr1]));
console.log("Descending order:")
console.log(Sorting.minSort([...arr1], 'desc'));
console.log("Sparse, ascending order:")
console.log(Sorting.minSort([...arr2]));


console.log("Insetrion sorting:");
console.log("Ascending order:")
console.log(Sorting.insetrionSort([...arr1]));
console.log("Descending order:")
console.log(Sorting.insetrionSort([...arr1], 'desc'));
console.log("Sparse, ascending order:")
console.log(Sorting.insetrionSort([...arr2]));


console.log("Shell sorting:");
console.log("Ascending order:")
console.log(Sorting.shellSort([...arr1]));
console.log("Descending order:")
console.log(Sorting.shellSort([...arr1], 'desc'));
console.log("Sparse, ascending order:")
console.log(Sorting.shellSort([...arr2]));


console.log("Quick sorting:");
console.log("Ascending order:")
console.log(Sorting.quickSort([...arr1]));
console.log("Descending order:")
console.log(Sorting.quickSort([...arr1], 'desc'));
console.log("Sparse, ascending order:")
console.log(Sorting.quickSort(arr2));
